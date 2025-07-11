// let today = new Date();
// console.log(today.getDate());


// implicit type conversion

console.log("1"+1);
console.log("1"-1);


let isValue =true;
console.log(Number(isValue)+1);

console.log(undefined+1);
console.log(null+1);
console.log(typeof(undefined+1));
console.log(typeof(null+1 ));

let score =44;

let sum=0;
let i=1;
while(i<5){
    sum+=i;
    i++;
}
// console.log(sum);

let countdown=[];
i=5;
let index=0;
while(i>0){
    countdown[index++]=i--;
}
// console.log(countdown);


