function sayMyName() {
    console.log("My name is Aditya");
}

// sayMyName();

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// console.log(addTwoNumbers(5, 7)); // 12


function logInUserMessage(username) {
    return `Hello ${username}, you are now logged in!`;
}

// console.log(logInUserMessage("Aditya")); // Hello Aditya, you are now logged in!
//Interview Question: What happens if we don't pass any argument while calling the function?
// console.log(logInUserMessage()); // Hello undefined, you are now logged in!
//Answer: If we don't pass any argument, the parameter will be undefined by default.





//We can set default value to parameter to avoid undefined
function logInUserMessageWithDefault(username = "Guest") {
    return `Hello ${username}, you are now logged in!`;
}

// console.log(logInUserMessageWithDefault()); // Hello Guest, you are now logged in!
// console.log(logInUserMessageWithDefault("Aditya")); // Hello Aditya, you are now logged in


//**************************************part 2**************************** 

function calculateCartPrice(num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 600)); // 200
//Interview Question: What happens to other arguments if we pass more arguments than parameters?
//Answer: The extra arguments will be ignored.

function calculateCartPriceWithRestOperator(...prices) {
    // console.log(prices); // [200, 400, 600]
    let totalPrice = 0;
    for (let price of prices) {
        totalPrice += price;
    }
    return totalPrice;
}

console.log(calculateCartPriceWithRestOperator(200, 400, 600));


const user = {
    username: "Aditya Gupta",
    price : 199,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username}, and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({username: "Aditya Gupta", price: 199});  // Another way to pass object


const myNewArray = [100, 200, 300, 400];

function returnSecondValue(arr){
    return arr[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400])); // Another way to pass array
