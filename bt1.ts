class Employee {
    public name: string; 
    protected company: string;
    private phone: string; 

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone} `);
    }
}

class Manager extends Employee {
    teamSize:number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}

let employee = new Manager("abcd", "maaa", "1234567890",12);

employee.printInfo();
