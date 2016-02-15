'use strict';

var editor = document.getElementById('markdown-text');
const remote = require('remote');
// const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;
const fs = require('fs');
const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function(event, reply) {
  editor.innerHTML = reply;
});
ipcRenderer.send('asynchronous-message', 'ping');
