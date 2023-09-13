/*let arrayName = ["item1", "item2", "item3", "item4"];
console.log(arrayName);
let str = arrayName[0];
console.log(`Массивийн индекс 0 үед элемэнт ${str}`);
console.log(`Массивийн индекс 3 үед элемент нь ${arrayName[3]}`);

//массивын элемент утгыг өөрчлөх
let coffeeTypes = ["Латте", "мока", "Эспрессо"];
coffeeTypes[0] = "Каппучинор";
console.log(coffeeTypes);

//Length Шинж чанар, push() болон pop() арга
console.log(coffeeTypes);
console.log(coffeeTypes.length);
coffeeTypes.push("Каппучино", "Карамель");
console.log(coffeeTypes);
console.log(coffeeTypes.length);
console.log("Устгаж буй элемент:" + coffeeTypes.pop());
console.log(coffeeTypes);
console.log(coffeeTypes.length);
// let болон const массив
let arrayOne = [1, 2, 3, 4, 5];
arrayOne.pop();
console.log(arrayOne);
arrayOne = [10, 11, 12];
console.log(arrayOne);

const arrayTwo = ["Нэг", "Хоёр", "Гурав"];
arrayTwo.pop();
console.log(arrayTwo);
arrayTwo = [1, 2, 3];
console.log(arrayTwo);

//Массивын бусад арга
// join()-Массивын бүх элемент нэг тэмдэгт мөр болгон нэгтгэнэ
let array = ["Канад", "АНУ", "Мексик"];
console.log(array.join("-"));
console.log(array.join("->"));

//slice()-Өгөгдсөн эхлэл төгсгөлийн индексийн дагуу массивын элементүүдийг таслан авч шинэ массив болгон буцаана. Үндсэн массивд өөрслөлт орохгүй
let newArray = array.slice(1, 3);
console.log(newArray);
console.log(array);
//splice()-Өгөгдсөн байрлалд шинэ элемент нэмэх эсвэл байсан элементийг солино
array.splice(2, 0, "Монгол");
array.splice(2, 1, "Орос");

//shift()-Массивын эхний элементийг буцаана
let removedElement = array.shift();
console.log("Устгагдасан элемент:" + removedElement);
console.log(array);
*/
//unshift()-Массивын эхэнд нэг эсвэл олон элементийг нэмж, түүний дараах массив
let array = ["Канад", "АНУ", "Мексик"];
let newArraylen = array.unshift("Англи", "Хятад");
console.log(newArraylen);
console.log(array);
/*
// concat()-Хоёр болон түүнээс олон массивыг нэгтгэж шинэ массивыг буцаана. энэ арга нь үндсэн массив
let array1 = [1, 3, 4, 7];
let array2 = [2, 4, 5];
let mergedArray = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(mergedArray);
// sort()-массивын элементүүдийг эрэмбэлнэ. Эрэмбэлэлтийг анхдагч дараалал нь ЮНИКОД тэмдэгтийн дагуу байна.
array.sort();
console.log(array);
let intArray = [1, 25, 46, 5];
intArray.sort();
console.log(intArray);
*/
