const { stats } = require('../testUtils');
const ValidCounter = require('../../src/voteCounters/valid');


test('Test GIVEN conditions', () => {
    expect(stats.valid).toBe(800);
    expect(stats.total).toBe(1000);
});

describe('Test valid count with given 800 valids and 1000 total', () => {

    let counter;

    beforeEach(() => {
        counter = new ValidCounter();
    });

    test('Count should be 80%', () => {
        expect(counter.count(stats)).toMatch(/80\s?%/);
    });
});

