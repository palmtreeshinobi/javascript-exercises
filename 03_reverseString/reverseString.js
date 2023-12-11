const reverseString = function(strIn) {
    let strLength = strIn.length;
    let strArr = [];
    let outStr = '';

    // Populate the array with characters from the string
    for (let counter = 0; counter < strLength; counter++) {
        strArr[counter] = strIn.charAt(counter);
    }

    // Build the reversed string
    for (let i = strLength - 1; i >= 0; i--) {
        outStr += strArr[i];
    }

    return outStr;
};


// Do not edit below this line
module.exports = reverseString;
