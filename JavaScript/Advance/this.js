const person={
    name:"Nikhil",
    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet();

/* Here "this" loose's the context  */
const greetFunction = person.greet;
greetFunction()

/* TO Grap the context we need to bind the context */

const boundGreet = person.greet.bind({name:"Nikhil"})
boundGreet()

/* bind, call and apply */

// call :- it is used to the pass the refence of the object whenever they have no connections

const game ={
    name:"FIFA 25",
    year:2025
}

function info(){
    console.log(`${this.name} is released in ${this.year}`);
}

// here we give the context 
info.call(game);

// apply 

function info2(compony,pop){
    console.log(`${this.name} is released in ${this.year} and the compony was ${compony} and liked my ${pop} mil `);
}

info2.call(game,"EA Sports","150")
info2.apply("game",["EA Sports","150"])