# Percentage Counter

This project calculates percentages of spoiled, blank and valid votes.

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
}
```

Check test/index.spec.js for an example of usage.