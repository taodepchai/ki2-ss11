class Account1 {
    protected accountNumber: string;
    protected balance: number;
    private _overdraftLimit:number;
    constructor(accountNumber: string, balance: number,_overdraftLimit:number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this._overdraftLimit = _overdraftLimit;
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
    get overdraftLimit(){
        return this._overdraftLimit;
    }
    set overdraftLimit(value:number){
        this._overdraftLimit = value;
    }
}

class SavingsAccount1 extends Account1 {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number,overdraftLimit:number) {
        super(accountNumber, balance,overdraftLimit);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        return this.balance * this.interestRate;
    }

    withdraw(amount: number): void {

        if (amount >this.balance ) {
            console.log("số dư không đủ");
            
        } else if ( amount > this.overdraftLimit) {
            console.log("hạn mức không cho phép");
        }else
        {
            this.balance -= amount;
        }
    }
}

let mySavingsAccount1 = new SavingsAccount1("abcd1234", 1000, 0.05,600);
mySavingsAccount1.withdraw(800);
console.log("lãi hàng tháng:", mySavingsAccount1.calculateInterest());

mySavingsAccount1.deposit(500);

console.log("lãi hàng tháng mới:", mySavingsAccount1.calculateInterest());
