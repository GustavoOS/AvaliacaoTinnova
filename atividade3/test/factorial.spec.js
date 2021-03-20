const factorial = require("../src");

describe('Test values of the Factorial sequence', () => {

    /*
        GIVEN 0 or 1 as input
        WHEN calling factorial function
        THEN 1 should be the result
    */
    test('Factorial of 0 and 1 should be 1', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
    });

    /*
        GIVEN 2 as input
        WHEN calling factorial function
        THEN 2 should be the result
    */
   test('Factorial of 2 should be 2', () => {
       expect(factorial(2)).toBe(2);
   });

   /*
        GIVEN 3 as input
        WHEN calling factorial function
        THEN 6 should be the result
   */
  test('Factorial of 3 should be 6', () => {
    expect(factorial(3)).toBe(6);
  });

    /*
        GIVEN 4 as input
        WHEN calling factorial function
        THEN 24 should be the result
    */
  test('Factorial of 4 should be 24', () => {
      expect(factorial(4)).toBe(24);
  });

    /*
        GIVEN 5 as input
        WHEN calling factorial function
        THEN 120 should be the result
    */
  test('Facotiral of 5 should be 120', () => {
      expect(factorial(5)).toBe(120);
  });

    /*
        GIVEN 6 as input
        WHEN calling factorial function
        THEN 720 should be the result
    */
  test('Factorial of 6 should be 720', () => {
      expect(factorial(6)).toBe(720);
  });
});