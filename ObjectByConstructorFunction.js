//classes were introduced in EcmaScript2015 or Es6
// Javascript still follows a prototype based inheritance model

// Earlier we used constructor functions to do OOP
function Pen(name, color, price){
    this.name = name,
    this.color = color,
    this.price = price

    this.showName = function(){
        console.log(this.name)
    }
}

// using new to create an object
const pen1 = new Pen("A", "black",38)

Pen.prototype.showPrice = function() {
    console.log(`price = ${this.price}`)
}

console.log(pen1)
pen1.showPrice()
pen1.showName()