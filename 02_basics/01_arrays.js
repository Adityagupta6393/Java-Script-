// Arrays

let arr1 = [1, 2, 3, 4, 5];

let heros = ["spiderman", "ironman", "thor", "hulk"];

let mixed = [1, 2, "string", null, undefined, 3.14];

let arr2 = new Array(6, 7, 8, 9, 10);

// console.log(arr1);
// console.log(heros);
// console.log(mixed);
// console.log(arr2);

// Accessing array elements
// console.log(heros[0]); 
// console.log(heros[2]); 

//methods of array
/*arr1.push(6); // adds 6 at the end
console.log(arr1);

arr1.pop(); // removes last element
console.log(arr1);

arr1.unshift(9); // adds 9 at the beginning
console.log(arr1);

arr1.shift(); // removes first element
console.log(arr1); */

/*console.log(arr1.includes(3)); // checks if 3 is present in array

console.log(arr1.indexOf(4)); // returns index of 4

console.log(arr1.join()); // joins array elements into a string seaparated by "," by default  */

const myn1 = arr1.slice(1,3); // creates a new array from index 1 to 2
console.log(myn1);
console.log(arr1);

const myn2 = arr1.splice(1,3); // removes 3 elements from index 1
console.log(myn2);
console.log(arr1);