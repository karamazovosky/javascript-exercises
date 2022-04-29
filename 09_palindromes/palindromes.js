const palindromes = function (input) {
    let splitString = input.toLowerCase().split("");
    let cleanString = [];
    for (let i = 0; i<splitString.length; i++) {
        if(splitString[i].match(/^[.,:!?^ ]/)){
            continue
        }
        cleanString.push(splitString[i]);
    }
    //reversed string
    let reversedString = [];
    let cleanstrL = cleanString.length;
    for(let i = cleanstrL-1; i>=0; i--) {
        reversedString.push(cleanString[i]);
    }
    let endcleanString = cleanString.join('');
    let endreversedString = reversedString.join('');
    if(endcleanString==endreversedString) {
        return true
    }else return false
};

// Do not edit below this line
module.exports = palindromes;
