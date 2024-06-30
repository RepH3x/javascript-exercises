const add = function(operand, operator) {
	return operand + operator;
};

const subtract = function(operand, operator) {
	return operand - operator;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => total * number);
};

const power = function(operand, operator) {
	return Math.pow(operand, operator);
};

const factorial = function(operand, operator) {
  let total = 1;
	for(let i=operand; i>=1; i--) {
    total *= i;
  }
  return total;
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
