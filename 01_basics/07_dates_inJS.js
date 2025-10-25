let myDate = new Date();

/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString());  */

/*let createDate = new Date(2023,0, 23);
console.log(createDate.toDateString());

let createDate1 = new Date(2023, 0, 23, 10, 33, 30);
console.log(createDate1.toString());
console.log(createDate1.toDateString());

let createDate2 = new Date("2024-06-15");
console.log(createDate2.toLocaleString());  */


let createdDate = new Date();
// let myTimeStamp = Date.now();
// console.log(myTimeStamp.toLocaleString());
// console.log(createdDate.getTime());
// console.log(createdDate.getDay());

createdDate.toLocaleString(
    'default', {weekday: 'long'}   // We can customize the output format like this
)