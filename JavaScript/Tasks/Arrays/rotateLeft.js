function rotateLeft(a, d) {

    for( var i = 0; i < d; i++ ) {
        const [spliced] = a.splice(0,1);
        a.push(spliced);
    }
    
    return a;
}

const arrayToRotate = [1,2,3,4,5];
rotateLeft(arrayToRotate,2);

function rotateLeftRaw(a, d) {
    for( var i = 0; i < d; i++ ) {
        let itemAtIndexZero = a[0];
        
        for( let j = 0, aLength = a.length; j < aLength; j++ ) {                        
            
            if( j === ( aLength - 1 ) ) {
                a[ aLength - 1 ] = itemAtIndexZero;
            } else {
                a[ j ] = a[ j + 1 ];
            }
        }
    }
    
    return a;
}

// Expected output is [3,4,5,1,2]

// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .

