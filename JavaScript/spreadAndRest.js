
//   ▒█▀▀█ ▒█▀▀▀ ▒█▀▀▀█ ▀▀█▀▀ 　 ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀█ 
//  ▒█▄▄▀ ▒█▀▀▀ ░▀▀▀▄▄ ░▒█░░ 　 ▒█░░▒█ ▒█▄▄█ ▒█▀▀▀ ▒█▄▄▀ ▒█▄▄█ ░▒█░░ ▒█░░▒█ ▒█▄▄▀ 
// ▒█░▒█ ▒█▄▄▄ ▒█▄▄▄█ ░▒█░░ 　 ▒█▄▄▄█ ▒█░░░ ▒█▄▄▄ ▒█░▒█ ▒█░▒█ ░▒█░░ ▒█▄▄▄█ ▒█░▒█

// Rest operator combines individual arguments into an array. It can also separate individual args as ur wish and take remaining items as an array

function print( ...args ) {
    console.log( 'Args : ', args );
}

print(1,2,3,4,5);

// In above log, even thought he values are sent individually comma separated, they are taken as an array because of the rest operator

function print1( first, second, ...rest ) {
    console.log( 'First : ', first );
    console.log( 'Second : ', second );
    console.log( 'Rest : ', rest );
}

print1(1,2,3,4,5);

// In above log, we were able to take just the first and second individually and other remaining items as an array using rest operator

function printObjects( { name, age, ...rest } ) {
    console.log( 'Name : ', name );
    console.log( 'Age : ', age );
    console.log( 'Rest : ', rest );
}

const user = {
    name: 'Syed',
    age: 30,
    gender: 'Male',
    dob: '28/04/1990'
}

printObjects(user);

// In the above example we're using the same rest operator but to split them from an object


//   ░█▀▀▀█ ░█▀▀█ ░█▀▀█ ░█▀▀▀ ─█▀▀█ ░█▀▀▄ 　 ░█▀▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀█ ─█▀▀█ ▀▀█▀▀ ░█▀▀▀█ ░█▀▀█ 
//  ─▀▀▀▄▄ ░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▄▄█ ░█─░█ 　 ░█──░█ ░█▄▄█ ░█▀▀▀ ░█▄▄▀ ░█▄▄█ ─░█── ░█──░█ ░█▄▄▀ 
// ░█▄▄▄█ ░█─── ░█─░█ ░█▄▄▄ ░█─░█ ░█▄▄▀ 　 ░█▄▄▄█ ░█─── ░█▄▄▄ ░█─░█ ░█─░█ ─░█── ░█▄▄▄█ ░█─░█

// Spread operator lets us ungroup objects or arrays and take individual values out of it

const nameArray = [ 'John', 'Mark' ];
const newNameArray = [ ...nameArray, 'Antony' ];

console.log( 'newNameArray : ', newNameArray );

// In the above log, 'Antony is added to the new name array'

// We can use spread operator as a first or last argument

// If we had an array that we wanted to pass as a list of arguments in a function, we would use the spread operator

function add(a, b, c) {
    return a + b + c ;
}
  
const args = [1, 2, 3];
  
console.log( 'Added item : ', add(...args) );

// In the above example, we were able to send an array to a function that expects individual params by using the spread operator and splitting the ars array as individual parameters