const getUserIChoice = (userlnput) => {
  let play = userlnput.toLowerCase();
  var choose;
  if (play === "хайч") {
    choose = "Хайч";
  } else if (play === "чулуу") {
    choose = "Чулуу";
  } else if (play === "даавуу") {
    choose = "Даавуу";
  } else {
    choose = "Таны сонголт буруу байна";
  }
  //console.log(choose);.
  return choose;
};
const getUserIIChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  var choose;
  switch (randomNumber) {
    case 0:
      choose = "Хайч";
      break;
    case 1:
      choose = "Чулуу";
      break;
    case 2:
      choose = "Даавуу";
      break;
    default:
      break;
  }
  return choose;
};
var playr01 = getUserIChoice("чулуу");
var playr02 = getUserIIChoice();
console.log(playr01 + " " + playr02);
var winner = "";

if (playr01 == playr02) {
  winner = "Хоёр тоглогч тэнцлээ";
}
if (playr01.toLowerCase() == "чулуу" && playr02.toLowerCase() == "хайч") {
  winner = "Тоглогч-01 яллаа";
}
if (playr01.toLowerCase() == "чулуу" && playr02.toLowerCase() == "даавуу") {
  winner = "Тоглогч-02 яллаа";
}
if (playr01.toLowerCase() == "даавуу" && playr02.toLowerCase() == "хайч") {
  winner = "Тоглогч-02 яллаа";
}
if (playr01.toLowerCase() == "даавуу" && playr02.toLowerCase() == "чулуу") {
  winner = "Тоглогч-01 яллаа";
}
if (playr01.toLowerCase() == "хайч" && playr02.toLowerCase() == "чулуу") {
  winner = "Тоглогч-02 яллаа";
}
if (playr01.toLowerCase() == "хайч" && playr02.toLowerCase() == "даавуу") {
  winner = "Тоглогч-01 яллаа";
}

console.log(winner);
