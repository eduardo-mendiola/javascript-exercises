const repeatString = function(text, num) {
    let repeatText = "";
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        repeatText += text;
    }
    return repeatText;
};

// Do not edit below this line
module.exports = repeatString;
