'use strict';

var editor = document.getElementById('markdown-text');
const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', (event, reply) => {
  editor.innerHTML = reply;
});
ipcRenderer.send('asynchronous-message', 'ping');
