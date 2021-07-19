//functions without parameters

function show()
{
    console.log("Hi I am Anu");
}

show();


//functions with parameters
function greet(vname:string,msg:string):string
{
    return "Hi " + vname + ":" + msg;
}

let str=greet("Anu","How are you");

console.log(str);

function greet1(vname:string,msg:string="life is better"):string
{
    return "Hi " + vname + ":" + msg;
}

let str=greet1("Anu");

console.log(str);


//
function calSal(no1:number,no2:number):any
{
    console.log(no1+no2);
}
let sal1=calSal(100,80.04);


//annonymous functions
//defined as expression
//function has no name 
let greeting=function()
{
    console.log("Annoymous function");
}

greeting();

//arrow function (same as lambda)
let sum=(x:number,y:number):number => {return x+y;}


//any keywrd is lik overloading
function add(a:any,b:any):any
{
    return a +b;
}
let str=add(10,20);
console.log(str);

let st1=add("Ano","Bhama");
console.log(st1);


