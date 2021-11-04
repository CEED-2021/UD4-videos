function addTwo(number) {
  return number + 2;
}

const addThree = (number) => number + 3;

module.exports = {
  addTwo,
  addThree
}

// Better not use this:
// exports.addThree = addThree
// exports.addTwo = addTwo

console.log("I've been imported");
