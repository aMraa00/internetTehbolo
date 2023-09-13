{
  let book = {
    name: "Java programming",
    author: "aMraa",
    page: 10,
    coverType: ["zuulun", "hatuu"],
  };
  console.log(book["coverType"]);
  console.log(book.author);
  console.log(book["name"]);
  book["type"] = "zohiol";
  book.price = 25000;
  console.log(book.type);
  console.log(book["price"]);
}

let book2 = {
  name: "Java Script",
  author: "aMraa",
  page: 10,
  coverType: ["zuulun", "hatuu"],
  price: 20000,
  getSize() {
    return this.name + "nomiin hemjee B5";
  },
};

let country = {
  asia: "Mongol",
  europe: "German",
  africa: "Aljir",
};
let selectedCountry;
let randomValue = 2; //math.floor(math.ramdom() * 3) + 1;
switch (randomValue) {
  case 1:
    selectedCountry = "asia";
    break;
  case 2:
    selectedCountry = "europe";
    break;
  case 3:
    selectedCountry = "africa";
    break;

  default:
    selectedCountry = "tohiromjgvi utga";
    break;
}
console.log(country[selectedCountry]);
