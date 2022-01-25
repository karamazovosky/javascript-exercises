const caesar = function(input, shift) {
    //filter letter only
    let split = input.split("");
    //function of into unicode
    // const toUnicode = function(value) {
    //     let temp = value.charCodeAt();
    //     let temp2 = temp+shift;
    //     if (96<temp<123 && temp2 > 122) {
    //         return temp2 = 96 + (temp2-122);
    //     }else if (64 < temp < 91 && temp2 > 90) {
    //         return temp2 = 64 + (temp2-90);
    //     }
    //     return temp2;
    // }
    const toUnicode = function(value) {
        let temp = value.charCodeAt()
        let temp2 = temp + shift
        if (shift >0) {
            if (temp2 >122) {
                temp2 = 96 + temp2 - 122
                return temp2;
            }else if((temp2 > 90) && (temp<91)) {
                temp2 = 64 + temp2 - 90
                return temp2;
            }else {
                return temp2;
            }
        }else if (shift < 0) {
            if (temp2 < 65) {
                temp2 = 91 - (65- temp2)
                return temp2;
            }else if((temp2 < 97) && (temp>96)) {
                temp2 = 123 - (97 - temp2)
                return temp2;
            }else {
                return temp2;
            }
        }
        
    }
    //function to alphabet
    const toAlphabet = function(value) {
        return String.fromCharCode(value)
    }
    for(let i =0; i<split.length; i++){
        if(split[i].match(/[A-Za-z]/)) {
            split.splice(i, 1, toUnicode(split[i]))
        }else continue;
    }

    //turn arrays into unicode
    for(let i =0; i<split.length; i++) {
        if(typeof split[i] === 'number') {
            split.splice(i, 1, toAlphabet(split[i]));
        }else continue;
    }
    return split.join("");
};
// Do not edit below this line
module.exports = caesar;