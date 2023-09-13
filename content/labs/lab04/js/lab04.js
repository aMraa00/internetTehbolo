let zuirUg = [
  "Хүн",
  "хичээвэл",
  "заяа",
  "дагана",
  "эрхийг",
  "сурахаар",
  "бэрхийг",
  "хий",
];
console.log(zuirUg.length);
zuirUg.pop();
console.log(zuirUg.length);
zuirUg.push("сур");
zuirUg[3] = "хичээнэ";
zuirUg.shift(zuirUg);
zuirUg.unshift("эзэн");
zuirUg.splice(4, 4, "монгол", "ардын", "зүйр", "цэцэн", "үг");
zuirUg.splice(4, 0, "-");
console.log(zuirUg.join(" "));
