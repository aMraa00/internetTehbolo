var a = "Hello!";
first();
a();

function first(){
    var b = " HI";
    second();
    function second(){
        var c = "Hey!";
        third();
    }
}
function third(){
    var d = "John";
    console.log(a+b+c+d);
}
