const sumAll = function(firstNumber, secondNumber) {

  if(firstNumber <= 0 || secondNumber <= 0 || typeof(firstNumber) != "number" 
  || typeof(secondNumber) != "number") { 
      return "ERROR";
  }

  if(firstNumber > secondNumber) {
    let tempNumber = firstNumber 
    firstNumber = secondNumber; 
    secondNumber = tempNumber;
  }

  let finalNumber = 0;
  while(firstNumber <= secondNumber) {
    finalNumber += firstNumber;
    firstNumber++;
  }
  return finalNumber;
};

// Do not edit below this line
module.exports = sumAll;
