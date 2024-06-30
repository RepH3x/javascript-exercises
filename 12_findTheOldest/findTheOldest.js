const findTheOldest = function (array) {
  return array
    .reduce((list, person) => {
      let deathYear = person["yearOfDeath"];
      if (deathYear === undefined) person["yearOfDeath"] = new Date().getFullYear();
      list.push(person);
      return list;
    }, [])
    .sort((person, nextPerson) => {
      let personAge = person["yearOfDeath"] - person["yearOfBirth"];
      let nextPersonAge = nextPerson["yearOfDeath"] - nextPerson["yearOfBirth"];
      return nextPersonAge - personAge;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
