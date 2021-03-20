# Bubble Sort

Bubble Sort is a sorting algorithm with square complexity.

## Installation

In order to run the tests, developer dependencies should be installed. That can be done with YARN by sending the command:

```sh
    yarn install
```

## Testing

To run unit tests, run the following command in the terminal:

```sh
    yarn test
```

Also, to see Test Coverage, run the following command:

```sh
    yarn coverage
```

## Usage

In order to use Bubble sort, import it from index.js and pass an array as a parameter.
Check sort.spec.js for futher usage examples.

```js
    const bubbleSort = require("./src");
    const arr = [5, 2, 1];
    bubbleSort(arr);

    console.log(arr); // Should print [1, 2, 5]
```
