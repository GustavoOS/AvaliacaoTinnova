# Percentage Counter

This project calculates percentages of spoiled, blank and valid votes.

## Installation

For installation using yarn, run in the terminal:

```sh
    yarn install
```

## Testing

To run tests, run in the terminal:
```sh
    yarn test
```

To see code coverage, run in the terminal:
```sh
    yarn coverage
```
## Usage

In index.js, there is a façade class that calculates all percentages.

The input should be an object like the one below:

```javascript
const stats =
{
    total: 1000,
    valid: 800,
    blank: 150,
    spoiled: 50
};
```

Example of usage:

```js
    const CounterFacade = require('./src');

    const counter = new CounterFacade();
    const stats =
    {
        total: 1000,
        valid: 800,
        blank: 150,
        spoiled: 50
    };

    console.log(counter.valid(stats));   // Should print 80 %
    console.log(counter.blank(stats));   // Should print 15 %
    console.log(counter.spoiled(stats)); // Should print 5 %
```