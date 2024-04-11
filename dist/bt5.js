"use strict";
class Test {
    constructor(t1, t2) {
        this.t1 = t1;
        this.t2 = t2;
    }
}
class Test1 extends Test {
    constructor(t1, t2) {
        super(t1, t2);
    }
    print() {
        console.log(this.t2, this.t1);
        // t2 là protected nên có thể truy cập trong class con
        // t1 là private nên chỉ có thể truy cập trong class gốc và không thể truy cập ở nơi nào khác    
    }
}
