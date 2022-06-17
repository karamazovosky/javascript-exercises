const findTheOldest = function(peopleList) {
    let peopleListLength = peopleList.length;
    //define new array
    let processedpeopleList = [];
    //loop to input people's age into the array
    for (let i=0; i<peopleListLength; i++){
        if (peopleList[i].yearOfDeath == undefined) {
            let temp = new Date().getFullYear();
            peopleList[i].yearOfDeath = temp;
        }
        processedpeopleList.push(peopleList[i].yearOfDeath-peopleList[i].yearOfBirth)
    }
    //function to find the max value in the array and store it as variable
    let oldestAge = Math.max(...processedpeopleList);
    let arrCount = 0;
    for (let i=0; i<processedpeopleList.length; i++){
        if(processedpeopleList[i] == oldestAge) {
            break
        }
        arrCount++
    }
    // return the oldest person
    return peopleList[arrCount];
};

// Do not edit below this line
module.exports = findTheOldest;
