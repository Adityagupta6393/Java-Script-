// singleton 
//object.create();

//object literal
const mySym = Symbol("key1"); // decalaring symbol to use as key in object

const JsUser = {
    name: "Aditya",
    "full name": "Aditya Gupta", // But It can be accessed using bracket notation only(JsUser["full name"])
    [mySym] : "myKey1 value", // using symbol as key
    mySym : "myKey2 value", // Now mySym is treated as string key here, not as symbol
    age: 18,
    isLoggedIn: true,
    location: "Uttar Pradesh",
    email: "aditya@gmail.com",
    lastLoginDays: [ "Monday", "Friday"]
}

//ways to access object properties
/*console.log(JsUser.name);
console.log(JsUser["age"]);
console.log(JsUser.mySym); // This not right way to access symbol key property(Output: undefined)
console.log(JsUser[mySym]); // accessing symbol key property using bracket notation()


JsUser.email = "aditya@google.com";  //updating existing property value
console.log(JsUser);

Object.freeze(JsUser); // freezing the object to make it immutable
JsUser.email = "aditya@microsoft.com"; // it will not update the email property as object is freezed now
console.log(JsUser); */

JsUser.greeting = function() {
    console.log("Hello JsUser");
}
console.log(JsUser.greeting())

JsUser.greeting2 = function() { 
    console.log(`Hello ${this.name}, welcome back!`);
}
console.log(JsUser.greeting2());

 

