// uploadImage(() =>
//   console.log("Upload хийгдэж дууслаа. Базд амжилттай хадгаллаа.")
// );
// console.log("Хойд солонгосын ерөнхийлөгч ...");
// console.log("Онигоо харагдана...");

// function uploadImage(fn) {
//   setTimeout(fn, 3000);
// }

function getRecipe() {
  setTimeout(() => {
    const ids = [12, 334, 1, 45, 786];
    console.log(ids);
    setTimeout(
      (id) => {
        const jor = {
          name: "Цуйван",
          author: "Өсөхбаяр",
        };
        console.log(jor);

        setTimeout((zohiogch) => {
          const nextJor = {
            name: "Тахианы шөл",
            author: "Өсөхбаяр",
          };
          console.log(nextJor);
        }, 2000);
      },
      2000,
      ids[0]
    );
  }, 1000);
}
console.log("App ажиллаж эхэллээ...");
getRecipe();
