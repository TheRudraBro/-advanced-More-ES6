/**
 * encapsulation --> bundling data and methods that operate on that data within one unit
 */

class Vehicle{
    #tin;
    
    constructor(type, brand, price){
        this.type=type;
        this.brand=brand;
        this.price=price;
        this.#tin='12345';
    }
    getTin(){
        return this.#tin;
    }
    getThis(){
        console.log(this);
    }
    getPrice(){
        return this.price;
    }
}

const vehicle1=new Vehicle('car', 'Toyota', 20000);
const vehicle2=new Vehicle('bike', 'Yamaha', 1500);
// vehicle1.getThis();
console.log(vehicle1);

// vehicle2.getPrice();
// // console.log(vehicle1);
// console.log(vehicle2.getPrice());
// console.log(vehicle1.getPrice());


const student = {
    name: 'John Doe',
    age: 20,
    major:function(){
        console.log(this)
    },
    getScoreArrow: () =>{
        console.log(this);
    }
}
// student.major();
// student.getScoreArrow();