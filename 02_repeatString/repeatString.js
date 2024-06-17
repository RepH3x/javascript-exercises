const repeatString = function(text, timesToRepeat) {
  let repeatedText = "";
  if(timesToRepeat < 0) {
    return "ERROR";
  } else {
    for(timesToRepeat; timesToRepeat > 0; timesToRepeat--) {
      repeatedText += text;
    }
    return repeatedText;
  }
};

// Do not edit below this line
module.exports = repeatString;
