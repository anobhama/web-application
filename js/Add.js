function Add()
{
    //to check whether js is working or not
    //alert("added");

    var num1= parseInt(document.getElementById("num1").value);
    var num2= parseInt(document.getElementById("num2").value);

    //concatination happens as its text box
    //var res= num1 + num2;

    var res = num1+num2;
    
    //it displays the res in diff page
    //document.write(res);

    document.getElementById("myDiv").innerHTML=res;


}