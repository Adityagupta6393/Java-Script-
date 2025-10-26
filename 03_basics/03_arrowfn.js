const user = {
    username: "Aditya Gupta",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) //this keywoed refers to current context(user(object))
        console.log(this);
    }
}

// user.welcomeMessage();  // Here, If we are tying to do any operation with key of user object then we can't use this keyword
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);  // It will return {}(empty object)

// function chai(){
//     let username = "Aditya";
//     console.log(this.username);// Here , it is not mindful to use , We often use this keyword for objects
// }
// chai()

// const chai = function(){
//     let username = "Aditya"
//     console.log(this.username);
// }
// chai()

//**************Arrow function****************
// const chai = ()=>{

// }

/*const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(2,5))  */

//Implicit return => No need to use paranthesis and return statement
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({username: "Aditya"}) // This is how we can return a object

console.log(addTwo(2,5));
