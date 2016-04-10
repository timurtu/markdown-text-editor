import fs from 'fs';
import pandoc from 'pdc';
const editor = document.getElementById('markdown-text');
const paths = {
    autosaveMD: './docs/autosave.md',
    autosaveHTML: './docs/autosave.html'
};
let currentFontSize = 16;
const maxFontSize = 40;
const minFontSize = 12;
let isHtml = true;
let elements;
const toaster = document.getElementById('toaster');

init();

/**
 *  Read from an autosaved markdown file and convert it to
 *  Html. Then display it in on an editable DOM node.
 */
function init() {


    if (fs.existsSync(paths.autosaveMD)) {
        fs.readFile(paths.autosaveMD, (err, data) => {

            if (err) throw err;
            pandoc(data.toString(), 'markdown', 'html', (err, result) => {
                if (err) throw err;
                editor.innerHTML = result;
                getContents();
            });
        });
    } else {
        editor.innerHTML = 'Markdown goes here.';
    }

}

function getContents() {
    if (editor.hasChildNodes()) {
        elements = editor.childNodes;
        console.log(elements);
    }
}

// function storeHtml() {
//     fs.writeFileSync(paths.autosaveHTML, editor.innerHTML);
// }

/**
 * Raise the font size by two pixels
 */
document.getElementById('font-up').addEventListener('click', () => {
    if (currentFontSize < maxFontSize) {
        changeFontSize(currentFontSize += 2);
        toast(`Font size is ${currentFontSize}.`);
    }
});

/**
 * Lower the font size by two pixels
 */
document.getElementById('font-down').addEventListener('click', () => {
    if (currentFontSize > minFontSize) {
        changeFontSize(currentFontSize -= 2);
        toast(`Font size is ${currentFontSize}.`);
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
 *  and convert it to markdown. Then save it to our autosave
 *  file.
 */
const saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => {

    fs.writeFile(paths.autosaveHTML, editor.innerHTML, (err) => {
        if (err) throw err;
        toast('Files Saved.');
    });
    pandoc(editor.innerHTML, 'html', 'markdown', function (err, result) {
        if (err) throw err;
        fs.writeFile(paths.autosaveMD, result, (err) => {
            if (err) throw err;
            toast('Files Saved.');
        });
    });

});

document.getElementById('switch').addEventListener('click', () => {
    if (isHtml) {

        /**
         * Read from the autosaved markdown file and dangerously
         * set it to the DOM.
         */
        fs.readFile(paths.autosaveMD, (err, data) => {
            if (err) throw err;
            editor.innerHTML = `<pre>${data.toString()}</pre>`;
            console.log(data.toString());
        });
        isHtml = false;
    } else {
        init();
        isHtml = true;
    }
});


function toast(message) {
    toaster.textContent = message;
    setTimeout(() => {
        toaster.textContent = '';
    }, 2000);
}
