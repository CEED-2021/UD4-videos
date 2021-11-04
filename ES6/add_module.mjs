import addOne from './add_one.mjs'

function addTwo(number) {
  return addOne(addOne(number));
}

const addThree = (number) => addTwo(addOne(number));

console.log("I've been imported");

export {
  addTwo, addThree
}

export default addTwo;
