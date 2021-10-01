// function fibonacci2(n, a = 0, b = 1) {
//   if (n < 0) return 'Invalid Entry';
//   if (n === 0) return a;
//   if (n === 1) return b;

//   console.log(a, b);

//   return fibonacci2(n - 1, b, a + b);
// }

// // function __fibonacci(nth, count = 0) {
// //   if (nth <= 2) {
// //     return count;
// //   }

// //   count += 1;

// //   return fibonacci(nth - 1, count) + fibonacci(nth - 2, count);
// // }

// function fibonacci(num) {
//   if (num < 0) return 'Invalid Entry';
//   if (num === 0) return 0;

//   let [a, b] = [0, 1];
//   for (let i = 1; i < num; i++) {
//     console.log(a, b);
//     [a, b] = [b, a + b];
//   }

//   return b;
// }

// // function fibonacci(nth) {
// //   let previousTwo = [1, 1];

// //   for (let counter = 3; counter <= nth; counter += 1) {
// //     console.log(previousTwo[0], previousTwo[1]);
// //     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
// //   }

// //   return previousTwo[1];
// // }


// function _fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   }
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }

// const fibs = {};

// function fibonacci(num) {
//   if (num < 0) return 'Invalid Entry';
//   if (num === 0) return 0;

//   if (!fibs[num]) {
//     fibs[num] = fibonacci(num-2) + fibonacci(num-1);
//   }

//   return fibs[num];
// }

const fibs = {1: 1, 2: 1};

function fibonacci(num, count = 0) {
  if (num < 0) return 'Invalid Entry';
  if (num === 0) return 0;
  if (num === 1) return 1;

  if (!fibs[num]) {
    fibs[num] = fibonacci(num - 2, count + 1) + fibonacci(num - 1, count + 1);
  }

  return fibs[num];
}

console.log(fibonacci(40));
// console.log(fibs);
