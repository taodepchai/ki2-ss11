class Shape1 {
    calculatePerimeter(): number {
        return 0;
    }
}

class Rectangle1 extends Shape1 {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculatePerimeter(): number;
    calculatePerimeter(width?: number, height?: number): number {
        if (width && height) {
            return (width * height)*2;
        } else {
            return (this.width + this.height)*2;
        }
    }
}

class Circle1 extends Shape1 {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculatePerimeter(): number;
    calculatePerimeter(radius?: number): number {
        if (radius) {
            return Math.PI * radius * 2;
        } else {
            return Math.PI * this.radius * 2;
        }
    }
}

let rectangle1 = new Rectangle1(5, 10);

let circle1 = new Circle1(5);

console.log("Chu vi hình chữ nhật:", rectangle1.calculatePerimeter());
console.log("Chu vi hình tròn:", circle1.calculatePerimeter());

