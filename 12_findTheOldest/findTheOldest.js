// const findTheOldest = function(input) {
//     //define new array of year old
//     let yearOld = [];
//     const year = new Date().getFullYear();
//     for(let i =0; i<input.length; i++){
//         if (input[i].yearOfDeath != undefined){
//             yearOld.push(input[i].yearOfDeath - input[i].yearOfBirth)
//         }else {
//             yearOld.push(year-input[i].yearOfBirth);
//         }
//     }
//     //find the array index number
//     let temp = yearOld.indexOf(Math.max(...yearOld))
//     return input[temp];
// };
const findTheOldest = function(input) {
    return input.reduce((old, young) => {
        const oldest = findage(old.yearOfBirth, old.yearOfDeath);
        const youngest = findage(young.yearOfBirth, young.yearOfDeath);
        return oldest < youngest ? young : old;
    })
};

const findage = function (birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death-birth
};

// Do not edit below this line
module.exports = findTheOldest;
