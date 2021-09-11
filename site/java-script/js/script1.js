(function(window){
    var name="Haris";
    function sayHello(){
        console.log("Hello"+name);
    }
    window.sayHello=sayHello();
})(window);