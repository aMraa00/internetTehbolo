// Байгуулагч функц
class book{
    constructor(name, author){
        this._name = name;
        this._author = author;
    }
    get name(){
        return this._name
    }
    get author(){
        return this._author;
    }
    getInfo(){
        return this.author + "зохиогчийн " + this.name + "ном";
    }
}
// Тохиолдол
const harry_potter = new book("Харри Поттер ба философийн чулуу", "Ж.К.Роулинг");
const web = new book("Веб хөгжүүлэлтийн үндэс","Т.Буяндэлгэр");
console.log(harry_potter._name);
console.log(harry_potter._author);

console.log(web._name);
console.log(web._author);

//Класс аргууд getter, setter

// Удамшил (...бол...юм) 
// extends- түлхүүр үгийг ашиглан удамшуулах үйлдэл хийнэ.
class AudioBook extends book{
    constructor(name, author, len, size){
        super(name, author);
        this._len = len;
        this._size = size;
    }
    get lenght(){
        return this._len;
    }
    get size(){
        return this._size;
    }
    static lenghtToHour(){
        let h, m;
        if(this._len !==null){
            h= Math.floor(this._len/60);
            m = this.len%60;
        }
        return h + " цаг " + m + " минут ";
    }
}
const mongolians = new AudioBook("Монголын түүх","Д.Өлзийбаатар","457","4000");
console.log(mongolians.name);
console.log(mongolians.author);

console.log(AudioBook.lenghtToHour());





// Статик аргууд
 