var total=0;
var grandtotal =0;
var flag = true;
const Printsubmenu={
    printsubmenu(json){
        var object=JSON.parse(json);
        document.querySelector("#submenu").innerHTML="";
        object.list.forEach((currentObject)=>{
            
        var br=document.createElement("br");
        var submenu=document.createElement("div");
        document.querySelector("#submenu").appendChild(submenu);
        var imgdiv=document.createElement("div");
        imgdiv.className="imgdiv";
        var datadiv=document.createElement("div");
        datadiv.className="datadiv";
        submenu.appendChild(imgdiv);
        submenu.appendChild(datadiv);
    
        var img=document.createElement("img");
        img.src=currentObject.imageurl;
        img.className="imgsize";
        imgdiv.appendChild(img);
    
        var name=document.createElement("span");
        name.innerHTML=currentObject.name;
        name.className="name";
        datadiv.appendChild(name);
    
        var price=document.createElement("span");
        price.innerHTML="Price : Rs "+currentObject.price+currentObject.type;
        price.className="price";
        datadiv.appendChild(price);
    
        var seller=document.createElement("span");
        seller.innerHTML="Seller : "+currentObject.seller;
        seller.className="seller";
        datadiv.appendChild(seller);

        var quantity=document.createElement("span");
        quantity.innerHTML="Quantity : "+currentObject.quantity;
        quantity.className="quantity";
        var initial =currentObject.quantity;
        datadiv.appendChild(quantity);
            
        var likes=document.createElement("button");
        likes.className = "likes";
        likes.innerHTML="Likes "+currentObject.rating;
        likes.addEventListener("click",()=>{
            currentObject.rating=currentObject.rating + 1;
            likes.innerHTML="Likes "+currentObject.rating;
        });
        datadiv.appendChild(likes);

        var order = document.createElement("span");
        order.className="order";
        var orderno= 0;
        order.innerHTML="Order : "+orderno;
        datadiv.appendChild(order);
        
        var add =document.createElement("button");
        add.className="add";
        add.innerHTML="+";
        add.addEventListener("click",()=>{
            currentObject.quantity=currentObject.quantity - 1;
            quantity.innerHTML="Quantity : "+currentObject.quantity;
            orderno =orderno + 1;
            order.innerHTML="Order : "+orderno; 
        });
        datadiv.appendChild(add);

        var sub =document.createElement("button");
        add.className="sub";
        sub.innerHTML="-";
        sub.addEventListener("click",()=>{
            if(currentObject.quantity<initial){
                currentObject.quantity=currentObject.quantity + 1;
                quantity.innerHTML="Quantity : "+currentObject.quantity;
                orderno = orderno -1;
                order.innerHTML="Order : "+orderno;
            }
        });
        datadiv.appendChild(sub);

        var addtocart=document.createElement("button");
        addtocart.innerHTML = '<img src="https://image.flaticon.com/icons/png/128/60/60992.png">&nbsp;&nbsp;BUY NOW'
        addtocart.className="addtocart";
        addtocart.addEventListener("click",()=>{
            var item= new Item(currentObject.name,currentObject.price,orderno);
            listOperations.add(item);
            var cartTable = document.querySelector("#carttable");
            var tr = cartTable.insertRow();
            var index = 0;
            for(var key in item){
            tr.insertCell(index).innerHTML = item[key];
            index++;
            }
            var td = tr.insertCell(index);;
            td.innerHTML= currentObject.price*orderno; 
            total = total +  currentObject.price*orderno; 
            grandtotal = grandtotal + ((currentObject.price*orderno)*1.1);
            if(flag){
                var place = document.createElement("button");
                place.innerHTML="PLACE ORDER";
                place.className="place";
                place.addEventListener("click",()=>{
                    var ttl = cartTable.insertRow();
                    var ttltd = ttl.insertCell();
                    ttltd.innerHTML="Total Is :";
                    ttl.insertCell();
                    ttl.insertCell();
                    var ttltd2 = ttl.insertCell();
                    ttltd2.innerHTML= total;
                    var grnd = cartTable.insertRow();
                    var grndtd = grnd.insertCell();
                    grndtd.innerHTML="Grand Total Is :";
                    grnd.insertCell();
                    grnd.insertCell();
                    var grndtd2 = grnd.insertCell();
                    grndtd2.innerHTML= parseInt(grandtotal);
                    alert("THANKS FOR PLACING ORDER");
                    setTimeout(() => {
                        print();
                    }, 1000);
                    document.querySelector(".place").style.display="none";
                });
                var mycart=document.querySelector("#cartlist");
                mycart.appendChild(place);
            }   
            flag =false;
            initial = currentObject.quantity;
            orderno=0;
            order.innerHTML="Order : "+orderno;   
        });
        datadiv.appendChild(addtocart);
        });
    }  
}