// Difference between i== and ++i 

// The difference between i++ and ++i is the value of the expression and not the value itself

// i++ 
    // retunrs the value before the increment
    // increments the variable, but returns the old value.


// ++i 
    // retunrs the value after the increment
    // increments the variable, returning the new value

// Same is the case for i-- and --i

let i = 0;

while (i < 10) { 
    // i++ retunrs the value before the increment
    console.log(i++); // 0 1 2 3 4 5 6 7 8 9 
}

i = 0;

while (i < 10) { 
    // ++i retunrs the value after the increment
    console.log(++i); // 1 2 3 4 5 6 7 8 9 10
}