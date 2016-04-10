import fs from 'fs';
import pandoc from 'pdc';
const editor = document.getElementById('markdown-text');
const paths = {
    autosaveMD: './docs/autosave.md',
    autosaveHTML: './docs/autosave.html'
};
let currentFontSize = 16;
const MAX_FONT = 40;
const MIN_FONT = 12;

init();

/**
 *  Read from an autosaved markdown file and convert it to
 *  Html. Then display it in on an editable DOM node.
 */
function init() {

    fs.readFile(paths.autosaveMD, (err, data) => {

        if (err) throw err;

        /**
         * Convert an autosaved markdown file to HTML then
         * dangerously set it to the DOM.
         */
        pandoc(data, 'markdown', 'html', function (err, result) {
            if (err) throw err;

            editor.innerHTML = result;
        });

    });

}

/**
 * Raise the font size by two pixels
 */
document.getElementById('font-up').addEventListener('click', () => {
    if (currentFontSize < MAX_FONT)
        changeFontSize(currentFontSize += 2);
});

/**
 * Lower the font size by two pixels
 */
document.getElementById('font-down').addEventListener('click', () => {
    if (currentFontSize > MIN_FONT)
        changeFontSize(currentFontSize -= 2);
});

/**
 * @param pixels The amount of pixels to set the font
 * size to.
 */
function changeFontSize(pixels) {
    editor.style.fontSize = `${pixels}px`;
}
