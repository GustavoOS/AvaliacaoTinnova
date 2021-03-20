const sumOfMultiples = require("../src");

describe('Test the result of the calculations', () => {
    /*
        GIVEN a limit of 10
        WHEN the sum of multiples function is called
        THEN the result should be 23
    */
    test('When the limit is 10, the result should be 23', () => {
        expect(sumOfMultiples(10)).toBe(23);
    });

    /*
        GIVEN a limit of 11
        WHEN the sum of multiples function is called
        THEN the result should be 33
    */
    test('When the limit is 11, the result should be 33', () => {
        expect(sumOfMultiples(11)).toBe(33);
    });

    /*
       GIVEN a limit of 13
       WHEN the sum of multiples function is called
       THEN the result should be 45
   */
    test('When the limit is 13, the result should be 45', () => {
        expect(sumOfMultiples(13)).toBe(45);
    });
});