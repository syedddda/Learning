const searchInput = document.getElementById( 'searchInput' );

let count = 0;

let theSearchFunction = function( event ) {
    
    const theLetter = arguments[0].target.value;

    console.log( `${theLetter} is ${arguments[1]}` );
}

const theDebounceFunction = ( theFunction, debounce ) => {

    let timedFunction;

    return function( event ) {
        const self = this;
        const args = arguments;

        clearTimeout( timedFunction );
    
        timedFunction = setTimeout( function() {
            theFunction.apply( self, args );
        }, debounce );
    }

}

const debouncedFunction = theDebounceFunction( theSearchFunction, 300 );

searchInput.addEventListener( 'keyup', ( event ) => debouncedFunction( event, 'searched' ) );