const editor = document.getElementById('markdown-text');
const fs = require('fs');
const paths = {
    autosaveMD: './res/autosave.md',
    autosaveHTML: './res/autosave.html'
};

editor.innerHTML = fs.readFileSync(paths.autosaveHTML);
