const userOperations = {
    userList:[],     
    add(user){  
        this.userList.push(user);
    },
    save(){
        var json = JSON.stringify(userOperations.userList);  
         if(localStorage){
             localStorage.mydata=json;
         }
     }
}