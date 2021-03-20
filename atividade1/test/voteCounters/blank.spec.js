const {stats} = require('../testUtils');
const BlankCounter = require('../../src/voteCounters/blank');



test('test GIVEN conditions', () => {
    expect(stats.blank).toBe(150);
    expect(stats.total).toBe(1000);
});

describe('Test blank count with 150 valid and 1000 total', () => {
    let counter;

    beforeEach(() => {
        counter = new BlankCounter();
    });

    test('Count should be 15%', () => {
        expect(counter.count(stats)).toMatch(/15\s?%/);
    });
});

