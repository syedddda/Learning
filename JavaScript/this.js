// define a function
const myFunction = () => {
    console.log( 'myFunction', this);
  };
  
// call it
myFunction();

const myObject = {
    name: 'Syed',
    myMethod: () => {
      console.log( 'myMethod', this );
    }
};

myObject.myMethod() // this === window or global object

const myMethod = myObject.myMethod.bind(myObject);
myMethod(); // this === window or global object

// Observations

// You cannot rebind this to an arrow function