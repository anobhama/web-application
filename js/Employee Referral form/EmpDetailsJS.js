function OnDisplay()
      {
            //alert("worked");

            var fname = document.form1.fname.value;
            var lname = document.form1.lname.value;
            var phone=document.form1.phone.value;
            var email = document.form1.email.value;
            var dob= document.form1.dob.value;
            var state = document.form1.state.value;

            /*document.getElementById("Preview").onclick = function() { 
                  var tab = window.open(url, '_blank');
                  tab.focus();
            }*/

            document.writeln("<h1> Preview Data <h1>");
            document.writeln("<pre>");
            document.writeln( "First Name  is  : " + fname);
            document.writeln("Last Name   is  : " + lname);
            document.writeln("Contact Number is  : " + phone);
            document.writeln("Email Address is : " + email);
            document.writeln("Date of Birth  is  : " + dob);
            document.writeln("Location is  : " + state);

      }

function SubmitConformation()
{
      document.writeln("Successfully submiited !!!");
}