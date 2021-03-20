const Counter = require("./");

class ValidCounter extends Counter {
    count(stats) {
        return this.calculatePercentageText(stats.valid, stats.total);
    }
}

module.exports = ValidCounter;