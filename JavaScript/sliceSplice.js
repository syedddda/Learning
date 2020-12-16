const numbers = [1,2,3,4,5,6];

numbers.slice(1,3); 
// [2,3]
// Includes start index but excludes end index

console.log( numbers ); 
// [1,2,3,4,5,6]

numbers.splice(1,3);
// [2,3,4]
// Includes start index and end index

console.log( numbers ); 
// [1,5,6]



