const fibonacci = function(number) {
    if(number<0) {
        return "OOPS"
    }
    let start = 0;
    let first = 1;
    let container = 0;
    for(let i=0; i<number; i++)  {
        container = start + first; //1 2 3 5
        start = first; //1 1 2 3
        first = container; //1 2 3 5
    }
    return start
};

// Do not edit below this line
module.exports = fibonacci;
