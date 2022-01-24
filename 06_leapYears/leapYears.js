const leapYears = function(year) {
    let status = false;
    //check if divisible by 4 first
    if (year%4 === 0) {
        status = true;
        if(year%100 === 0) {
            status = false
            if(year%400 === 0) {
                status = true
            }
        }
        
    }else status = false;
    return status;
    // return year % 4 === 0 && (year % 100 !== 0 || year % 400 ===0);

};


// Do not edit below this line
module.exports = leapYears;