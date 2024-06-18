const removeFromArray = function () {
  const args = Array.from(arguments);
  const array = args.shift();
  if (array == undefined || args.length === 0) {
    console.log("Invalid input.");
    return array;
  } else {
    return array.filter((key) => !args.includes(key))
  }
};

// Do not edit below this line
module.exports = removeFromArray;
