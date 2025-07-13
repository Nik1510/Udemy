// const { useLayoutEffect } = require("react");

let car ={
    make:"Toyota",
    model:"Camery",
    year:2020,
    start:function(){
        return `${this.make} car got started in ${this.year}`
    },
}
// console.log(car.start());

function Person(name, age){
    this.name=name;
    this.age=age;
}
let john = new Person("John Doe", 20)
// console.log(john.name);

function Animal(type){
    this.type =type
}
// prototype chain
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.nikhil = function(){
    return `Custom method ${this}`
}

let myArray =[1,2,3];
// console.log(myArray.nikhil());


class Vechile{
    constructor(make, model){
        this.make = make;
        this.model=model;
    }

    start(){
        return `${this.model} is a car from ${this.model}`
    }
}

class Car extends Vechile{
    drive(){
        return `${this.make}:this is an inheritance example`
    }
}

let myCar = new Car("Toyota","Corolla")

// console.log(myCar.start());
// console.log(myCar.drive());

/* Encapulation */
class BankAccount{
    balance =0;
    deposit(amount){
        this.balance +=amount;
        return this.balance;
    }
    getBalance(){
        return `$ ${this.balance}`
    }
}

let account = new BankAccount();
// console.log(account.getBalance());
/* End here */

/* Abstraction  */

class CoffeeMachine{
    #start(){
        return `Strating the machine`
    }

    #brewCoffee(){
        return `Brewing coffee`
    }
    pressStart(){
        let mess1 = this.#start();
        let mess2 = this.#brewCoffee();
        return `${mess1} \n ${mess2}`
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.pressStart());

/* Polymorphism */

class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird();
let penguins = new Penguin();
// console.log(bird.fly());
// console.log(penguins.fly());

/* Static Method */

class Calculator{
    static add(a,b){
        return a+b;
    }
}
// let minCal = new Calculator();
// console.log(minCal.add(2,3));

// console.log(Calculator.add(2,3));


