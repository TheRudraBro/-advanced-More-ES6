const students = [
    {id: 21, name: 'Rudra'},
    {id: 31, name: 'Kalam'},
    {id: 41, name: 'Salam'},
    {id: 51, name: 'Jamal'},
]
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);


console.log(names);
console.log(ids);
console.log(bigger);