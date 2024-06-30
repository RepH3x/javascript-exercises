const palindromes = function (str) {
  str = str
    .replace(/\W/ig, "")
    .toLowerCase()
    .split("");
  let reverseStr = [...str].reverse();
  for(let i=0; i<str.length; i++) {
    if(str[i] !== reverseStr[i]) { return false; }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
