let Fraction = require('fraction.js');

function egyptian(rational) {
  let denominators = [];
  let denominator = 0;

  let runningTotal = new Fraction(0);
  while (runningTotal < rational) {
    denominator += 1;

    let nextTestFraction = runningTotal.add(new Fraction(1, denominator));
    if ((nextTestFraction) <= rational) {
      runningTotal = nextTestFraction;
      denominators.push(denominator);
    }
  }

  return denominators;
}

function unegyptian(arr) {
  let result = new Fraction(0);
  arr.forEach(num => result += new Fraction(1, num));
  return result;
}


console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2))));