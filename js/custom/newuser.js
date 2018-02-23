const newuser={
    checking(){
        utils.ajax(this.checkduplicate,"http://localhost:3000/users.json");
    },
    checkduplicate(json){
        var object=JSON.parse(json);
        object.username.forEach((currentuser)=>{
        var user=document.querySelector("#userid").value;
        if((user.localeCompare(currentuser.username))==0){
            alert("USER WITH SAME NAME ALREADY EXISTS");
            return false;
        }
        else{
            return true; 
        }
        }); 
    }
}