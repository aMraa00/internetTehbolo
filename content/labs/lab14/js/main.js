//ES5
function printAge(){
    console.log(arguments);
    var arr = Array.prototype.slice.call(arguments);

    console.log(arr);
    arr.forEach(function(e){
        console.log(e + " ond tursun hvnii nas: " + (2020 - e));
    });
}

printAge(1990, 2005, 1996);

function printAge6(gender, ...years){
    years.forEach(el => console.log(el + "онд төрсөн" + gender +"hvnii nas: " + (2020 - e)))
}