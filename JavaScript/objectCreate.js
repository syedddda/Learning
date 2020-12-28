var Fruit = {
    name: '',
    getFruitName: function() {
        console.log( `Name of the fruit is ${this.name}`);
    }
}

// Creating an object and then inserting properties into it

const apple = Object.create( Fruit );

apple.name = 'Fresh Apple';

console.log( apple.getFruitName() );

// Pushing propoerties right when creating the object

const orange = Object.create( Fruit, {
    name: { value: 'Orange' },
    color: { value: 'Orange' },
    getFruitColor: { value: function() {
        console.log( `Color of the ${this.name} fruit is ${this.color}` );
    } }
} );

console.log( orange.getFruitColor() );