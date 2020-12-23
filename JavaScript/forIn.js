// Used for iterating Arrays

const items = {
    name: 'Syed',
    age: 20,
    gender: 'Male'
}

for( const i in items ) {
    console.log( `Your ${i} is ${items[i]}` );
}