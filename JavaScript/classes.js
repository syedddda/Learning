//  Class declarations are not hoisted and will result in an error if tried to access before declaring it

console.log( 'Animal : ', Animal ); // This will throw an error "Animal is not defined". But if this is a function it will return undefined and won't throw an error

class Animal {
    constructor() {
        this.type = 'Animal';
        this.canTalk = false;
    }
}

const animal = new Animal(); // Returns a new animal objectCreate

console.log( 'animal', animal );

class Dog extends Animal {
    constructor() {
        // It's important to call the super constructor in a derived class before accessing the 'this' keyword. Otherwise this will result in an error
        super();
        this.name = 'Dog';
        this.canBark = true;
    }
}

const dog = new Dog;

console.log( 'dog', dog );

console.log( 'dog instanceof Dog : ', dog instanceof Dog ) 
// returns true obviosuly

console.log( 'dog instanceof Animal : ', dog instanceof Animal ) 
// Is also true since dog is a derived class from animal

console.log( 'dog instanceof Object : ', dog instanceof Object ) 
// Is also true since dog is an instance of Animal and Animal is an instance of Object

