var user = {
    name: 'Syed',
    age: 25,
    courses: {
        names: ['JS','React'],
        prices: [100,250]
    }
}

const { name, courses, courses: { prices } } = user;

console.log( name );
console.log( courses );
console.log( prices );