const BlankCounter = require("./voteCounters/blank");
const SpoiledCounter = require("./voteCounters/spoiled");
const ValidCounter = require("./voteCounters/valid");

class CounterFacade {
    constructor()
    {
        this._valid = new ValidCounter();
        this._blank = new BlankCounter();
        this._spoiled = new SpoiledCounter();
    }

    valid(stats) {
        return this._valid.count(stats);
    }

    blank(stats) {
        return this._blank.count(stats);
    }

    spoiled(stats) {
        return this._spoiled.count(stats);
    }
}

module.exports = CounterFacade;