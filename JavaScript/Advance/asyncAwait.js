function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"Nikhil",
                url:"https://github.com/Nik1510"
            })
        },3000)
    })
}


async function getUserData() {
    try{
        console.log("fetching user data...");
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        
        console.log("User data:",userData);
    }
    catch(err){
        console.log("Error fetching the error",err);
    }
}

getUserData()