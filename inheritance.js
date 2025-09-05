/**
 *  inheritance --> acquiring properties and methods from another class
 */

class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


class Dog extends Animal{
    constructor(name, age, breed) {
        super(name, age);
        // this.breed = breed;
    }

eat(){
    console.log(`${this.name} is eating`);

}
 bark(){
    console.log(`${this.name} is barking`);
 }
 }
class Cat extends Animal{
    constructor(name, breed, age) {
        super(name, age);
        // this.breed = breed;
    }

eat(){
    console.log(`${this.name} is eating`);

}
 meow(){
    console.log(`${this.name} is meowing`);
 }
 }






 const dog1=new Dog('German Shepherd', 'German');
 dog1.eat();
    dog1.bark();
//  console.log(dog1);

 const cat1=new Cat('Persian', 'White', 2);
 cat1.eat();
 cat1.meow();
//  console.log(cat1);
