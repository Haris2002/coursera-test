/*console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);*/
document.addEventListener("DOMContentLoaded",
function(event){
    /*function sayHello(event){
        console.log(event);
        this.textContent="Said it"
        var name=document.getElementById("name").value;
        var message="<h2>Hello "+ name+"</h2>";
       // document.getElementById("content").textContent=message;
       document.getElementById("content").innerHTML=message;
       if(name==="student"){
           var title=document.querySelector("#title").textContent;
           title+="Hello";
           document.getElementById("title").textContent=title;
       }
    }
    document.querySelector("button").onclick=sayHello;
    document.querySelector("body").addEventListener("mousemove",
    function(event){
        if(event.shiftKey===true){
        console.log(event.clientX);
        console.log(event.clientY);
        }
    });*/
    document.querySelector("button").addEventListener("click",function(){
        /*var self=this;
        var name="";
        $ajaxUtils.sendGetRequest("../data/name.txt",function(request){//request is response from the server
            self.name=request.responseText;//request object holds the response from the server
            console.log(self.name);
            document.querySelector("#content").innerHTML="<h2>Hello "+self.name+"!";
        });
        console.log(self.name);*/
        $ajaxUtils.sendGetRequest("../data/jname.json",function(res){
            var message=res.firstname+" "+res.lastname;
            document.querySelector("#content").textContent=message;
        });
        
    });

});

//document.querySelector("button").addEventListener("click",sayHello);//passing the value of this function into this particular element.this in sayhello will point to containing object(button)
//document.querySelector("button").onclick=sayHello;