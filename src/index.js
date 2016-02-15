var editor;
var remote = require('remote');
// const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;
var fs = require('fs');

window.onbeforeunload = function() {
  return "Are you sure?";
}

function writeFile(file, data) {
  fs.writeFile(file, data, fileError => {
    if (fileError) throw fileError;
    console.log(`Markdown was written to ${file}!`);
  });
}

function readFile(file) {
  editor = document.getElementById('markdown-text')
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    editor.innerHTML = data;
  });
}

readFile('./res/autosave.md');

// app.on('close', function() {
//   editor = document.getElementById('markdown-text');
//   writeFile('./res/autosave.md', editor.innerHTML);
// });



// writes to the autosave which loads automatically
// writeFile('./res/autosave.md', 'this will be markdown\n');
