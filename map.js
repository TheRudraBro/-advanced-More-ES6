const numbers = [2, 4, 6, 8];
// const doubled = [];
// for(const num of numbers){
//     const result = num * 2;
//     doubled.push(result);
// }
// const doubledIt = x => x*2;
// const doubled = numbers.map(doubledIt);
const doubled = numbers.map(x => x*2);
const fiveTimes = numbers.map(x => x*5);
const square = x => x*x;
console.log(doubled);
console.log(fiveTimes);
console.log(numbers.map(square));


const friends = ['Rudra', 'Sakib', 'Riyad', 'Shakib', 'Tamim'];
const result = friends.map(friend => friend.length);
console.log(result);
const firstChars = friends.map(friend => friend[0]);
console.log(firstChars);