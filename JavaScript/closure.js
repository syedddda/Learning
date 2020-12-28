// Closure is basically a function inside another function which even after getting returned from the outer function will still be able to access the variables of the parent function

function add(x){
    return function(y){
         return x + y;
    } 
 }

 console.log( add(5)(3) ); // Output will be 10

//  Here the returned function is still able to access the param x even from the global execution context. This is possible because of closures