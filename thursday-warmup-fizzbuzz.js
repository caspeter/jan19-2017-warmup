'use strict';
// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(number) {
  for (var i = 0; i < number; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(101);


function fizzBuzz2(number) {
  for (var i = 1; i < number; i++) {
    let num = '';
    if (i % 3 === 0) {
      num += 'Fizz';
    }
    if (i % 5 === 0) {
      num += 'Buzz';
    }
    if ((i % 5 !== 0) && (i % 3 !== 0)) {
      num = i;
    }
    console.log(num);
  }
}

// fizzBuzz2(101);
