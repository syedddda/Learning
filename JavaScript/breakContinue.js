// Difference between break and continue statements


// continue just stops the current execution and moves on to the next iteration without executing any code below it

for (let i = 0; i < 10; i++) {
    if (i == 5) { continue; }
    console.log(i);
}

// returns 0 1 2 3 4 6 7 8 9

// break statement breaks (stops) the execution of a loop entirely

for (let i = 0; i < 10; i++) {
    if (i == 5) { break; }
    console.log(i);
}

// returns 0 1 2 3 4 