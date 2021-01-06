const searchInput = document.getElementById( 'searchInput' );

let count = 0;

const theSearchFunction = function() {
    
    const theLetter = this.value;

    console.log( 'Searching for ', theLetter );
}

const theDebounceFunction = ( theFunction, debounce ) => {

    let timedFunction;

    return function() {
        const self = this;
        const args = arguments;

        clearTimeout( timedFunction );
    
        timedFunction = setTimeout( function() {
            theFunction.apply( self, args );
        }, debounce );
    }

}

searchInput.addEventListener( 'keyup', theDebounceFunction( theSearchFunction, 300 ) );