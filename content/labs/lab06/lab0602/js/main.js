//бодлого
for(var i=2; i<=10000; i++){
    if(anhniiTooMon(i) === true)
    console.log(i + " тоо бол анхны тоо мөн");
}
function anhniiTooMon(too){
    var anhniiTooMon =true;
    for(var x=2; x<too; x++){
        if(too% x===0){
            anhniiTooMon=false;
            break;
        }
    }
}