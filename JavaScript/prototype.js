const Fruit = function ( name, color, price ) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.getColor = () => {
        return `Color of ${this.name} is ${this.color}`;
    }
}

// Adding a new method to the Fruits function using prototype

Fruit.prototype.getPrice = function () {
    return `The price of ${this.name} is ${this.price}`;
}

var apple = new Fruit( 'Apple', 'Red', 50 );

console.log( apple.getPrice() );