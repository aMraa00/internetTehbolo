 var age = 230;

 function printAge(name, country, city, age){
     console.log(arguments);
     console.log(arguments[1] + " Улсын " + arguments[2] + " хотод амьдардаг " + name + " нь " + age + " настай. ");
 }
 printAge("Нараа", "Монгол", "Улаанбаатар", 18);