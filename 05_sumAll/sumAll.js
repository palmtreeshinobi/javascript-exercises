const sumAll = function(start, end) {
    let startN = start;
    let endN = end;
    let sumN = 0;

    if (!Number.isInteger(startN) || (!Number.isInteger(endN)) || startN < 0 || endN < 0){
        return "ERROR"
    }

    if (startN <= endN){
        for (let i=startN; i <= endN; i++){
            sumN += i;
        }
    } else {
        for (let i=startN; i >= endN; i--){
            sumN += i;
        }
    }

    return sumN
};

// Do not edit below this line
module.exports = sumAll;
