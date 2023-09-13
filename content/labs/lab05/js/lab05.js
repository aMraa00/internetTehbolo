let workRuleWords = workRule.split(" ");
console.log(workRuleWords.length);
let betterWords = workRuleWords.filter(function (word) {
  return !weakWords.includes(word);
});
console.log(betterWords.join(" "));
let countNom = 0;
let countEne = 0;
workRuleWords.forEach((word) => {
  if (word.toLowercase() === "ном") countNom++;
  else if (word.toLowercase() === "энэ") countEne++;
});
console.log(`"ном" үгийн тоо: ${countNom}`);
console.log(`"энэ" үгийн тоо: ${countEne}`);
let sentenceCount = 0;
for (word of workRuleWords) {
  if (word[word.length - 1] === ".") sentenceCount++;
}
console.log(`Өгүүлбэрийн тоо: ${sentenceCount}`);
