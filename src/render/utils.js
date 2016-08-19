/**
 * Created by timur on 8/19/16.
 */
import Remarkable from 'remarkable'
import hljs from 'highlight.js'


/**
 * Create a markdown renderer with syntax highlighting.
 */
export const md = new Remarkable({
  
  highlight: (str, lang) => {
    
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (err) {
        notify(`highlight.js error - ${err}`)
      }
    }
    try {
      return hljs.highlightAuto(str).value
    } catch (err) {
      notify(`highlight.js error - ${err}`)
    }
    
    return '' // use external default escaping
  }
})

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
