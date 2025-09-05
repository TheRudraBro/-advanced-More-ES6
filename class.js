/**
 * class --> template
 * object --> instance
 * properties --> values
 * methods --> functions
 * inheritance --> acquiring properties and methods from another class
 * encapsulation --> bundling data and methods that operate on that data within one unit
 * polymorphism --> ability to present the same interface for differing underlying data types
 * abstraction --> hiding complex implementation details and showing only the necessary parts
 * 
 * 1. class declaration
 */
class Player {
    constructor(name, club, salary, isPlaying, wife, age) {
        this.name = name;
        this.club = club;
        this.salary = salary;
        this.isPlaying = isPlaying;
        this.wife = wife;
        this.age = age;
    }
}

const player1 = new Player('Messi', 'PSG', 41000000, true, 'Antonela Roccuzzo', 36);
const player2 = new Player('Ronaldo', 'Al Nassr', 20000000, true, 'Georgina Rodriguez', 37);
console.log(player1);
console.log(player2);