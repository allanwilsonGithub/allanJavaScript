console.log("https://www.udemy.com/the-complete-javascript-course")

/*******************************
* Arrays
*/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// 0 based. The first element is 0 index

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
console.log(names);


// Mutate array data
names[names.length] = 'Tom';
names[5] = 'Mary';
console.log(names);