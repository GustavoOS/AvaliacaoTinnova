const { stats } = require('../testUtils');
const SpoiledCounter = require('../../src/voteCounters/spoiled');



test('test GIVEN conditions', () => {
    expect(stats.spoiled).toBe(50);
    expect(stats.total).toBe(1000);
});

describe('Test spoiled count with 50 spoiled and 1000 total', () => {

    let counter;

    beforeEach(() => {
        counter = new SpoiledCounter();
    });

    test('Count should be 5%', () => {
        expect(counter.count(stats)).toMatch(/5\s?%/);
    });
});

