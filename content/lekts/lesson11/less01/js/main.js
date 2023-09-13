// console.log(b);

// var b = 12;

// console.log(b);

//function
function x(a){
    a();
    console.log("x бол функц, параметр нь "+ a);
}

var y = function(){
    console.log("y is functiooon expression...");
}
var z = function(){
    console.log("z bol bas neg function");
}
x(z);