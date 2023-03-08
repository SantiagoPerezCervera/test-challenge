const { default: expect } = require('expect');
const factorial = require ('../factorial');


   test('factorial de 1', () => {
      expect(factorial(1)).toBe(1);
    });