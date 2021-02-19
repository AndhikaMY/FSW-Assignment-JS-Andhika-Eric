let numbers = [20, 30, 40, 50, 60, 70];

// Nomer 1
console.log(
  Math.max(...numbers)
)
console.log(
  Math.min(...numbers)
)
// (...) meng-copy paste seluruh variable yang ada didalam variable numbers ke dalam variable newNumber

// Nomer 2
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

// Nomer 3
var myDate = new Date();
var today = (myDate.getDate()) + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear();
var tomorrow = (myDate.getDate() + 1) + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear();
var yesterday = (myDate.getDate() - 1) + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear();
console.log("Hari Ini: ", today);
console.log("Besok: ", tomorrow);
console.log("Kemarin: ", yesterday);


// Nomer 4
let number = [20, 30, 40, 50, 60, 70];
let newNumber = number.map(n => n * 2 - 1);
console.log(newNumber.toString());

// let newNumber = [];
// for(i=0; i < 6; i++){
//      newNumber[i] = number[i] * 2 -1 ;
// }
// console.log(newNumber.toString());