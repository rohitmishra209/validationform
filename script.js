function formvalidation()
{
        var firstname =document.getElementById('firstname').value;
        var lastname=document.getElementById('lastname').value;
        var emailid=document.getElementById('emailid').value;
        var mobileno=document.getElementById('mobile').value;
        var country=document.getElementById('countryId').value;
        var address=document.getElementById('address').value;

  if(firstname===""){
      alert("Please Enter your Firstname");
      var flags = false;
     }else if(lastname===""){
         alert("Please Enter Your Lastname");
           var flags = false;
         }else if(mobileno===""){
            alert("Please Enter Your Mobile no");
              var flags = false;
              }else if(emailid===""){
                alert("Please Enter Email id");
                  var flags = false;
                   }else if(emailid!==""){
                       result=validateEmail(emailid);
                         if(result=== false){
                             alert("Please Enter valid EmailId");
                               var flags = false;
                           }
                           var flags=false;

                        }else if(address===""){
                                alert("Please Enter Your Address");
                                  var flags = false;
                                   }else if(country===""){
                                      alert("Please Enter Country and state");
                                         var flags = false;

                                }else{
                                            var flags = true;
                                          }
                                          return flags;
}



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function Mobilenovalidation(){

      var mobileno = document.getElementById('mobile').value;
      var mobile = document.getElementById('mobile');

      if (mobileno == ""){
           alert("You didn't enter a phone number.");
           mobile.value = "";
           mobile.focus();
           return false;
      }else if (isNaN(mobileno)){
           alert("The phone number contains illegal characters.");
           mobile.value = "";
           mobile.focus();
           return false;
      }else if (!(mobileno.length == 10)){
           alert("The phone number is the wrong length. \nPlease enter 10 digit mobile no.");
           mobile.value = "";
           mobile.focus();
           return false;
      }
}


function ContactDetails(){

    var validateResult = formvalidation();
    if(validateResult === true){


         var id = Math.random();
         var firstname =document.getElementById('firstname').value;
         var lastname=document.getElementById('lastname').value;
         var emailid=document.getElementById('emailid').value;
         var mobileno=document.getElementById('mobile').value;
         var country=document.getElementById('country').value;
         var address=document.getElementById('address').value;


      localStorage.setItem("id", id);
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("emailid", emailid);
      localStorage.setItem("mobileno", mobileno);
      //localStorage.setItem("country", country);
      localStorage.setItem("address", address);

      structure();


    }

}

function structure(){

  console.log(localStorage.length);

  var html = "<table border= 'border-collapse: collapse;width:30px;'>";

         html+="<tr>";
              html+="<th>"+"First Name"+"</th>";
              html+="<th>"+"Last Name"+"</th>";
              html+="<th>"+"Email Id"+"</th>";
              html+="<th>"+"Mobile No"+"</th>";
              html+="<th>"+"Country"+"</th>";
              html+="<th>"+"Address"+"</th>";
          html+="</tr>";

     for(var i=0; i<localStorage.length; i++){
     //var abc = collection.length;
     html+="<tr>";
            html+="<td>"+localStorage.getItem("firstname");+"</td>";
            html+="<td>"+localStorage.getItem("lastname");+"</td>";
            html+="<td>"+localStorage.getItem("emailid");+"</td>";
            html+="<td>"+localStorage.getItem("mobile");+"</td>";
            html+="<td>"+localStorage.getItem("address");+"</td>";
            html+="<td>"+localStorage.getItem("country");+"</td>";
            html+="</tr>";

  }
  html+="</table>";
  document.getElementById("display").innerHTML = html;

}
//
// function show(){
//   console.log(show);
//
// for(var i=0; i<=localStorage.length; i++){
// structure();
// //document.getElementById("display").innerHTML = html;
//
// }
