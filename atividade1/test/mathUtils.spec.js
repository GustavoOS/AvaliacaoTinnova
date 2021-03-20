const MathUtils = require('../src/mathUtils');

test('0 out of 1 should result 0%', () => {
    expect(MathUtils.percentage(0, 1)).toBe(0);
});

test('123 out of 246 should result 50%', () => {
    expect(MathUtils.percentage(123, 246)).toBe(50);
});

test('1 out of 3 should result 33.33%', () => {
    expect(MathUtils.percentage(1, 3)).toBeCloseTo(33.33);
});

test('1/3 string should be 33.33 %', () => {
    expect(MathUtils.percentageText(1, 3)).toMatch(/33\.33\s?%/);
});

test('Half string should be 50 %', () =>{
    expect(MathUtils.percentageText(2, 4)).toMatch(/50\s?%/);
});