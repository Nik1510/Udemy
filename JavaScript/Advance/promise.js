function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if (success) {
                resolve("Data fetched sucessfully")
            }else{
                reject("Error while fetching data")
            }
        },3000)
    })
}

/* Consuming the promise */
fetchData()
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err)
    )

