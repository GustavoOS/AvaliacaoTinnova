# Sum of Multiples

This project calculates the sum of all multiples of 3 and 5 up until a limit.


## Installation

In order to execute tests and check code coverage, run the following installation script:

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

In order to use the sum of multiples calculator, import the function from index.js and pass a number as parameter.
Check index.spec.js for futher usage examples.


```js
    const sumOfMultiples = require("./src");

    console.log(sumOfMultiples(10)); // Should print 23
```
