//Глюбаль муж
const taxOfBook = 0.1; //Татвар
let Book = "Миний тунгалагшил"; // Номын нэр
let price = 15000; //Үндсэн үнэ
function getPrice() {
  return price + price * taxOfBook;
}
console.log(`${Book} - Номын нэр:` + getPrice());

//Локал муж
function calculatePrice() {
  let une = 20000;
  return une * 0.01 + une;
}
console.log(`nomii vne: ${calculatePrice()}`);
//consle.log('Номын үнэ: '+une);

function dayOrNigth() {
  const dayTime = true;
  let light = "On";
  if (dayTime) {
    let light = "off";
    console.log(light); //off
  }
  console.log(light); //On
}
dayOrNigth();
//console.log(light);
