function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data fetched");
        },2000)
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Comment data fetched")
        },3000)
    });
}

// how to consume multiple Promises 

async function getBlogData() {
    try{
        console.log("Fetching blog data ");
        // const postData = await fetchPostData();
        // const commetData = await fetchCommentData();
        const [postData,commetData]= await Promise.all([fetchPostData(),fetchCommentData()])
        console.log(postData);
        console.log(commetData);
        
        console.log("fetching complete");
        
    }catch(err){
        console.log("Error fetching the data",err);
        
    }
}
getBlogData()