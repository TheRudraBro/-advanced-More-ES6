
const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for(const num of numbers) {
//     sum = sum + num;
// }

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);