
const commons = document.getElementsByClassName( 'common' );

const loggingFunction = function( e ) {

    // e.stopPropagation();

    const phases = {
        1: 'Capturing',
        2: 'Target',
        3: 'Bubbling'
    };

    const phase = phases[ e.eventPhase ];

    console.log( this.id.charAt(0).toUpperCase() + this.id.slice(1) + ' : ' + phase );
}

for( let i = 0; i < commons.length; i++ ) {
    commons[ i ].addEventListener( 'click', loggingFunction, false )
}