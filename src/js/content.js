import {clipboard} from 'electron';

import fs from 'fs';
import path from 'path';

import Remarkable from 'remarkable';
import hljs from 'highlight.js';
import pandoc from 'pdc';

// Paths for getting and saving markdown files
const autosavePath = './docs/autosave.md';
const docsPath = './docs/';

// Toolbar buttons
const editor = document.getElementById('markdown-text'); // Editable DOM node for markdown content
const toaster = document.getElementById('toaster');
const saveButton = document.getElementById('save');

let currentFontSize = 16;
const maxFontSize = 40;
const minFontSize = 12;

let isMarkdown = false;

let elements;

let md = new Remarkable({
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {
                console.log(err);
            }
        }
        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {
            console.log(err);
        }

        return ''; // use external default escaping
    }
});

init();

makeLinks();

getContents();


/**
 *  Read from an autosaved markdown file and convert it to
 *  Html. Then display it in on an editable DOM node.
 */
function init() {

    if (fs.existsSync(autosavePath)) {

        fs.access(autosavePath, fs.R_OK | fs.W_OK, (err) => {

            if (err) throw err;

            fs.readFile(autosavePath, (err, mdcontent) => {

                if (err) throw err;

                // Syntax Highlighting
                hljs.initHighlightingOnLoad();

                renderMD(mdcontent.toString());
            });
        });
    }

}

function renderMD(markdown) {

    // Dangerously render markdown to html
    editor.innerHTML += md.render(markdown);
}

const commands = ['bold', 'italic', 'underline', 'strikeThrough'];

commands.forEach((command) => {

    document.getElementById(command).addEventListener('click', () => {

        // These are actually browser APIs
        document.execCommand(command);
    });
});

// Make links do things
function makeLinks() {

    setTimeout(() => {

        let links = document.getElementsByTagName('a');


        // collect all the links and link them together
        Array.prototype.forEach.call(links, (link) => {

            link.addEventListener('click', (event) => {

                event.preventDefault();

                const href = event.target.href;
                const filePath = path.parse(href);
                let folderPath = path.parse(filePath.dir);

                if (folderPath == 'markup') {

                    folderPath = '';
                }

                if (filePath.ext === '.md') {

                    fs.readFile(path.join(docsPath, folderPath.base, filePath.base), (err, data) => {

                        if (err) throw err;

                        editor.innerHTML = md.render(data.toString());
                    });

                } else if (href.startsWith('http')) {

                }
            });
        });
    }, 3000);
}

// Copy all markdown to clipboard
document.getElementById('copy').addEventListener('click', () => {

    saveMD().then(function () {

        fs.readFile(autosavePath, (err, data) => {

            if (err) throw err;

            clipboard.writeText(data.toString());

            toast('Copied!');
        });

    });
});

/**
 * Get the current editor's contents as a list of nodes
 */
function getContents() {

    if (editor.hasChildNodes()) {

        elements = editor.childNodes;
        console.log(elements);
    }
}

/**
 * Raise the font size by two pixels
 */
document.getElementById('font-up').addEventListener('click', () => {

    if (currentFontSize < maxFontSize) {

        changeFontSize(currentFontSize += 2);
    }
});

/**
 * Lower the font size by two pixels
 */
document.getElementById('font-down').addEventListener('click', () => {

    if (currentFontSize > minFontSize) {

        changeFontSize(currentFontSize -= 2);
    }
});

/**
 * @param pixels The amount of pixels to set the font
 * size to.
 */
function changeFontSize(pixels) {

    editor.style.fontSize = `${pixels}px`;
}

/**
 *  Dangerously take the html from our editable DOM node
 *  and convert it to markdown. Then save it to our autosavePath
 *  file.
 */
saveButton.addEventListener('click', () => {

    saveMD();
});

/**
 * Save markdown to disk as a single file.
 */
function saveMD() {

    return new Promise((resolve, reject) => {

        fs.access(path.join(autosavePath), fs.W_OK | fs.R_OK, (err) => {

            if (err) throw err;

            pandoc(editor.innerHTML, 'html', 'markdown', function (err, result) {

                if (err) throw err;

                fs.writeFile(autosavePath, result, (err) => {

                    if (err) throw err;

                    toast('Saved!');

                    resolve();
                });
            });
        });
    });
}

document.getElementById('switch').addEventListener('click', () => {
    if (!isMarkdown) {

        /**
         * Read from the autosaved markdown file and dangerously
         * set it to the DOM.
         */
        fs.readFile(autosavePath, (err, data) => {

            if (err) throw err;

            editor.innerHTML = `<pre>${data.toString()}</pre>`;

            saveButton.style.display = 'none';
        });

        // Don't let the user edit markdown directly because that's not what this app is for
        editor.setAttribute('contenteditable', 'false');
        isMarkdown = true;
    } else {

        init();

        saveButton.style.display = 'inline';

        editor.setAttribute('contenteditable', 'true');
        isMarkdown = false;
    }
});


function toast(message) {

    toaster.textContent = message;

    setTimeout(() => {

        toaster.textContent = '';

    }, 2000);
}