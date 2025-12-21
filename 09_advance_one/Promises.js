const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Asyns task is complete");
        resolve();
    },1000);
})

promiseOne.then(function(){
    console.log("Promise complete");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynce task2 is complete");
        resolve();
    },1000);
}).then(function(){
    console.log("Promise2 complete");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "adityagupta", email: "aditya@gmail.com"});
    },1000);
}).then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "adityagupta", email: "aditya@gmail.com"});
        }else{
            reject("ERROR: something went wrong");
        }
        
    },1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> {
    console.log("The promise is either resolve or reject");
});



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "aditya", email: "ag@gmail.com"});
        }else{
            reject("ERRO: Something wend wrong");
        }
    },1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
};

consumePromiseFive();



// async function getAllUsers(){
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers();

const promiseSix = fetch("https://jsonplaceholder.typicode.com/posts");

promiseSix.then(async function(response){ 
    const data = await response.json();
    console.log(data);
}).catch(function(error){
    console.log("E: ",error);
}).finally(()=>{
    console.log("The promise is either resolve or reject")
});

