const removeFromArray = function() {
    let tempArr = [];

    let masterArr = Array.from(arguments);

    let inputArr = masterArr.shift();
    let ArrLen = inputArr.length;

    let remArgs = masterArr;
    let remLen = remArgs.length;

    for (let i = 0; i < ArrLen; i++){
        for (let j = 0; j < remLen; j++){
            if (inputArr[i] == remArgs[j]){
                tempArr.push(inputArr[i]);
            }
        }
    }

    inputArr = tempArr;
    return inputArr;
};

// Do not edit below this line
module.exports = removeFromArray;
