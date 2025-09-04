const student = {
    name: 'Rudra',
    1:50,
    marks : 80,
    'home-address': 'Kolkata'
}

const studentName = student.name; // Dot notation
const studentOne = student['1']; // Bracket notation
const studentTwo = student['home-address']; // Bracket notation

console.log(studentOne);
console.log(studentTwo);

console.log(student['home-address']); // Bracket notation


for(const key in student){
    const value = student[key];
   console.log(key, value);
}

const propName = 'marks';
console.log(student[propName]);