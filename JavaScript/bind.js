// The bind method is used to bind  a different this reference to an existing function which by default points to another different this reference

var fruit = {
    name: 'Apple',
    properties: ['Red in color', 'Good for health'],
    showProps: function () {
        this.properties.forEach( function (prop) {
            console.log(`${this.name} is ${prop}`);
        });
    }
};

// Above code will not have the name apple since there is no name in the window object

console.log( fruit.showProps() );

//  This will print below code when run in node js context or window oobject instead of undefined if run in browser

// undefined is Red
// undefined is Good for 


// Even though the "properties.forEach" is inside the showProps method, the this inside forEach will still point to window Object
// To overcome this we must bind the this of showProps to the forEach method's this

var fruitWithThisBound = {
    name: 'Orange',
    properties: ['Orange in color', 'Good for lungs'],
    showProps: function () {
        this.properties.forEach(function (prop) {
            console.log(`${this.name} is ${prop}`);
        }.bind(this));
    }
};

console.log( fruitWithThisBound.showProps() );

// Or we can do this with the ES6 arrow functions

var fruitUsignArrowFunction = {
    name: 'Grape',
    properties: ['Purple in color', 'Good for health'],
    showProps: function () {
        console.log( 'showProps : ', this );
        this.properties.forEach( prop => console.log(`${this.name} is ${prop}`) );
    }
};

console.log( fruitUsignArrowFunction.showProps.bind( fruitUsignArrowFunction )() );

// The bind() method creates a new function, when invoked, has the this sets to the provided value.

// The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let run = runner.run.bind(flyer, 20);
run(); // Flyer runs at 20 mph.

// Refs

// https://www.javascripttutorial.net/javascript-bind/