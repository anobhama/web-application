export class Product
{
    prodId:number=0;
    prodName:string="";
    prodPrice:number=0;

    constructor(prodId:number,prodName:string,prodPrice:number)
    {
        this.prodId=prodId;
        this.prodName=prodName;
        this.prodPrice=prodPrice;
    }
}