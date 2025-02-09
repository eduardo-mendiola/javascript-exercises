const reverseString = function(text) {
    let reverseText = "";
    let numChar = text.length;
    while (numChar > 0) {
        reverseText += text[numChar-1];
        numChar--
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
