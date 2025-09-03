// var ban

const tax = 5000;
const eta = 5;

const student = {name : 'Rudra', marks: 80};
const friends = ['Rahul','Babul'];
// default parameter
function add(num1, num2=0){
  return num1 + num2;
}


// template string
const dynamicText = `The tax is ${tax} and the marks are ${student.marks*1.2} has friend : ${friends[1]}`;
const innerHTML = `
<div>
  <h1>${student.name}</h1>
  <p>${dynamicText}</p>
</div>
`

// arrow function
const doMath = (x,y) => x*y;

// spread operator
const newFriends = [...friends, 'Suresh'];

// destructuring
const [firstFriend, secondFriend] = friends;

