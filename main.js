'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');
let mainWindow = null;
const ipcMain = electron.ipcMain;
const autoSavePath = './res/autosave.md';

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
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
