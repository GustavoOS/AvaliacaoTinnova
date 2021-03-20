const Counter = require('./counter');

class SpoiledCounter extends Counter {
    count(stats) {
        return this.calculatePercentageText(stats.spoiled, stats.total);
    }
}

module.exports = SpoiledCounter;