// Imediately Invoked Function Expression (IIFE)

(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`)
})();


((name)=>{
    //Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("Aditya");

//Interview Questin : Why we used iife function
//Answer : To call a function immediately, to avoid polluting the gloabal namespace,to initialize variables
