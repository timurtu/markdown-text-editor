import {clipboard} from 'electron'

import fs from 'fs'
import path from 'path'

import Remarkable from 'remarkable'
import toMarkdown from 'to-markdown'
import hljs from 'highlight.js'

// Paths for getting and saving markdown files
const autoSavePath = './docs/autosave.md'
const docsPath = './docs/'

// Editable DOM node for markdown content
export const editor = document.getElementById('markdown-text')
let elements = []

/**
 * Create a markdown renderer with syntax highlighting.
 */
let md = new Remarkable({

  highlight: (str, lang) => {

    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str)
          .value
      } catch (err) {
        notify(`highlight.js error - ${err}`)
      }
    }
    try {
      return hljs.highlightAuto(str)
        .value
    } catch (err) {
      notify(`highlight.js error - ${err}`)
    }

    return '' // use external default escaping
  }
})

init()

/**
 *  Read from an autosaved markdown file and convert it to
 *  Html. Then display it in on an editable DOM node.
 */
function init() {

  if (fs.existsSync(autoSavePath)) {

    fs.access(autoSavePath, fs.R_OK | fs.W_OK, (err) => {

      if (err) throw err

      fs.readFile(autoSavePath, 'utf8', (err, mdcontent) => {

        if (err) throw err

        // Syntax Highlighting
        hljs.initHighlightingOnLoad()

        renderMarkdown(mdcontent)

        interceptClicks()

        getEditorContents()
      })
    })
  }
}

/**
 * Smarter way to handle events
 */
function interceptClicks() {

  editor.onclick = (event) => {

    event.preventDefault()

    const element = event.target

    /**
     * Handle link behavior
     */
    if (element.href) {

      handleLink(element)
    }
  }

}

function handleLink(element) {

  const href = element.href
  const filePath = path.parse(href)
  let folderPath = path.parse(filePath.dir)

  if (folderPath == 'markup') {

    folderPath = ''
  }

  if (filePath.ext === '.md') {

    fs.readFile(path.join(docsPath, folderPath.base, filePath.base), (err, data) => {

      if (err) throw err

      editor.innerHTML = md.render(data.toString())
    })

  }
  // else if (href.startsWith('http')) {

  // }
}

/**
 * Dangerously render markdown to html
 *
 * @param markdown raw markdown string
 */
function renderMarkdown(markdown) {

  editor.innerHTML += md.render(markdown)
}

export function copyAllMarkdown() {

  clipboard.writeText(toMarkdown(editor.innerHTML))

  notify('Copied all Markdown contents to clipboard!')
}

/**
 * Save markdown to disk as a single file.
 *
 * @returns {Promise} Empty promise that resolves when done saving.
 */
export function saveMarkdown() {

  return new Promise((resolve, reject) => {

    fs.access(path.join(autoSavePath), fs.W_OK | fs.R_OK, (err) => {

      if (err) reject(err)

      fs.writeFile(autoSavePath, toMarkdown(editor.innerHTML), (err) => {

        if (err) reject(err)

        notify(`Saved Markdown to ${path.join(__dirname, autoSavePath)}!`)

        resolve()
      })
    })
  })
}

/**
 * Get the current editor's contents and add them
 * to the elements array.
 */
function getEditorContents() {

  if (editor.hasChildNodes()) {

    Array.prototype.forEach.call(editor.childNodes, (element) => {

      if (element.nodeName === '#text') {

        return
      }

      elements.push(element)
    })
  }
}

/**
 * Uses Electron and the HTML5 Notification APIs to create a
 * native desktop notification.
 *
 * @param message String that will be notified.
 */
export function notify(message) {

  const notification = new Notification('Markup', {

    body: message
  })

  notification.onclick = () => {

    alert(`Clicked on ${message}!`)
  }

}
