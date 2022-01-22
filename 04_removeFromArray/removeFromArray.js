const removeFromArray = function(array) {
    //store array length in variable
    let length = array.length;
    //turn argument into array
    arraynew = Array.from(arguments[0]);
    for (let j = 1; j < arguments.length; j++) {
        for (let i = 0; i<length; i++) {
            if(arraynew[i] === arguments[j]) {
                arraynew.splice(i,1);
            }
        }
    }
        
    return arraynew;
};

// Do not edit below this line
module.exports = removeFromArray;
