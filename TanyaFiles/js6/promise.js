let promise1= new Promise((resolve,reject)=>{
  
    if(0){
        resolve("p1resolved");
    }
    else{
        reject("p1rejected");
    }
});

let promise2= new Promise((resolve,reject)=>{
    
    if(0){
        resolve("p2resolved");
    }
    else{
        reject("p2rejected");
    }
});

Promise.all([promise2,promise1]).then((data)=>{console.log(data);}).catch(err=>{console.log(err);})

// promise.then(data=>{
//     console.log(data);
// }).catch(data=>{
//     console.log(data);
// })

// console.log("im first");
// Promise.all()