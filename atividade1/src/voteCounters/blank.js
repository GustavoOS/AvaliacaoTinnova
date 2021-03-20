const Counter = require("./counter");

class BlankCounter extends Counter {
    count(stats) {
        return this.calculatePercentageText(stats.blank, stats.total);
    }
}

module.exports = BlankCounter;