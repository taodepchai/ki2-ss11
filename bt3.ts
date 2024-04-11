class Person{
    name:string;
    constructor (name:string){
        this.name = name;
}
    
}

class Student extends Person {
    id : number;
    constructor (id:number,name:string){
        super(name);
        this.id = id;
    }
    displayInfo():void{
        console.log(`id: ${this.id} name:${this.name}`);
    }
}

let s1 = new Student(1,"abcd");
s1.displayInfo();