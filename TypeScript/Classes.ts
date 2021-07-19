class car
{
    model:string;
    doors:number;
    isElectric:Boolean;

    constructor(model:string,doors:number,isElectric:Boolean)
    {
        this.model=model;
        this.doors=doors;
        this.isElectric=isElectric;
    }

    show():void
    {
        console.log("This car "+this.model+" has "+this.doors+" and is "+ this.isElectric);
    }
}

let myCar=new car("Ciaz",4,false);
myCar.show();