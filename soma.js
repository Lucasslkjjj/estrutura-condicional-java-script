var readlineSync = require('readline-sync')
var num_1 = readlineSync.question("insira um numero:\n")
var num_2 = readlineSync.question("insira outro numero:\n")
var num_3 = readlineSync.question("insira um terceiro numero:\n")
var num_4 = readlineSync.question("insira um ultimo numero: \n")
num_1 = parseInt(num_1)
num_2 = parseInt(num_2)
num_3 = parseInt(num_3)
num_4 = parseInt(num_4)
if (num_1 > num_2 && num_1 > num_3 && num_1 > num_4) {
  const resultado = (num_2 + num_3 + num_4)
  console.log("a soma dos 3 numeros menores é: " + resultado)
}
else if (num_2 > num_1 && num_2 > num_3 && num_2 > num_4) {
  const resultado = (num_1 + num_3 + num_4)
  console.log("a soma dos 3 menores numeros é: " + resultado)
}
else if(num_3 > num_1 && num_3 > num_2 && num_3 > num_4){
  const resultado = (num_1 + num_2 + num_4)
  console.log("o resultado da soma dos 3 menores é:  " + resultado)
}
else if(num_4 > num_1 && num_4 > num_2 && num_4 > num_3) {
  const resultado = (num_1 + num_2 + num_3)
  console.log("a soma dos 3 menos numeros é: " + resultado)
}