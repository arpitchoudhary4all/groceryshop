const validate ={
    checkname(){
        length = document.querySelector("#name").value.length;
        var letters = /^[A-Z a-z]+$/;
        var input =document.querySelector("#name").value;  
        if(input.match(letters))  
        {  
            if(length==0){
                document.querySelector(".namealert").innerHTML = "CAN'T LEAVE THIS FIELD EMPTY";
            }
            else if(length<4){
                document.querySelector(".namealert").innerHTML = "INVALID NAME - MIN 4 CHARACTERS";
            }
            else{
                document.querySelector(".namealert").innerHTML = "";
                return true;
            }
        }  
        else  
        {  
            if(length==0){
                document.querySelector(".namealert").innerHTML = "CAN'T LEAVE THIS FIELD EMPTY";
            }
            else{
            document.querySelector(".namealert").innerHTML = "ONLY ALPHABETS ALLOWED";
            }
        }  
        
    },
    
    checkid(){
        length = document.querySelector("#userid").value.length;
        if(newuser.checking()){
            document.querySelector(".idalert").innerHTML = " USER WITH SAME ID EXIST";
            return false;
        }
        if(length==0){
            document.querySelector(".idalert").innerHTML = "CAN'T LEAVE THIS FIELD EMPTY";
        }
        if(length<6){
            document.querySelector(".idalert").innerHTML = "INVALID ID - MIN 6 CHARACTERS";
        }
        else{
            document.querySelector(".idalert").innerHTML = "";
            return true;
        }
    },
    
    checkduplicate(json){
        var object=JSON.parse(json);
        object.username.forEach((currentuser)=>{
        var user=document.querySelector("#userid").value;
        var password=document.querySelector("#password").value;
        if((user.localeCompare(currentuser.username))==0){
            alert("USER WITH SAME NAME ALREADY EXISTS");
            return true;
        }
        else{
            return false; 
        }
        }); 
    },
    
    checkpassword(){
        length = document.querySelector("#password").value.length;
        if(length==0){
            document.querySelector(".passwordalert").innerHTML = "CAN'T LEAVE THIS FIELD EMPTY";
        }
        if(length<4){
            document.querySelector(".passwordalert").innerHTML="WEAK PASSWORD";
            document.querySelector(".passwordalert").style.color="red";
        }
        if(length>4 && length<7){
            document.querySelector(".passwordalert").innerHTML="AVERAGE PASSWORD";
            document.querySelector(".passwordalert").style.color="yellow";
        }
        if(length>=10){
            document.querySelector(".passwordalert").innerHTML="STRONG PASSWORD";
            document.querySelector(".passwordalert").style.color="green";
            return true;
        }
    },
    
    checkaddress(){
        length = document.querySelector("#address").value.length;
        if(length==0){
            document.querySelector(".addressalert").innerHTML = "CAN'T LEAVE THIS FIELD EMPTY";
        }
        if(length<10){
            document.querySelector(".addressalert").innerHTML="PROVIDE COMPLETE ADDRESS";
        }
        else{
            document.querySelector(".addressalert").innerHTML="";
            return true;
        }
    }
}