function hello(){
    console.log("hello функц ажиллаа");
    console.log(this);
    console.log(window);
    console.log(globalThis);
}

var p1 = {
    name: "boldoo",
    printThis: function(){
        console.log(this);
        function secondFunction(){
            console.log("secondFunction ажиллаа: " + this);
        }
        secondFunction();
    }
}
var p2 = {
    name: "Naraa",
}
p2.printThis = p1.printThis;

p1.printThis();
p2.printThis();