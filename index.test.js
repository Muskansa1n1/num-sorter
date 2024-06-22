const numberSorter = require('./index');

test('sorts an array of numbers in ascending order', () => {
  expect(numberSorter([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
});

test('sorts individual numbers in ascending order', () => {
  expect(numberSorter(3, 1, 4, 1, 5, 9)).toEqual([1, 1, 3, 4, 5, 9]);
});

test('returns a single number in an array', () => {
  expect(numberSorter(5)).toEqual([5]);
});

test('returns an empty array when no input is given', () => {
  expect(numberSorter()).toEqual([]);
});

test('throws a TypeError when input is not valid', () => {
  expect(() => numberSorter(3, 'a', 4)).toThrow(TypeError);
  expect(() => numberSorter(null)).toThrow(TypeError);
  expect(() => numberSorter({})).toThrow(TypeError);
});
