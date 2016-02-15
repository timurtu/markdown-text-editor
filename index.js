'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');
let mainWindow = null;


function readFile(file) {
}

function writeFile(file, data) {
  fs.appendFile(file, data, (fileError) => {

    if (fileError) throw fileError;

    console.log(`The ${data} was appended to ${file}!`);

  });

}

function createWindow() {

  //readFile('./res/autosave.md');
  mainWindow = new BrowserWindow({width: 600, height: 600});
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
