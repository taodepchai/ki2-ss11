class Test{
    private t1:number;
    protected t2:number;
    constructor (t1:number,t2:number){
        this.t1 = t1;
        this.t2 = t2;
    }
}

class Test1 extends Test{
    constructor(t1:number,t2:number){
        super(t1,t2);
    }
    print():void{
        console.log(this.t2,this.t1);
        // t2 là protected nên có thể truy cập trong class con
        // t1 là private nên chỉ có thể truy cập trong class gốc và không thể truy cập ở nơi nào khác    
    }
}