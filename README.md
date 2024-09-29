# num-sorter

A versatile npm library for sorting numbers in both ascending and descending order, with support for nested arrays, custom comparators, and handling special values.

## Installation

Install the library using npm:

```
$ npm install num-sorter

```

## Usage

Import the library into your project and use it to sort numbers, arrays of numbers, or nested arrays:

```js

const numSorter = require('numSorter');

// Basic Usage
console.log(numSorter(3, 1, 4, 2)); // [1, 2, 3, 4]

// With options: Descending order
console.log(numSorter(3, 1, 4, 2, { descending: true })); // [4, 3, 2, 1]

// With nested arrays: Flattening
console.log(numSorter([1, [4, 3], 2])); // [1, 2, 3, 4]

// With custom comparator: Sort absolute values
console.log(numSorter(-3, -1, 4, 2, { comparator: (a, b) => Math.abs(a) - Math.abs(b) })); // [-1, 2, -3, 4]

// With invalid numbers: Ignoring invalid entries
console.log(numSorter(3, NaN, 2, null, '5', { ignoreInvalid: true })); // [2, 3, 5]


```

# API

### numSorter(...args, [options])
Sorts numbers, arrays of numbers, or deeply nested arrays, with additional features for ordering and handling invalid numbers.

#### Parameters
`...args` (number | number[]): Numbers or arrays of numbers to be sorted. Supports deeply nested arrays.
`options` (Object, optional):
    1. `descending (boolean):` Sort in descending order if true. Default is false (ascending).
    2. `flatten (boolean):` If true, flattens nested arrays before sorting. Default is true.
    3. `ignoreInvalid (boolean):` If true, invalid entries like NaN, null, undefined, or invalid number strings will be ignored. Default is false (throws an error on invalid values).
    4. `comparator (Function):` Custom comparator function for sorting.

#### Returns
(Array): A new array with the numbers sorted according to the specified options.

#### Throws
`TypeError`: If invalid inputs are passed and ignoreInvalid is set to false.

#### License
This project is licensed under the MIT License.