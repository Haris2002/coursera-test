/*var msg="in global";
console.log("global: message=" + msg);
function a(){
    var msg="inside a";
    console.log(msg);
    b();
    c();
    function b(){
        console.log(msg);
    }
}
function c(){
    console.log(msg);
}
a();*/
/*var a={
    x:5
};
var b=a;
console.log(b);
console.log(a);
b.x=10;
console.log(a);
console.log(b);*/
/*function test(){
    console.log(this);
    this.myname="Haris";
}
console.log(this);
test();
console.log(window.myname);*/
/*function Circle(radius){
    this.radius=radius;
    console.log(this.radius);
    //this.getArea=function(){
        //return Math.PI * Math.pow(this.radius,2);
   // };

}
Circle.prototype.getArea=function(){
    return Math.PI * Math.pow(this.radius,2);
};

var myCircle=new Circle(10);
console.log(myCircle);*/
/*var Circle={
    radius:10,
    getArea: function(){
        var self=this;
        console.log(this);
        var inc_radius =function(){
            self.radius=20;//this refers to global object
        };
        inc_radius();
        console.log(this.radius)
        return Math.PI * Math.pow(this.radius,2);
    }
};
console.log(Circle.getArea());
*/
/*var a=new Array();
a[0]="haris";
a[1]=2;
a[2]=function(name){
    console.log(name);
};
a[3]={course:"html css js"};
a[2]("Haris Murugan");
var b=[{name:"Haris"},"Murugan"];
console.log(b[0].name);
for(var i=0;i<b.length;i++){
    console.log(b[i]);
}
b.game="Football";
for( var j in b){
    console.log(j);
    console.log(b[j]);
}*/
/*(function(name){
    console.log(name);
})("Haris Murugan");*/






