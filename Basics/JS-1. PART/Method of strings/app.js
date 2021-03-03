let value;



const FirstName= "Louis";
const Lastname= "Armstrong";

const langs="java, c++"

// value=FirstName+Lastname
// value=FirstName+ " " +Lastname

// value= "Mehmet"+" " +value

// value = FirstName.length; //stringin icerisinde kac karakter oldugunu
//gosterir

// value=FirstName.concat("  ",Lastname)
// value=FirstName.toUpperCase
// value=FirstName.toLowerCase

// // son karakteri bulma
// value=FirstName[FirstName.length-1]

// // index of kacinci index oldugunu soyler, eger yoksa -1 gosterir

// value=FirstName.indexOf("L")

// //Char AT

value=FirstName.charAt("2");

//Split

value=langs.split(",");
//Replace

value=langs.replace("Python","CSS");

//includes
value=langs.includes("java")








console.log(value);
