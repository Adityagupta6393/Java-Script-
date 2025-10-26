function sayMyName() {
    console.log("My name is Aditya");
}

sayMyName();

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(5, 7)); // 12


function logInUserMessage(username) {
    return `Hello ${username}, you are now logged in!`;
}

console.log(logInUserMessage("Aditya")); // Hello Aditya, you are now logged in!
//Interview Question: What happens if we don't pass any argument while calling the function?
console.log(logInUserMessage()); // Hello undefined, you are now logged in!
//Answer: If we don't pass any argument, the parameter will be undefined by default.





//We can set default value to parameter to avoid undefined
function logInUserMessageWithDefault(username = "Guest") {
    return `Hello ${username}, you are now logged in!`;
}

console.log(logInUserMessageWithDefault()); // Hello Guest, you are now logged in!
console.log(logInUserMessageWithDefault("Aditya")); // Hello Aditya, you are now logged in!