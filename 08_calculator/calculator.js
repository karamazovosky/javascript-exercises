const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(array) {
  let summation = 0;
  for (let i = 0; i<array.length; i++) {
    summation += array[i];
  }
  return summation;
};

const multiply = function(array) {
  let summation = 1;
  for (let i = 0; i<array.length; i++) {
    summation *= array[i];
  }
  return summation;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(number) {
	let summation = 1;
  for (let i = 1; i<number+1; i++) {
    summation *= i;
  }
  return summation;
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
