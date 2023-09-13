let calculatorIsOn = false;
const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log("Тооны машин унтарлаа");
  } else {
    console.log("Тооны машин аслаа");
    calculatorIsOn = false;
  }
};

//Параметр
const square = (inputNumber) => {
  console.log(inputNumber * inputNumber);
};

//Олон параметрт функц
const add = (value1, value2) => {
  const result = value1 + value2;
  console.log(result);
};

// Буцаах утга
const addReturn = (value1, value2) => {
  const result = value1 + value2;
  return result;
};

//Банкны хадгаламж
let income = 100000; //anhnii orlogo
let rate = 0.13; //hadgalamjiin khvv
const getSavings = (month) => {
  let result = income + rate * month + income;
  return result;
};
const getTax = (month) => {
  let tax = getSavings(month) * 0.1;
  return tax;
};
const totalSavings = (month) => {
  return getSavings(month) - getTax(month);
};
function max(value1, value2) {
  if (value1 > value2) {
    return value1;
  } else {
    return value2;
  }
}
const min = function min(value1, value2) {
  if (value1 > value2) {
    return value2;
  } else {
    return value1;
  }
};
const avrage = (value1, value2) => {
  return (value1 + value2) / 2;
};
