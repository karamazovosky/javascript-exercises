const reverseString = function(str) {
//Turn str into object
let word = str.split('');
let reversed = '';
let length = str.length-1;
for (length; length >= 0; length--){
    reversed = reversed.concat(word[length]);
}
return reversed;
};

// Do not edit below this line
module.exports = reverseString;
