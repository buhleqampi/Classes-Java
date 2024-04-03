// class Main {
//     log(numbers) {
//         for (let number of numbers) {
//             console.log(number);
//         }
//         console.log();
//     }
// }

// // Example usage:
// const main = new Main();
// main.log([1, 2, 3, 4, 5]);

class Product {
    constructor (name,price){
        this.name = name ;
        this.price = price;
    }
    displayProduct(){
        console.log('Product: ${this.name}');
        console.log('Product: $${this.price}');
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1= new Product ("Shirt", 19.99);
const product2 = new Product ("Pants", 22.50);
const product3 = new Product ("Socks", 9.99);

product2.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log("Total price (with tax): $${total.toFixed(2)}");