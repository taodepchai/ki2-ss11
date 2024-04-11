"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`id: ${this.id} name:${this.name}`);
    }
}
let s1 = new Student(1, "abcd");
s1.displayInfo();
