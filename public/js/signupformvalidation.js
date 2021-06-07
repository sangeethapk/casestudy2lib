
document.getElementById("register").addEventListener("click",(event)=>{
let emailv=validateEmail();
let pswv=validatePassword();
let compare=comparePassword();
let name=nameRequired();
let userName=usernameRequired();
console.log(emailv+" "+pswv+" "+compare+" "+name+" "+userName)
if(emailv&&pswv&&compare&&name&&userName){

     console.log("checking true");
    document.getElementById("signupform").submit();
}
else{
    console.log("checking....");
   // document.getElementById("register").disabled=true;
    event.preventDefault();

    
}



});

function validateEmail(){

    let emailValue = document.getElementById("email").value;
    let regexp = /^([\w.-]+)@([\w-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;


    document.getElementById("emailmsglbl").innerText = ""
   // document.getElementById("phlblError").innerText = "";

    if (regexp.test(emailValue)) {

        return true;
    }
    else {
        document.getElementById("emailmsglbl").innerText = "Enter valid email id.";
        // document.getElementById("emailErrorlbl").style.color = "red";
        // document.getElementById("emailErrorlbl").style.fontWeight = "bold";
        return false;
    }




}

function validatePassword(){


    let password = document.getElementById("signupassword").value;
    let pswlbl = document.getElementById("passmsglbl");


    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    document.getElementById("passmsglbl").innerText = "";
    if (regexp.test(password)) {

        document.getElementById("passmsglbl").innerText = "";
        return true;
    }
    else {

        //alert(regexp.test(password));


        let msg = "Pasword not valid";
        let msglbl = document.getElementById("passmsglbl");

        msglbl.innerText = msg;

        return false;
        // msglbl.style.color = "red";
        // msglbl.style.fontWeight = "bold";
       // validPass = false;
    }

}
function comparePassword(){
  if(document.getElementById("signupassword").value===document.getElementById("repeatPassword").value){

      return true;
  }
  else{

    document.getElementById("repeatpassmsglbl").innerText="Passwords not equal"
    return false;
  }


}


function nameRequired(){


    if(document.getElementById("fname").value==="")
    {

        document.getElementById("fnamemsglbl").innerText="Name required"
         return false;
    }
    else
       return true;
}
function usernameRequired(){


    if(document.getElementById("userName").value==="")
    {

        document.getElementById("msglbl").innerText="User Name required"
         return false;
    }
    else
       return true;
}


document.getElementById("fname").addEventListener("focus", function(){

    document.getElementById("fnamemsglbl").innerText="";
});
document.getElementById("email").addEventListener("focus", function(){

document.getElementById("emailmsglbl").innerText="";
});
document.getElementById("userName").addEventListener("focus", function(){

document.getElementById("msglbl").innerText="";
});
document.getElementById("signupassword").addEventListener("focus", function(){

document.getElementById("passmsglbl").innerText="";
});
document.getElementById("repeatPassword").addEventListener("focus", function(){

document.getElementById("repeatpassmsglbl").innerText="";
});




