class Employee1 {
    public name: string; 
    protected company: string;
    private _phone: string; 

    constructor(name: string, company: string, _phone: string) {
        this.name = name;
        this.company = company;
        this._phone = _phone;
    }
    get phone() {
        return this._phone;
    }   
    set phone(value: string) {
        this._phone = value;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this._phone} `);
    }
    
}

class Manager1 extends Employee1 {
    teamSize:number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    override printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone} teamSize: ${this.teamSize} `);
    }
}

let employee1 = new Manager1("abcd", "maaa", "1234567890",12);

employee1.printInfo();
