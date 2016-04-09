'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = require('electron').BrowserWindow;
var fs = require('fs');
var mainWindow = null;
var ipcMain = require('electron').ipcMain;
var autoSavePath = './res/autosave.md';

//ipcMain.on('asynchronous-message', function(event, message) {
//  console.log(message);
//  fs.readFile(autoSavePath, function(err, data) {
//    if (err) throw err;
//    event.sender.send('asynchronous-reply', data);
//  });
//});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // mainWindow.webContents.openDevTools();
}

app.on('closed', function () {
  mainWindow = null;
});

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});