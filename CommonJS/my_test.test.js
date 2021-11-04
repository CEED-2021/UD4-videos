describe('Imports the module as object', () => {

  const myModule = require('./add_module');
  const myModuleAgain = require('./add_module');

  it('imports addTwo', () => {
    expect(myModule.addTwo).not.toBeFalsy();
    expect(myModule.addTwo(3)).toBe(5);
  });
});

describe('Import the module as independent functions', () => {

  console.log(require('./add_module'));

  const { addTwo, addThree } = require('./add_module');

  it('adds two', () => {
    expect(addTwo).not.toBeFalsy();
    expect(addTwo(3)).toBe(5);
  });

});
