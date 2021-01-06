window.throttledFunctionCount = 0;
window.unThrottledFunctionCount = 0;

const throttledFunction = () => {
    // console.log( 'This function is throttled' );   
    window.throttledFunctionCount++; 
}

const unThrottledFunction = () => {
    // console.log( 'This function is not throttled' );
    window.unThrottledFunctionCount++;
}

const throttlerFunction = ( theFunction, throttleLimit ) => {
    let canThrottle = true;

    return function() {
        const self = this;
        const args = arguments;

        if( canThrottle ) {
            theFunction.apply( self, args );
            canThrottle = false;
        }
    
        setTimeout( function() {
            canThrottle = true;
        }, throttleLimit );
    }
}

const throttle = throttlerFunction( throttledFunction, 600 );

window.addEventListener( 'resize', throttle );

window.addEventListener( 'resize', unThrottledFunction );