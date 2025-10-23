let score = false;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = Boolean(score);

// console.log(typeof isLoggedIn);
// console.log(isLoggedIn);

// 0 => false , 1 => true
// "" => false , "Aditya" => true
// null => false , " " => true
// undefined => false

let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(typeof stringNumber);
// console.log(stringNumber);


// *****************************Operations*******************************

let value = 33;
let negValue = -value;

//console.log(negValue); // -33
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " Aditya";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(2 + 2 + "1");

console.log(+true);

console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

console.log(num1, num2, num3);

// *****************************Increment / Decrement*******************************

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

