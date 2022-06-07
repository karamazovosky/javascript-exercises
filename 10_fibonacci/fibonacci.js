const fibonacci = function(repeat) {
    let prevTemp = 1;
    let currentTemp = 1;
    let output = 0;
    if (repeat > 0) {
        for(let i=0; i<repeat; i++){
            if(i<2) {
                prevTemp = 1;
                output = currentTemp;
            }
            if(i>=2){
                output = prevTemp + currentTemp;
                prevTemp = currentTemp;
                currentTemp = output;
            }
        }
        return output;
    }else if(0 > repeat){
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
