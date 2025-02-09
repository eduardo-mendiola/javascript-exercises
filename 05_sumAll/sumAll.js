// const sumAll = function(num1, num2) {
//     if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
//         let sumNumbers = 0;
//         if (num1 < num2) {
//             for (let i=num1; i <= num2; i++) {
//                 sumNumbers += i;
//             }
//             return sumNumbers;
//         } else {
//             for (let i=num2; i <= num1; i++) {
//                 sumNumbers += i;
//             }
//             return sumNumbers;
//         }
//     } else {
//         return 'ERROR';
//     }
// };

const sumAll = function(num1, num2) {
    // Validate inputs: both must be positive integers
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        let sumNumbers = 0;

        // Ensure num1 is the smaller value and num2 is the larger value
        let start = Math.min(num1, num2);
        let end = Math.max(num1, num2);

        // Loop correctly from start to end
        for (let i = start; i <= end; i++) {
            sumNumbers += i;
        }

        return sumNumbers;
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;


// const sumAll = function (min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
  
//     // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
//     // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
//     // if (min > max) [min, max] = [max, min];
    
//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//       sum += i;
//     }
//     return sum;
//   };
  
//   module.exports = sumAll;
  

