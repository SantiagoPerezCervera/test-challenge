const { substract, multiply, divide, power } = require('../calculator');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(5,6)).toBe(11);
})

test('substracts a - b', () => {
    expect(substract(4,7)).toBe(-3);
})

test('multiplies a * b', () => {
    expect(multiply(5,5)).toBe(25);
})

test('divides a / b', () => {
    expect(divide(2,1)).toBe(2);
})

test('Raises to power a ^ b', () => {
    expect(power(4,6)).toBe(4096);
})

