/*
 1. write a `for` loop that loops through the array 
 ["green tea", "black tea", "chai", "oolong tea"] and 
 stops the loop when it finds "Chai".
 Store all teas before "chai" in a new Array named 'selected Teas'
 */

 let arr = ["green tea", "black tea", "chai", "oolong tea"];
 let selectedTeas=[]
 for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("chai")) {
        break;
    }
    selectedTeas[i]=arr[i];
 }
//  console.log(selectedTeas);

/* 
2. Write a for loop that loops through the array 
["London", "New York", "Paris" ,"Berlin"] and skips "Paris"
 Store the other cities in a new array named visitedCities;
*/

let cities =["London", "New York", "Paris", "Berlin"]
let visitedCities=[];
cities.forEach((c)=>{
    if (c!="Paris") {
        visitedCities.push(c);
    }
})
// console.log(visitedCities);

/*
4.Use of `for-of` loop to iterate through the array
["chai", "green tea", "herbal tea", "black tea"] and skip 
    `"herbal tea"`
    Store the other teas in an array named `preferredTeas`.
*/

let teaTypes =["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas =[];

for (const chai of teaTypes) {
    if(chai==="herbal tea"){
        continue;
    }
    preferredTeas.push(chai)
}
// console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city population 
    stop the loop when the population of `"Berlin"` is found and store all the previous cities' population in a new object named `cituPoplation`

    let citiesPopulation ={
    "London":890000,
    "New York":840000,
    "Paris":2200000,
    "Berlin":35000000
    }
*/
let citiesPopulation ={
    London:890000,
    "New York":840000,
    Paris:2200000,
    Berlin:35000000
    }
let cityNewPopulation ={};
 
for (const city in citiesPopulation) {
    if (city==="Berlin") {
        break;
    }
    cityNewPopulation[city]=citiesPopulation[city];
}
// console.log(cityNewPopulation);

/*
6. Use a `for-in` loop to loop through an object containing city population 
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`

    let worldCities ={
        "Sydney":5000000,
        "Tokyo":9000000,
        "Berlin":3500000,
        "Paris":2200000
    }
*/

let worldCities ={
        "Sydney":5000000,
        "Tokyo":9000000,
        "Berlin":3500000,
        "Paris":200000
}
let largeCities ={};
 
for (const city in worldCities) {
    if (worldCities[city]<300000) {
        continue;
    }
    largeCities[city]=worldCities[city];
}
// console.log(largeCities);


/* 
7.Write a `forEach ` loop  that iterates through the array 
`["earl grey", "green tea", "chai", "oolong tea"]`.
    Stop the loop when `"chai"` is found , and store all 
    the previous tea types in an array named avialable tea
*/
let teaCollections =["earl grey", "green tea", "chai", "oolong tea"];
let avialableTeas =[];
teaCollections.forEach(function(tea){
    if (tea==="chai") {
        return;
    }
    avialableTeas.push(tea);
}
);
// console.log(avialableTeas);

/*
8. Write a `forEach` loop that iterates through the array 
`["Berlin","Tokyo","Sydney","Paris"]`
    Skips `"Sydney"` and store the other cities in a new array 
    named `travelledCities`
*/
let world = ["Berlin","Tokyo","Sydney","Paris"];
let travelledCities=[]
world.forEach(function(city){
    if (city==="Sydney") {
       return;
    }
     travelledCities.push(city);
})
console.log(travelledCities);


/*
9.Write a `for` loop that iterates through the array `[2,5,7,9]`
    Skip the value `7` and multiply the rest by 2 . Store the result 
    in an new array named `doubledNumbers`
*/
 let number =[2,5,7,9];
 let doubledNumbers =[];
 for (let i = 0; i < number.length; i++) {
    if (number[i]===7) {
        continue;
    }
    doubledNumbers.push(number[i]*2);
 }
//  console.log(doubledNumbers);

/*
10. Use a `for-of` loop to iterate through the array
["chai","green tea", "black tea", "jasmine tea", "herbal tea"]
    and stop when the length of the current tea name is 
    greater tha 10.
    Store the teas iterated over in an array named `shortTeas`
*/

let newTea =["chai","green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas =[];
for (const tea of newTea) {
    if (tea.length>10) {
        break;
    }
    shortTeas.push(tea);
}
 