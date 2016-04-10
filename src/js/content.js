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

init();

/**
 *  Read from an autosaved markdown file and convert it to
 *  Html. Then display it in on an editable DOM node.
 */
function init() {

    if (fs.existsSync(paths.autosaveHTML)) {
        fs.readFile(paths.autosaveHTML, (err, data) => {

            if (err) throw err;
            editor.innerHTML = data;

        });
    } else {
        editor.innerHTML = 'Markdown goes here.';
    }

}

function storeHtml() {
    fs.writeFileSync(paths.autosaveHTML, editor.innerHTML);
}

/**
 * Raise the font size by two pixels
 */
document.getElementById('font-up').addEventListener('click', () => {
    if (currentFontSize < maxFontSize)
        changeFontSize(currentFontSize += 2);
});

/**
 * Lower the font size by two pixels
 */
document.getElementById('font-down').addEventListener('click', () => {
    if (currentFontSize > minFontSize)
        changeFontSize(currentFontSize -= 2);
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
document.getElementById('save').addEventListener('click', () => {

    fs.writeFile(paths.autosaveHTML, editor.innerHTML, (err) => {
        if (err) throw err;
        notice('HTML File Saved.');
    });
    pandoc(editor.innerHTML, 'html', 'markdown', function (err, result) {
        if (err) throw err;
        fs.writeFile(paths.autosaveMD, result, (err) => {
            if(err) throw err;
            notice('Markdown File Saved.');
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
            editor.innerHTML = data;
        });
        isHtml = false;
    } else {
        fs.readFile(paths.autosaveHTML, (err, data) => {
            if (err) throw err;
            editor.innerHTML = data;
        });
        isHtml = true;
    }
});


function notice(message) {
    const notice = document.createElement('div');
    notice.textContent = message;
    notice.style.margin = 0;
    editor.insertBefore(notice, editor.firstChild);
    setTimeout(() => {
        notice.remove();
    }, 1500);
}
