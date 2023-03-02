const {number } = require ('../fizzBuzz');
const {fizzBuzz} = require ('../fizzBuzz');

test ('number is divisible by 3 and 5',() =>{
    expect(fizzBuzz.fizzBuzz(3,5)).toBe(15);
} )