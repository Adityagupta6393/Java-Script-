const marvel_heroes = ["Ironman", "Spiderman", "Hulk", "Thor"];
const dc_heroes = ["Batman", "Superman", "Flash", "Wonder"];

// marvel_heroes.push(dc_heroes);
// console.log("Marvel Heroes:" ,marvel_heroes); 
//console.log(marvel_heroes[4][0]); // Accessing "Batman" from the nested array

// const all_heroes = marvel_heroes.concat(dc_heroes);
// const all_heroes = [...marvel_heroes, ...dc_heroes];  // Using spread operator to merge arrays(It works same as concat)
// console.log("All Heores:", all_heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]], 12];
// const flat_array = another_array.flat(Infinity); // Flattening the array up to depth 2

// console.log("Original Array:", another_array);
// console.log("Flattened Array:", flat_array);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
console.log(Array.from({name: "Aditya"})); //It cannot convert object to array so first we have to tell it what type of array we want of either keys or values


let score1 = 100;
let score2 = 200;
let score3 = 300;

const scores_array = Array.of(score1, score2, score3); //Creating array from individual elements
console.log(scores_array);
