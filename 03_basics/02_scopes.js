if(true) {
    const a = 10;
    let b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c); 


//********************part 2**********************

function one(){
    const userName = "Aditya Gupta";

    function two(){
        const website = "you tube";
        // console.log(userName);
    }

    // console.log(website);
    two()
}
one()


console.log(addOne(5));  // Here we can access before intiliazation of function
function addOne(num){
    return num + 1
}


console.log(addTwo(5)); // Here we can't access before initializtion of function because
// here addTwo is a variable as well . We will study later in mini hoisting topic
const addTwo = function(num){
    return num + 2
}





