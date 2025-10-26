// const tinderUser = new Object();   // This is singleton object

const tinderUser = {};   // This is non-singleton object
tinderUser.id = "123abc";
tinderUser.name = "Aditya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "aditya@google.comm",
    userFullName: {
        userFirstName: "Aditya",
        userLastName: "Gupta"
    },
    age: 18,
    isLoggedIn: true,
    lastLoginDays: [ "Monday", "Friday", "Saturday"]
};

// console.log(regularUser.userFullName.userFirstName);
// console.log(regularUser.lastLoginDays[1]);

//Ways to merge objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

const mergedObject1 = Object.assign(obj1, obj2, obj3);  // Always 1st object is target object where other objects(source) will be merged
const mergedObject2 = Object.assign({}, obj1, obj2, obj3); //That's why we have taken empty object as 1st argument to avoid modifying obj1
// console.log(mergedObject1);  
// console.log(mergedObject2);

const mergedObject3 = {...obj1, ...obj2, ...obj3};  // using spread operator
// console.log(mergedObject3);

const user = [
    {id: 1, name: "Aditya", age: 18},
    {id: 2, name: "Ankit", age: 20},
    {id: 3, name: "Saksham", age: 19}
]

/*console.log(user[1].name);

console.log(Object.keys(regularUser)); // to get all keys of object as array
console.log(Object.values(regularUser)); // to get all values of object as array
console.log(Object.entries(regularUser)); // to get all key-value pairs as nested array

console.log(regularUser.hasOwnProperty("age")); // to check if object has a specific property or not
*/



// ******************************************************************************************************
/*const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Aditya Gupta",
}

// We can access object keys as
console.log(course.courseName);
console.log(course['courseName']);

//But If we want extract key from object
const {courseInstructor} = course;  // object destructuring
console.log(courseInstructor);// Now we can access courseInstructor directly without using course.courseInstructor

// We can also rename while destructuring
const {courseName: cn} = course;
console.log(cn); // Now we can access courseName using cn

// We can also set default value while destructuring
const {rating = 5} = course; // rating key is not present in course object so it will take default value 5
console.log(rating);
*/

// *****************************************API*************************************************************

// Before API would get data in form of XML but now most of the APIs use JSON format to send and receive data

// JSON - JavaScript Object Notation
// It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate

// Example of JSON
const myJson = `{
    "name": "Aditya",
    "age": 18,
    "isLoggedIn": false,
    "lastLoginDays": ["Monday", "Friday", "Saturday"]
}`;

// To convert JSON string to JavaScript object we use JSON.parse()
const myObj = JSON.parse(myJson);
// console.log(myObj);
// console.log(myObj.name);

// To convert JavaScript object to JSON string we use JSON.stringify()
const jsonString = JSON.stringify(myObj);
// console.log(jsonString);
// console.log(typeof jsonString); // it will be string

