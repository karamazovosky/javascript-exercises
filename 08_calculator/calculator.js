const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(obj) {
  let temp = 0;
  for (let k in obj) {
    if (typeof obj[k] === "number"){
      temp += obj[k];
    }
  }
  return temp;
};

const multiply = function(obj) {
  let temp = 1;
  for (let k in obj) {
    if(typeof obj[k] === "number") {
      temp *= obj[k];
    }
  }
  return temp;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let temp = 1;
	for (let i=1; i<=a; i++) {
    temp *= i;
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
