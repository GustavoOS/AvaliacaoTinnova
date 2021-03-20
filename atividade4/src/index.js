const isMultiple = (number, divider) => (number % divider) === 0;

const sumOfMultiples = (limit) => {
    let sum = 0;
    for (let index = 0; index < limit; index++)
        if (isMultiple(index, 3) || isMultiple(index, 5))
            sum += index;
    return sum;
}

module.exports = sumOfMultiples;
