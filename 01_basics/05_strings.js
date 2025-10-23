const firstName = "Aditya";
const lastName = "Gupta";

// console.log(firstName + lastName + " is a good boy."); 

console.log(`My name is ${firstName} ${lastName} and I am a good boy.`);  ///template literals

const gameName = new String("Chess");  
console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

// Strings are immutable
// gameName[0] = "D";  // not allowed
// console.log(gameName);

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(0,-3); // negative indexing is possible in slice method
console.log(anotherString);

const newString2 = "    Hello World    ";
console.log(newString2.trim());

const url = "aditya/gupta/%20profile";
console.log(url.replace("%20", "-"));

console.log(url.includes("gup"));

console.log(url.split("/"));