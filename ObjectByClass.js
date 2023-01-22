class Pen {
    constructor(name, color, price) {
        this.name = name,
        this.color = color,
        this.price = price
    }
    showPrice(){
        console.log(`price = ${this.price}`)
    }
}

const pen1 = new Pen("A", "black", 38)
console.log(pen1)
pen1.showPrice()