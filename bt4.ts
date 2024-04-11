class Vehicle {
    protected name:string;
    protected speed:number;
    protected id:number;
    constructor(name:string, speed:number, id:number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedDown():number{
        return this.speed -= 1;
}
    speedUp():number{
        return this.speed += 1;
    }

    showSpeed():void{
        console.log(this.speed);
    }
}

class Bicycle extends Vehicle{
    private gear:number;
    constructor(name:string, speed:number, id:number, gear:number) {
        super(name, speed, id);
        this.gear = gear;
    }
}

let bicycle = new Bicycle("Bicycle", 10, 1, 1);

bicycle.speedUp();
bicycle.showSpeed(); // speed:11
