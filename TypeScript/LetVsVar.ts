let x=5;
var y=6;
var times=5;

if(times >3)
{
    var msg="Hi";  //globally
}
console.log(msg);
msg="Welcome";
console.log(msg);



x=100;
y=200;
let times1=5;
if(times1 >3)
{
    let msg1="Anu";  //locally
    console.log(msg1);
}

console.log(msg1);  //loca;;y so throws error