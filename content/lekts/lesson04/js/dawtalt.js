//Тоолуурт давталт
let aimag = ["ховд", "Увс", "завхан", "Говь-Алтай", "Баян-Өлгий"];
for (let i = 0; i < aimag.length; i++) {
  console.log(aimag[i]);
}

for (let i = aimag.length - 1; i >= 0; i--) {
  console.log(aimag[i]);
} /*
//давхар давталт
let bookcase1 = ["миний тунгалагшил", "ану хатан"];
let bookcase2 = ["эх орон", "миний тунгалагшил"];
for (let i = 0; i < bookcase1.length; i++) {
  console.log("номын шүүгээ 1:" + bookcase2[i]);
  for (let j = 0; j < bookcase2.length; i++) {
    console.log("номын шүүгээ 1:" + bookcase2[i]);
  }
}
//white давталт
let words = "Улаанбаатар,Монгол улс";
let i = 0;
while ("" !== words[i]) {
  i++;
}

console.log("эхний үгийн урт: " + i);

//төгсгөлгүй давталт
while (true) {
  //...
}
//Итератор
//1. forEach() арга
aimag.forEach(function (statesItem) {
  console.log("=>" + aimag);
});
//2. map() арга
let baimag = aimag.map(function (aimagiig) {
  return aimagiig.toUpperCase();
});
console.log(baimag);
//3. filter()арга
let filterAimag = aimag.filter(function (param) {
  return param[0] == "3";
});
console.log(filterAimag);
//4.some() арга
let test = function (param) {
  return param[1] == "a";
};
console.log(aimag.some(test));

//5. every() арга
function checkLength(value) {
  return value.length > 5;
}
confirm.log(aimag.every(checkLength));

const kelvin = 295;
console.log("Кельвин &{kelvin} K");
let celsius = kelvin - 273;
console.log("Цельсийн градус & {celcius} C");
let fahrenheit = celsius * (9 / 5) + 32;
console.log("Фаренгейтийн градус &{Math.floor(fahrenheit)} F");
*/
