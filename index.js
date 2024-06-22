/**
 * @param  {...number|number[]} args - The numbers to sort. Can be number series or array of numbers.
 * @returns {number[]} - The sorted array of numbers.
 */
const numberSorter = (...args) => {
  const numbers = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;

  if (!numbers.every(num => typeof num === 'number' && !isNaN(num))) {
    throw new TypeError('All inputs should be numbers.');
  }

  return numbers.sort((a, b) => a - b);
}

module.exports = numberSorter;
