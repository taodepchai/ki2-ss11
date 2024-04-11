"use strict";
class Employee1 {
    constructor(name, company, _phone) {
        this.name = name;
        this.company = company;
        this._phone = _phone;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this._phone} `);
    }
}
class Manager1 extends Employee1 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone} teamSize: ${this.teamSize} `);
    }
}
let employee1 = new Manager1("abcd", "maaa", "1234567890", 12);
employee1.printInfo();
