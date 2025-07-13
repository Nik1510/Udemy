function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model=model;
}

let myCar = new Car("Toyota","Camry");
// console.log(myCar);
let myNewCar = new Car("Tata","Safari");
// console.log(myNewCar);


function Tea(type){
    this.type =type;
    this.decribe = ()=>{
        return `this is a cup of ${type}`
    }
}
let lemonTea = new Tea("leminTea")
// console.log(lemonTea.decribe());

function Animal(species){
    this.species = species;
}

Animal.prototype.sound =function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog");
console.log(dog.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must ne called with new KeyWord");
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee =new Drink("coffee")
console.log(tea);
