
document.getElementById("loginbtn").addEventListener("click",(event)=>{
    
    let pswv=validatePassword();
    let userName=usernameRequired();
    console.log(pswv+" "+userName)
    if(pswv&&userName){
    
         console.log("checking true");
       // document.getElementById("loginform").submit();
    }
    else{
        console.log("checking....");
       // document.getElementById("register").disabled=true;
        event.preventDefault();
    
        
    }
    
    
    
    });
    
    
    
    function validatePassword(){
    
    
        let password = document.getElementById("inputPassword").value;
        let pswlbl = document.getElementById("passwordErrorlbl");
    
    
        let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    
        document.getElementById("passwordErrorlbl").innerText = "";
        if (regexp.test(password)) {
    
            document.getElementById("passwordErrorlbl").innerText = "";
            return true;
        }
        else {
    
            //alert(regexp.test(password));
    
    
            let msg = "Password not valid";
            let msglbl = document.getElementById("passwordErrorlbl");
    
            msglbl.innerText = msg;
    
            return false;
            // msglbl.style.color = "red";
            // msglbl.style.fontWeight = "bold";
           // validPass = false;
        }
    
    }
    
    
    
    function usernameRequired(){
    
    
        if(document.getElementById("Name").value==="")
        {
    
            document.getElementById("msglbl").innerText="User Name required"
             return false;
        }
        else
           return true;
    }
    
    
   
    document.getElementById("Name").addEventListener("focus", function(){
    
    document.getElementById("msglbl").innerText="";
    });
    document.getElementById("inputPassword").addEventListener("focus", function(){
    
    document.getElementById("passwordErrorlbl").innerText="";
    });
    
    
    
    