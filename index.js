const loremText = require('./loremText')

function getText(len) {
    if (len < 1) {
        return "lorem"
    }
    let text = "";
    let loremLength = loremText.length
    if (len > loremLength) {
        len = loremLength;
        text += `[Words limited to only ${loremLength} words] `
    }
    for (let index = 0; index < len; index++) {
        text += loremText[index];
        text += " ";
    }
    return text;
}

module.exports = getText;