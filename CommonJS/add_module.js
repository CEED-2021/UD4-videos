const addOneToNumber = require('./add_one');

function addTwo(number) {
  return addOneToNumber(addOneToNumber(number));
}

const addThree = (number) => addTwo(addOneToNumber(number));

module.exports = {
  addTwo,
  addThree
}
