const repeatString = function(word, times) {
    //Set text variable
    let text = '';
    if (times >= 0){
        for(let i = 0; i<times; i++) {
            text += word;
        }
        return text;
    }else return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
