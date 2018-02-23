const utils={
    ajax(fn,url){
        var xmlhttprqst=new XMLHttpRequest();
        xmlhttprqst.open("GET",url);
        xmlhttprqst.onreadystatechange=function(){
            if(xmlhttprqst.readyState==4 && xmlhttprqst.status==200){
               fn(xmlhttprqst.responseText);
            }
        }
        xmlhttprqst.send(null);
    },
    
    hidediv(id){
        document.querySelector("#"+id).style.display="none";
    },
    
    showdiv(id){
        document.querySelector("#"+id).style.display="block";
    }
}

