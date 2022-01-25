const findTheOldest = function(input) {
    //define new array of year old
    let yearOld = [];
    const year = new Date().getFullYear();
    for(let i =0; i<input.length; i++){
        if (input[i].yearOfDeath != undefined){
            yearOld.push(input[i].yearOfDeath - input[i].yearOfBirth)
        }else {
            yearOld.push(year-input[i].yearOfBirth);
        }
    }
    //determine if theres no deathyear
    //find the array index number
    let temp = yearOld.indexOf(Math.max(...yearOld))
    return input[temp];
};

// Do not edit below this line
module.exports = findTheOldest;
