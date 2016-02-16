'use strict';

var editor = document.getElementById('markdown-text');
const remote = require('electron').remote;
const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function(event, reply) {
  editor.textContent = reply;
});
ipcRenderer.send('asynchronous-message', 'ping');
