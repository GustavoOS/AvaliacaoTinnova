const CounterFacade = require('../src');
const {stats} = require('./testUtils');

describe('Test Facade class, with 1000 total votes', () => {
    let counter;
    beforeEach(()=>{
        counter = new CounterFacade();
    });

    test('Given 800 valid votes, valid count should be 80%', () => {
        expect(counter.valid(stats)).toMatch(/80\s?%/);
    });

    test('Given 150 blank votes, valid count should be 15%', () => {
        expect(counter.blank(stats)).toMatch(/15\s?%/);
    });

    test('Given 50 spoiled votes, valid count should be 5%', () => {
        expect(counter.spoiled(stats)).toMatch(/5\s?%/);
    });
});
