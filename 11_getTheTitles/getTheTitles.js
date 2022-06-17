const getTheTitles = function(input) {
    //define the database length
    let dataLength = input.length;
    let temp =[];
    for (let i=0; i<dataLength; i++){
        temp.push(input[i].title)
    }
    return temp;
};

// Do not edit below this line
module.exports = getTheTitles;
