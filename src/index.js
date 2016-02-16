'use strict';

var editor = document.getElementById('markdown-text');
const remote = require('electron').remote;
// const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;
const fs = require('fs');
const ipcRenderer = remote.ipcRenderer;

//ipcRenderer.on('asynchronous-reply', (event, reply) => {
//  editor.innerHTML = reply;
//});
//ipcRenderer.send('asynchronous-message', 'ping');
