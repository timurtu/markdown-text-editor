import {clipboard, remote} from 'electron';
const dialog = remote.dialog;

import fs from 'fs';
import path from 'path';

import Remarkable from 'remarkable';
import hljs from 'highlight.js';
import pandoc from 'pdc';

// Paths for getting and saving markdown files
const autoSavePath = './docs/autosave.md';
const docsPath = './docs/';

// Toolbar buttons
const editor = document.getElementById('markdown-text'); // Editable DOM node for markdown content
const toaster = document.getElementById('toaster');
const saveButton = document.getElementById('save');

let currentFontSize = 16;
const maxFontSize = 40;
const minFontSize = 12;

let isMarkdown = false;

let elements = [];

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

    if (fs.existsSync(autoSavePath)) {

        fs.access(autoSavePath, fs.R_OK | fs.W_OK, (err) => {

            if (err) throw err;

            fs.readFile(autoSavePath, (err, mdcontent) => {

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

        fs.readFile(autoSavePath, (err, data) => {

            if (err) throw err;

            clipboard.writeText(data.toString());

            notify('Copied all Markdown contents to clipboard!');
        });

    });
});

/**
 * Get the current editor's contents as a list of nodes
 */
function getContents() {

    setTimeout(() => {

        if (editor.hasChildNodes()) {

            Array.prototype.forEach.call(editor.childNodes, (element) => {

                if (element.nodeName == '#text') {
                    return;
                }

                elements.push(element);
            });
        }
    }, 3000);
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

        fs.access(path.join(autoSavePath), fs.W_OK | fs.R_OK, (err) => {

            if (err) throw err;

            pandoc(editor.innerHTML, 'html', 'markdown', function (err, result) {

                if (err) throw err;

                fs.writeFile(autoSavePath, result, (err) => {

                    if (err) throw err;

                    notify(`Saved Markdown to ${autoSavePath}!`);

                    resolve();
                });
            });
        });
    });
}

function notify(message) {

    const notification = new Notification('Markup', {

        body: message
    });

    notification.onclick = () => {

        alert(`Clicked on ${message}!`);
    };

}