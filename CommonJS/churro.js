function addOne(num) {
  return num + 1;
}

function addTwo(number) {
  return addOne(addOne(number));
}

const addThree = (number) => addTwo(addOne(number));

console.log(`Si sumo 2 a 3 me da ${addTwo(3)}`);
console.log(`Si sumo 3 a 4 me da ${addThree(4)}`);


