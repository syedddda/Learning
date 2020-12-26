const Fruit = function ( name, color, price ) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.getColor = () => {
        return `Color of ${this.name} is ${this.color}`;
    }
}

var apple = new Fruit( 'Apple', 'Red', 50 );

console.log( apple.getColor() );