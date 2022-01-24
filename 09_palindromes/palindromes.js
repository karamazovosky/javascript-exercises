// const palindromes = function (word) {
//     //turn the word into lowercase & array
//     let text = word.toLowerCase().split("");

//     //remove punctuations from array
//     let punctuation = [".", ",", ":", "!", "?", " "];
//     let noptext = [];
//     text.forEach((item) => {
//         if (!punctuation.includes(item)) {
//             noptext.push(item);
//         }
//     })

//     //clean text (without punctuation and to lower case)
//     let newtext = ""
//     noptext.forEach((item) => {
//         newtext += item;
//     })

//     //define reversed value
//     let reversed = "";

//     //use loop to concat from backward to reversed value
//     for(let i = newtext.length-1; 0 <= i; i--) {
//         reversed += newtext[i];
//     }

//     //return
//     if (newtext == reversed) {
//         return true
//     }else return false
// };
const palindromes = function (word) {
    let cleanWord = word.toLowerCase().replace(/[^a-z]/g, "")
    return cleanWord.split("").reverse().join("")==cleanWord;
};

// Do not edit below this line
module.exports = palindromes;
