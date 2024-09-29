/**
 * @param  {...any} args - The numbers to sort. Can be number series, array of numbers, nested arrays, or number-like strings.
 * @param {Object} [options] - Optional settings for sorting.
 * @param {boolean} [options.descending=false] - If true, sorts in descending order.
 * @param {boolean} [options.flatten=true] - If true, flattens nested arrays.
 * @param {boolean} [options.ignoreInvalid=false] - If true, ignores non-number values like NaN, null, undefined.
 * @param {Function} [options.comparator] - Custom comparator function for sorting.
 * @returns {number[]} - The sorted array of numbers.
 */
const numSorter = (...args) => {
  let options = {};

  // If the last argument is an object, treat it as the options parameter
  if (
    typeof args[args.length - 1] === "object" &&
    !Array.isArray(args[args.length - 1])
  ) {
    options = args.pop();
  }

  // Flatten nested arrays if specified in options
  const flattenArray = (arr) =>
    arr.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
      []
    );

  let numbers =
    options.flatten !== false
      ? flattenArray(
          args.length === 1 && Array.isArray(args[0]) ? args[0] : args
        )
      : args.length === 1 && Array.isArray(args[0])
      ? args[0]
      : args;

  // Convert number-like strings to numbers, filter invalid entries if needed
  numbers = numbers.map((num) =>
    typeof num === "string" && !isNaN(num) ? parseFloat(num) : num
  );

  if (!options.ignoreInvalid) {
    if (!numbers.every((num) => typeof num === "number" && !isNaN(num))) {
      throw new TypeError("All inputs should be valid numbers.");
    }
  } else {
    // Filter out invalid entries like NaN, null, undefined
    numbers = numbers.filter((num) => typeof num === "number" && !isNaN(num));
  }

  // Sorting logic
  const comparator = options.comparator || ((a, b) => a - b);
  numbers.sort(comparator);

  // Reverse the order if descending is specified
  if (options.descending) {
    numbers.reverse();
  }

  return numbers;
};

module.exports = numSorter;
