/*  Write the named files for each case.
    1. Write a function that takes in a numero and returns one of the following:
        - If the numero is divisible by 3, return 'Fizz'.
        - If the numero is divisible by 5, return 'Buzz'.
        - If the numero is divisible by 3 and 5, return 'FizzBuzz'
        - Else, return the numero passed as an argument */

        const fizzBuzz = (numero) => {
            if (numero % 3 === 0 && numero % 5 === 0) {
              return 'FizzBuzz';
            } else if (numero % 3 === 0) {
              return 'Fizz';
            } else if (numero % 5 === 0) {
              return 'Buzz';
            } else {
              return numero;
            }
          };
        
        
        module.exports = fizzBuzz;