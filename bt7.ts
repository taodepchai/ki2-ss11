class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("số dư không đủ");
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        return this.balance * this.interestRate;
    }
}

let mySavingsAccount = new SavingsAccount("abcd1234", 1000, 0.05);
mySavingsAccount.withdraw(50);
console.log("lãi hàng tháng:", mySavingsAccount.calculateInterest());

mySavingsAccount.deposit(500);

console.log("lãi hàng tháng mới:", mySavingsAccount.calculateInterest());
