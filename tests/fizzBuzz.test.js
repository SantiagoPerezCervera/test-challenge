const { default: expect } = require('expect');

const fizzBuzz = require('../fizzBuzz');

test('numero divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');//
})