const numSorter = require('./index');

test('sorts an array of numbers in ascending order', () => {
  expect(numSorter([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
});

test('sorts individual numbers in ascending order', () => {
  expect(numSorter(3, 1, 4, 1, 5, 9)).toEqual([1, 1, 3, 4, 5, 9]);
});

test('returns a single number in an array', () => {
  expect(numSorter(5)).toEqual([5]);
});

test('returns an empty array when no input is given', () => {
  expect(numSorter()).toEqual([]);
});

test('throws a TypeError when input is not valid', () => {
  expect(() => numSorter(3, 'a', 4)).toThrow(TypeError);
  expect(() => numSorter(null)).toThrow(TypeError);
  expect(() => numSorter({})).toThrow(TypeError);
});
