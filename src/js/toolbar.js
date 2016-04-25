/**
 * Created by timur on 4/24/16.
 */

import toolbarjs from 'toolbarjs'

let commandButtons = []
let commands = ['bold', 'italic', 'underline']

let currentFontSize = 16
const maxFontSize = 40
const minFontSize = 12


commands.forEach((command) => {
  commandButtons.push(
    {
      label: `<i class="fa fa-${command}"><i/>`,
      click: event => {
        document.execCommand(command)
      }
    }
  )
})

let buttons = [
  {
    label: '<i class="fa fa-save"></i>',
    click: event => {
      saveMarkdown()
    }
  },
  ...commandButtons,
  {
    label: '<i class="fa fa-strikethrough"></i>',
    click: event => {
      document.execCommand('strikeThrough')
    }
  },
  {
    label: '<i class="fa fa-link"></i>',
    click: event => {
      console.log('Create a popup window to enter a link for the selected text. ') // TODO
    }
  },
  {
    label: '<i class="fa fa-minus"></i>',
    click: event => {

      if (currentFontSize > minFontSize) {

        changeFontSize(currentFontSize -= 2)
      }
    }
  },
  {
    label: '<i class="fa fa-plus"></i>',
    click: event => {

      if (currentFontSize < maxFontSize) {

        changeFontSize(currentFontSize += 2)
      }
    }
  },
  {
    label: '<i class="fa fa-copy"></i>',
    click: event => {
      copyAllMarkdown()
    }
  }
]

let toolbar = toolbarjs(
  'rgba(30, 145, 200, 0.7)',

  'top',

  buttons

)

/**
 * @param pixels The amount of pixels to set the font
 * size to.
 */
function changeFontSize(pixels) {

  editor.style.fontSize = `${pixels}px`
}
