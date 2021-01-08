const printNumber = ( num, inc ) => {
    for ( let i = 0; i <= num; i++ ) {
        if( i === num ) {
            return i + inc ;
        }
    }
}

const memoize = ( func ) => {
    const cachedData = {};

    return function(...args) {
        if( cachedData[args] ) {
            return cachedData[args];
        }

        const computedValue = func( ...args );
        cachedData[args] = computedValue;
        console.log( `I found : ${computedValue}` );
        return computedValue;
    };
};

const memoizedPrintNumber = memoize( printNumber );

console.time();
memoizedPrintNumber(200000000, 5);
console.timeEnd();

console.time();
memoizedPrintNumber(200000000, 5);
console.timeEnd();