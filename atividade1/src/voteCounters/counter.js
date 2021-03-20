const MathUtils = require("../mathUtils");

class Counter {
    calculatePercentageText(value, total)
    {
        return MathUtils.percentageText(value, total);
    }
}

module.exports = Counter;