describe('Imports the module as object', () => {

  const myModule = require('./my_module');
  const myModuleAgain = require('./my_module');

  it('imports addTwo', () => {
    expect(myModule.addTwo).not.toBeFalsy();
    expect(myModule.addTwo(3)).toBe(5);
  });
});

describe('Import the module as independent functions', () => {

  console.log(require('./my_module'));

  const { addTwo, addThree } = require('./my_module');

  it('adds two', () => {
    expect(addTwo).not.toBeFalsy();
    expect(addTwo(3)).toBe(5);
  });

});

describe('Imports the other module', () => {

  const addTwo = require('./my_other_module');

  it('imports addTwo', () => {
    expect(addTwo).not.toBeFalsy();
    expect(addTwo(3)).toBe(5);
  });
});
