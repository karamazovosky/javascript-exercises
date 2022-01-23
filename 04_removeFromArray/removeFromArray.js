const removeFromArray = function() {
    //store array length in variable
    let length = arguments[0].length;
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

// const removeFromArray = function(...args) {
//     let array = args[0];
//     let newarray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newarray.push(item);
//         }
//     });
//     return newarray
// };

// const removeFromArray = function(...args) {
//     let array = args[0]
//     let newarray = array.filter(item=> !args.includes(item));
//     return newarray;
// }
// Do not edit below this line
module.exports = removeFromArray;