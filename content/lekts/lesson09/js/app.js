var lastname = "aMar";
console.log(lastname);
console.log(window.lastname);
console.log(globalThis.lastname);
window.alert("Windows: Энэ бол глюбаль хэсгээс дуудаж байна.");
function huniiMedeelel(){
    var firstname = "Нараа";
    console.log("Энэ хүний овог:" + lastname +" "+firstname);
    globalThis.alert("GlobalThis: Одоо бол функц дотроос дуудаж байна.");
}