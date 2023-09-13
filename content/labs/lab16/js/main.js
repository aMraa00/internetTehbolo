// let dict = new Map();
// dict.set(1, 'one');
// dict.set(2, 'two');
// dict.set(9, 'nine');
// dict.set('language', 'хэл');
// dict.set('car', 'машин');
// dict.set('sun', 'нар');
// dict.set('аав', 'fayher');

// dict.delete('language');

// console.log(dict.get(2));
// dict.forEach((value, key)=> console.log(key+ "==>" + value));

// for (let[a, b] of dict)
// {
//     console.log(a +' түлхүүрийн утга нь ' + b);
// }

// console.log(dict.size)

// console.log(dict.has('сар'));

let text = `гол гол гол аваад адах гол молекулын`;

//console.log(text);
//Бүх үгийг салгах аваад массивт хийе
let words = text.split(' ');

//Үг бүрээ Мар руу хийнэ
let myMap = new Map();
words.forEach(el => myMap.set(el, 1));

//Map ийн хэмжээг харна
console.log('Нийт давхардаагүй үгийн тоо: ' + myMap.size);