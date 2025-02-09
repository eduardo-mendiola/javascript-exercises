const removeFromArray = function(arrayElements,...text ) {
    return arrayElements.filter(element => !text.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
