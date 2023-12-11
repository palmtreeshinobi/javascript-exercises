const leapYears = function(year) {
    let div4 = year % 4;
    let div100 = year % 100;
    let div400 = year % 400;

    if (div4 == 0){
        if (div100 == 0 && div400 == 0){
            return true;
        } else if (div100 == 0){
            return false;
        }
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
