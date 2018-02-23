var length;
var visible=false;
var name;
window.addEventListener("load",()=>{
    document.querySelector("#login").style.display="none";
    document.querySelector("#name").addEventListener("keyup",validate.checkname);
    document.querySelector("#userid").addEventListener("keyup",validate.checkid);
    document.querySelector("#password").addEventListener("keyup",validate.checkpassword);
    document.querySelector("#address").addEventListener("keyup",validate.checkaddress);
    document.querySelector("#registerbtn").addEventListener("click",adduser);
    document.querySelector("#loginbtn").addEventListener("click",userajax);
    document.querySelector("#movetologin").addEventListener("click",movetologin);
    document.querySelector("#movetoregister").addEventListener("click",movetoregister);
    document.querySelector(".cartbtn").addEventListener("click",showcartlist);
});

function movetologin(){
    utils.showdiv("login");
    utils.hidediv("register");
}
function movetoregister(){
    utils.hidediv("login");
    utils.showdiv("register");
}

function adduser(){
    var name = document.querySelector("#name").value;
    var userid = document.querySelector("#userid").value;
    var password = document.querySelector("#password").value;
    var address = document.querySelector("#address").value;
    var user = new User(name,userid,password,address);
    if(validate.checkname() && validate.checkid() && validate.checkpassword() && validate.checkaddress()){
        userOperations.add(user);
        userOperations.save();
        movetologin();
    }
}

 function userajax(){
    utils.ajax(checkuser,"http://localhost:3000/users.json");
 }

function checkuser(json){
    var object=JSON.parse(json);
    object.username.forEach((currentuser)=>{
    var user=document.querySelector("#loginuserid").value;
    var password=document.querySelector("#loginpassword").value;
    if((user.localeCompare(currentuser.username))==0){
        if((password.localeCompare(currentuser.password))==0){
         getmenu();
        utils.hidediv("login");
        name = currentuser.firstname +" "+currentuser.lastname; 
        }
    }
    else{
        document.querySelector("#alertbox").innerHTML = "INVALID USER";
    }
    });
}

function getmenu(){
    utils.ajax(printmenu,"http://localhost:3000/menu.json")
}

function printmenu(json){
    var user = document.querySelector("#loginuserid").value;
    document.querySelector(".initial").innerHTML="Welcome " + name ;
    document.querySelector(".initial").className="welcome";
    document.querySelector(".mycart").style.display="block";    
    var object=JSON.parse(json);
    object.mainmenu.forEach((currentmenu)=>{
        let btn=document.createElement("button");
        btn.innerHTML=currentmenu;
        btn.className="btnstyle";
        btn.setAttribute("btnid",currentmenu);
        btn.addEventListener("click",submenu); 
        document.querySelector("#mainmenu").appendChild(btn);
    });
}

function submenu(){
    var btn=event.srcElement;
    var id= btn.getAttribute("btnid");
    var url= "http://localhost:3000/"+id+".json";
    utils.ajax(Printsubmenu.printsubmenu,url);
}

function showcartlist(){
    visible?utils.hidediv("cartlist"):utils.showdiv("cartlist");
    visible=!visible;
}
