"use strict";
class Shape1 {
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle1 extends Shape1 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
}
class Circle1 extends Shape1 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculatePerimeter() {
        return Math.PI * 2 * this.radius;
    }
}
let rectangle1 = new Rectangle1(5, 10);
let circle1 = new Circle1(5);
console.log("Chu vi hình chữ nhật:", rectangle1.calculatePerimeter());
console.log("Chu vi hình tròn:", circle1.calculatePerimeter());
