try {
console.log("Программ ажиллаж эхэллээ.");
var x = prompt("За та 1-100 хооронд тоо оруулна уу");
console.log("Таны оруулсан тоо: " + x);
 computeNewSpead();
}catch(error){
    if(error.message === "prompt is not defined"){
        console.log("Уучлаарай, энэ кодыг броузерийн ажиллуулна.");
    }else{
        console.log("Алдаа : " + error);
    }
}