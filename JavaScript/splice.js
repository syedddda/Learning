// Array.splice( 
//     startIndex, 
//     Count: No of items to remove, 
//     Item: Item to add [..]
//     )

numbers.splice(1,3);
// [2,3,4]
// Includes start index and end index

console.log( numbers ); 
// [1,5,6]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


// Splice Exercises