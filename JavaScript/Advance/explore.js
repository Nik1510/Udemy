console.log("Nikhil");

setTimeout(()=>{
    console.log("In setTimeout");
    for(let i=0;i<10;i++){
        console.log(i);
    }
    console.log("leaving setTimeout");
    
},5000)

console.log("finish");

setTimeout(()=>{
    console.log("In  2 nd setTimeout");
    for(let i=0;i<10;i++){
        console.log(i);
    }
    console.log("leaving 2nd  setTimeout");
    
},2000)
for(let i=0;i<5;i++){
    console.log(i);
}