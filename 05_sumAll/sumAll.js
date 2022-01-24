const sumAll = function(...args) {
    //define start point
    let input1 = args[0];
    //define end point
    let input2= args[1];
    //define container for sumall
    let sumall = 'ERROR';
    let negativeCheck = (input1 >= 0) && (input2 >= 0);
    let numberCheck = typeof input1 === 'number' && typeof input2 === 'number';
    if (negativeCheck && numberCheck) {
        sumall = 0;
        //define bigger value
        let start;
        let end;
        //using ternary, because if its non number, the Math.max and Math.min method return same value
        start = (input1 > input2) ? input2 : input1;
        end = (input1 < input2) ? input2: input1;
        //loop from start to end
        for(let i = start; i <= end; i++) {
            sumall += i;
        }
    }return sumall;
   
};

// Do not edit below this line
module.exports = sumAll;
