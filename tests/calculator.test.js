const { substract, multiply, divide, power } = require('../calculator');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(4,6)).toBe(10);
})

test('substracts a - b', () => {
    expect(substract(4,6)).toBe(-2);
})

test('multiplies a * b', () => {
    expect(multiply(4,6)).toBe(24);
})

test('divides a / b', () => {
    expect(divide(2,1)).toBe(2);
})

test('Raises to power a ^ b', () => {
    expect(power(4,6)).toBe(4096);
})

