import fs from 'fs';
import path from 'path';
import pandoc from 'pdc';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';

const editor = document.getElementById('markdown-text');
const toaster = document.getElementById('toaster');
const saveButton = document.getElementById('save');
const loadingBar = document.getElementById('loading-bar');
const autosavePath = './docs/autosave.md';

let currentFontSize = 16;
const maxFontSize = 40;
const minFontSize = 12;

let isHtml = true;
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
                renderMD(mdcontent.toString());
            });
        });

    }

}

// Dangerously render markdown to html
function renderMD(markdown) {
    editor.innerHTML += md.render(markdown);
}

document.getElementById('make-bold').addEventListener('click', () => {
    document.execCommand('bold');
});

document.getElementById('emphasize').addEventListener('click', () => {
    document.execCommand('italic');
});

document.getElementById('under-line').addEventListener('click', () => {
    document.execCommand('underline');
});

document.getElementById('strike-through').addEventListener('click', () => {
    document.execCommand('strikeThrough');
});

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
    fs.access(path.join(autosavePath), fs.W_OK | fs.R_OK, (err) => {
        if (err) throw err;
        pandoc(editor.innerHTML, 'html', 'markdown', function (err, result) {
            if (err) throw err;
            fs.writeFile(autosavePath, result, (err) => {
                if (err) throw err;
                toast('Files Saved.');
            });
        });
    });
}

document.getElementById('switch').addEventListener('click', () => {
    if (isHtml) {

        /**
         * Read from the autosaved markdown file and dangerously
         * set it to the DOM.
         */
        fs.readFile(autosavePath, (err, data) => {
            if (err) throw err;
            editor.innerHTML = `<pre>${data.toString()}</pre>`;
            saveButton.style.display = 'none';
        });
        editor.setAttribute('contenteditable', 'false');
        isHtml = false;
    } else {
        init();
        saveButton.style.display = 'inline';
        editor.setAttribute('contenteditable', 'true');
        isHtml = true;
    }
});


function toast(message) {
    toaster.textContent = message;
    setTimeout(() => {
        toaster.textContent = '';
    }, 2000);
}
