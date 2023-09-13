const { yellow } = require("color-name");

// Nodelist
const boxes = document.querySelectorAll('.box');

let arr = [...boxes];
arr.forEach(el => el.style.backgroundColor = 'red');

change(...boxes);

function change(a, b, c){
    a.style.backgroundColor = 'green';
    b.style.backgroundColor = 'red';
    c.style.backgroundColor = 'yellow';
}

let interpretators = ["php", "perl", "javascript", "python", "typescript"];
let compilers = ["java", "c", "c#"];

let languages = [...interpretators, "assember", ...compilers];
console.log(languages);
