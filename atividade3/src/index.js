const factorial = (inputIndex) => {
    let result = 1;

    for (let factor = 2; factor <= inputIndex; factor++)
        result *= factor;

    return result;
};

module.exports = factorial;