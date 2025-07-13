/*
1.Write a function named `makeTea` that takes one parameter ,
`typeOfTea` , and return a string like `"Making green tea"`
when called with `"green tea"` .
Store the result in a variable named `teaOrder`
*/

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
}
teaOrder = makeTea("lemon treat");
// console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter
`teaType`.Inside this function , create another function named
`confirmOrder` that returns a message like `"Order confirmed for chai"`
Call `confirmOrder ` from within `orderTea` and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for Chai`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("chai");

/* 
    3.Write an arrow function named `calculateTotal` that takes 
    two parameters:`price` and `quantity`. The function should
    return the total cost by multiplying the `price` and `quantity`.
    Store the result in a varaible named `totalCost`
*/

const calculateTotal = (price , qunatity)=>{
    return price*qunatity;
}
let totalCost = calculateTotal(499,100)

/* 
    4. Write a function named `processTeaOrder` that takes 
    another funtion `makeTea` , as a parameter and calls it with 
    the argument   `"eark=l grey"`.
    Return the result of caliing `makingTea`.
*/
function makeTea(typeOfTea){
    // console.log("inside makeTea");
    
}

function processTeaOrder(teaFunction){
    // console.log("inside process tea");
    
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea)
/* 
    5.Write a function named `createTeaMaker` that returns
    another function . The returned function should take one
    parameter, `teaType`, and return a message like  `"Making green Tea"`. 
*/

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker()
// console.log(teaMaker("green tea"));

let result = teaMaker("green tea");

console.log(result);
