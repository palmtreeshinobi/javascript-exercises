const repeatString = function(string, num) {
    let n = 0;
    let result = '';
    if (num < 0){
        return "ERROR";
    }
    while (n < num) {
        result += string;
        n++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
