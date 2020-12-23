const fruits = [ 'Apple', 'Banana', 'Orange', 'Litchi' ];

// fruits.forEach( fruit => console.log(fruit) );

const randArray = [
    [
        'fruits',
        [ 'Apple', 'Banana', 'Orange', 'Litchi' ]
    ],
    [
        'names',
        [ 'Bob', 'Jane', 'John', 'Rachel' ]
    ]
]

randArray.forEach( ( [ key, value ] ) => {
    console.log( 'Key is', key );
    console.log( 'Value is', value );
} );