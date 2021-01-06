class User {
    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve( { 
                    firstName: this.firstName, 
                    lastName: this.lastName 
                } );
            }, 2000)
        })
    }
}

// Using async await

(async function() {
    const syed = new User( 'Mark', 'Antony' );

    try {
        const syedData = await syed.getData();
        console.log( 'User Details : ', syedData );
    } catch (err) {
        console.log( 'Error : ', err );
        // throw new Error(err);
    }

})();

// Using promise then

(async function() {
    const syed = new User( 'Mark', 'Antony' );

    syed.getData()
        .then((data) => {
            console.log( 'User Details then : ', data );
        })
        .catch((err) => {
            console.log( 'Error then : ', err );
        })

})();
