const readlineSync = require('readline-Sync')
console.log("digite um numero:\n")
let num1 = readlineSync.question("-")
console.log("digite um numero:\n")
let num2 = readlineSync.question("-")
console.log("digite um numero:\n")
let num3 = readlineSync.question("-")
num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)
if(num1 > num2 && num1 > num3 && num2 > num3) {
  console.log(`em ordem crescente seria ${num3},${num2},${num1}`)
}
else if(num1 > num2 && num1 > num3 && num3 > num1) {
  console.log(`em ordem crescente seria ${num2},${num3},${num1}`)
}
if(num1 < num3 && num1 < num2 && num3 > num2) {
  console.log(`em ordem crescente seria ${num1},${num2},${num3}`)
}
if(num1 < num3 && num1 < num3 && num3 < num2) {
  console.log(`em ordem crescente seria ${num1},${num3},${num2}`)
}
if(num1 > num3 && num2 > num3 && num1 < num2) {
  console.log(`a ordem crescente é ${num3},${num1},${num2}`)
}

//num1,num2,num3 c
//num3,2,1 c
//1,3,2  c 
//3,1,2 c 