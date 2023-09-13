//1. IF/else илэрхийлэл
let HaveVisa = true;

//Их хаалт доторх код нэр блок
if (HaveVisa === true) {
  console.log("Aylald garna");
} else {
  console.log("Gertee vld");
}
//2. True болно False утга
let varName = "name";
if (varName) {
  console.log("Хувьсагч утгатай байна.");
} else {
  console.log("Хувьсагч утгагүй байна.");
}
//3. Харьцуулах оператор
/*<, >, <=, >=*/
let age = 10;
if (age) {
  console.log("Та иргэний үнэмлэхээ шалгуулна уу.");
} else {
  console.log("Та төрсний гэрчилгээгээ шалгуулна уу.");
}
// ===, !==
let time = "13:00";
if (time === "13:00") {
  console.log("өдрийн завмарлага ");
} else {
  console.log("Ажлаа шаргуу хийх");
}
//4. else/if илэрхийлэл
let trafficLight = "Ногоон";
if (trafficLight === "Улаан") {
  console.log("Зогс");
} else if (trafficLight === "Шар") {
  console.log(" Анхаар");
} else if (trafficLight === "Ногоон") {
  console.log("Яв");
} else {
  console.log("Болгоомжил, Гэрлэнэ дохио ажиллагаагүй.");
}
//5. Логик оператор. &&(Аль аль нь үнэн байх), (Аль нэг нь үнэн байх)
let trafficLight01 = "Ногоон";
let pedestrian = "false";
if (trafficLight01 === "Ногоон") {
  console.log("Яв");
} else {
  console.log("Зогс");
}
//6. Switch илэрхийлэл
let stockName = "TTL";
switch (stockName) {
  case "SUU":
    console.log("Сүү ХК");
    break;
  case "GOV":
    console.log("Говь ХК");
    break;
  case "TTL":
    console.log("Таван толгой ХК");
    break;
  case "LEND":
    console.log("ЛендМН ББСХК");
    break;
  default:
    console.log("Тохиромжгүй утга");
    break;
}
//7. Ternary оператор
let HaveVisa01 = false;
if (HaveVisa01 === false) {
  console.log("Аялалд гарна");
} else {
  console.log("Гэртээ үлд");
}
HaveVisa01 ? console.log("Аялалд гарна") : console.log("Гэртээ үлд");
let balance = 10000;
balance > 5000
  ? console.log("Гүйлгээ хийх эрхтэй ")
  : console.log("Үлдэгдэл хүрэлцэхгүй байна");
//Функц
