# number-sorter

A simple npm library for sorting numbers in ascending order.

## Installation

Install the library using npm:

```
$ npm install number-sorter

```

## Usage

Import the library into your project and use it to sort numbers or arrays of numbers:

```js

const numberSorter = require('number-sorter');

console.log(numberSorter(3, 1, 4, 1, 5, 9)); // [1, 1, 3, 4, 5, 9]

const numbers = [3, 1, 4, 1, 5, 9];
const sortedNumbers = numberSorter(numbers);
console.log(sortedNumbers); // [1, 1, 3, 4, 5, 9]

console.log(numberSorter(5)); // [5]

```

## API

### numberSorter(numbers)
Sorts numbers or an array of numbers in ascending order.

# Parameters
`numbers` (Array): An array of numbers to be sorted.

# Returns
(Array): A new array with the numbers sorted in ascending order.

# Throws
`TypeError`: If the input is not an array.
