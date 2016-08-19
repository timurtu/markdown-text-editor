import { clipboard } from 'electron'
import path from 'path'
import toMarkdown from 'to-markdown'
import hljs from 'highlight.js'
import dom from 'domali'
import Promise from 'bluebird'
import { md, notify } from './utils'
const fs = Promise.promisifyAll(require('fs'))


// Editable DOM node for markdown content
export const editor = dom.getId('markdown-text')

// Paths for getting and saving markdown files
const autoSavePath = './docs/autosave.md'
const docsPath = './docs/'


init()

/**
 *  Read from an autosaved markdown file and convert it to
 *  Html. Then display it in on an editable DOM node.
 */
function init() {
  fs.readFileAsync(autoSavePath, 'utf8')
    .then(mdcontent => {
      hljs.initHighlightingOnLoad()
      renderMarkdown(mdcontent)
      interceptClicks()
    })
    .catch(e => document.write(e))
}

/**
 * Smarter way to handle events
 */
function interceptClicks() {
  
  editor.onclick = (event) => {
    event.preventDefault()
    
    const element = event.target
    
    if (element.href) {
      handleLink(element)
    }
  }
}

function handleLink(element) {
  
  const href = element.href
  const filePath = path.parse(href)
  let folderPath = path.parse(filePath.dir)
  
  if (folderPath === 'markup') {
    folderPath = ''
  }
  
  if (filePath.ext === '.md') {
    
    const file = path.join(docsPath, folderPath.base, filePath.base)
    
    fs.readFileAsync(file, 'utf8')
      .then(mdcontent => editor.innerHTML = md.render(mdcontent))
      .catch(e => document.write(e))
  }
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
  
  const filePath = path.join(process.cwd(), autoSavePath)
  const mdcontent = toMarkdown(editor.innerHTML)
  
  return fs.writeFileAsync(autoSavePath, mdcontent)
    .then(() => notify(`Saved Markdown to ${filePath}!`))
    .catch(e => document.write(e))
}
