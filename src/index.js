'use strict';

const editor = document.getElementById('markdown-text');
const makeBold = document.getElementById('make-bold');
const remote = require('electron').remote;
const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function (event, reply) {
  editor.textContent = reply;
});
ipcRenderer.send('asynchronous-message', 'ping');

function getSelectedText() {
  const length = editor.selectionEnd - editor.selectionStart;
  if (length > 0) {
    return editor.textContent.substring(editor.selectionStart, editor.selectionEnd);
  }
}

makeBold.onclick = function () {

};