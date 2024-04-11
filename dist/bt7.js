"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("số dư không đủ");
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.balance * this.interestRate;
    }
}
let mySavingsAccount = new SavingsAccount("abcd1234", 1000, 0.05);
mySavingsAccount.withdraw(50);
console.log("lãi hàng tháng:", mySavingsAccount.calculateInterest());
mySavingsAccount.deposit(500);
console.log("lãi hàng tháng mới:", mySavingsAccount.calculateInterest());
