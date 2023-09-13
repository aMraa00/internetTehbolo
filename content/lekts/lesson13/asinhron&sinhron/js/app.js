const first = () => {
  console.log("Нэгдүгээр цункц: Сайн байна уу");
  second();
  console.log("Нэгдүгээр цункц: Баяртай");
};
const second = () => {
  setTimeout(() => {
    console.log(`Хоёрдугаар функц: Асинк кодоос мэндчилж байна...`);
  }, 2000);
};
first();
