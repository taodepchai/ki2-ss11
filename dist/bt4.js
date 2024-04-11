"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedDown() {
        return this.speed -= 1;
    }
    speedUp() {
        return this.speed += 1;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle = new Bicycle("Bicycle", 10, 1, 1);
bicycle.speedUp();
bicycle.showSpeed(); // speed:11
