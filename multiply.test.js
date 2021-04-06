const multiply = require('./multiply');

test('2 * 2 = 4', () => {
  expect(multiply(2, 2)).toBe(4);
});
