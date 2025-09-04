const student = {
    name: 'Rudra',
    1:50,
    family:{
        title: 'Mojumder',
        // mother:{
        //     // name: 'Aparna Das',
        //     // age:55,
        // }
    },
    marks : 80,
    'home-address': 'Kolkata'
}

// console.log(student.name);
console.log(student.family.mother?.age); // optional chaining
