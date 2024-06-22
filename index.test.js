const sortNums = require('./index');

test('sorts an array of numbers in ascending order', () => {
  expect(sortNums([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
});

test('sorts individual numbers in ascending order', () => {
  expect(sortNums(3, 1, 4, 1, 5, 9)).toEqual([1, 1, 3, 4, 5, 9]);
});

test('returns a single number in an array', () => {
  expect(sortNums(5)).toEqual([5]);
});

test('returns an empty array when no input is given', () => {
  expect(sortNums()).toEqual([]);
});

test('throws a TypeError when input is not valid', () => {
  expect(() => sortNums(3, 'a', 4)).toThrow(TypeError);
  expect(() => sortNums(null)).toThrow(TypeError);
  expect(() => sortNums({})).toThrow(TypeError);
});
