const editor = document.getElementById('markdown-text');
const fs = require('fs');
const paths = {
    autosaveMD: './res/autosave.md',
    autosaveHTML: './res/autosave.html'
};

fs.readFile(paths.autosaveHTML, (err, data) => {
    'use strict';
    if (err) throw err;
    editor.innerHTML = data;
});