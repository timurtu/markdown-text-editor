import {clipboard, remote} from 'electron'

import fs from 'fs'
import path from 'path'

import Remarkable from 'remarkable'
import toMarkdown from 'to-markdown';
import hljs from 'highlight.js'

// Paths for getting and saving markdown files
const autoSavePath = './docs/autosave.md'
const docsPath = './docs/'

// Editable DOM node for markdown content
const editor = document.getElementById('markdown-text')

let currentFontSize = 16
const maxFontSize = 40
const minFontSize = 12

let elements = []


/**
 * Create a markdown renderer with syntax highlighting.
 */
let md = new Remarkable({

  highlight: (str, lang) => {

    if (lang && hljs.getLanguage(lang)) {

      try {
        return hljs.highlight(lang, str).value
      } catch (err) {
        console.log(`highlight.js error - ${err}`)
      }
    }

    try {
      return hljs.highlightAuto(str).value
    } catch (err) {
      console.log(`highlight.js error - ${err}`)
    }

    return '' // use external default escaping
  }
})

init()

makeCommands()

/**
 *  Read from an autosaved markdown file and convert it to
 *  Html. Then display it in on an editable DOM node.
 */
function init() {

  if (fs.existsSync(autoSavePath)) {

    fs.access(autoSavePath, fs.R_OK | fs.W_OK, (err) => {

      if (err) throw err

      fs.readFile(autoSavePath, (err, mdcontent) => {

        if (err) throw err

        // Syntax Highlighting
        hljs.initHighlightingOnLoad()

        renderMarkdown(mdcontent.toString())

        interceptClicks()

        makeToolbarButtons()

        getEditorContents()
      })
    })
  }
}

/**
 * Smarter way to handle events
 */
function interceptClicks() {


  document.body.onclick = (event) => {

    const element = event.target;

    /**
     * Handle link behavior
     */
    if(element.href) {
      event.preventDefault()

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

      } else if (href.startsWith('http')) {

      }
    }

    console.log(element);

  }
}

/**
 * These are actually browser APIs
 */
function makeCommands() {

  const commands = ['bold', 'italic', 'underline', 'strikeThrough']

  commands.forEach((command) => {

    document.getElementById(command).onclick = () => {

      document.execCommand(command)
    }
  })
}

/**
 * Dangerously render markdown to html
 *
 * @param markdown raw markdown string
 */
function renderMarkdown(markdown) {

  editor.innerHTML += md.render(markdown)
}

/**
 * Save markdown to disk as a single file.
 *
 * @returns {Promise} Empty promise that resolves when done saving.
 */
function saveMarkdown() {

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
 * Make toolbar buttons do things
 */
function makeToolbarButtons() {

  makeCommands()

  // Copy all markdown to clipboard
  document.getElementById('copy').onclick = () => {

    clipboard.writeText(toMarkdown(editor.innerHTML))

    notify('Copied all Markdown contents to clipboard!')
  }

  /**
   * Raise the font size by two pixels
   */
  document.getElementById('font-up').onclick = () => {

    if (currentFontSize < maxFontSize) {

      changeFontSize(currentFontSize += 2)
    }
  }

  /**
   * Lower the font size by two pixels
   */
  document.getElementById('font-down').onclick = () => {

    if (currentFontSize > minFontSize) {

      changeFontSize(currentFontSize -= 2)
    }
  }

  /**
   *  Dangerously take the html from our editable DOM node
   *  and convert it to markdown. Then save it to our autosavePath
   *  file.
   */
  document.getElementById('save').onclick = () => {

    saveMarkdown()
  }

}

/**
 * @param pixels The amount of pixels to set the font
 * size to.
 */
function changeFontSize(pixels) {

  editor.style.fontSize = `${pixels}px`
}

/**
 * Get the current editor's contents and add them
 * to the elements array.
 */
function getEditorContents() {

  setTimeout(() => {

    if (editor.hasChildNodes()) {

      Array.prototype.forEach.call(editor.childNodes, (element) => {

        if (element.nodeName === '#text') {

          return
        }

        elements.push(element)
      })
    }
  }, 3000)
}

/**
 * Uses Electron and the HTML5 Notification APIs to create a
 * native desktop notification.
 *
 * @param message String that will be notified.
 */
function notify(message) {

  const notification = new Notification('Markup', {

    body: message
  })

  notification.onclick = () => {

    alert(`Clicked on ${message}!`)
  }

}
