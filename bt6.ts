class Product{
    protected name:string;
    protected price:number;
    constructor (name:string, price:number){
        this.name = name;
        this.price = price;
    }
    getDescription():void{
        console.log(`name:${this.name} price:${this.price}`);
    } 
}

class  Electronics extends Product{
    private brand:string;
    constructor (name:string, price:number, brand:string){
        super(name, price);
        this.brand = brand;
    }
    override getDescription():void{
        console.log(`name:${this.name} price:${this.price} brand:${this.brand}`);
    } 
}

let product = new Electronics("iphone", 1000, "apple");
product.getDescription();
