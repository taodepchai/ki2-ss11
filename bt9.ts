class Shape {
    calculateArea(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number;
    calculateArea(width?: number, height?: number): number {
        if (width && height) {
            return width * height;
        } else {
            return this.width * this.height;
        }
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number;
    calculateArea(radius?: number): number {
        if (radius) {
            return Math.PI * radius * radius;
        } else {
            return Math.PI * this.radius * this.radius;
        }
    }
}

let rectangle = new Rectangle(5, 10);

let circle = new Circle(5);

console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
console.log("Diện tích hình tròn:", circle.calculateArea());
