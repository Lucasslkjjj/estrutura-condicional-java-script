const readlineSync = require('readline-Sync')
console.log("insira um número inteiro:\n")
var num1 = readlineSync.question("-")
var num1 = parseInt(num1)
console.log("insira um segundo número inteiro:\n")
var num2 = readlineSync.question("-")
var num2 = parseInt(num2)
console.log("digite a operação básica que deseja fazer:\n")
console.log( "1- adição(+) \n")
console.log("2- subtração(-) \n")
console.log("3- multiplicação(*) \n")
console.log("4- divisão(/) \n")
var operacao = readlineSync.question("-")
var operacao = parseInt(operacao)
if(operacao <= 0 || operacao > 4)
console.log("erro! por favor digite o numero da operacao.")
if(operacao === 1) {
  let resultado = num1 + num2
  console.log(`o resultado da soma é ${resultado}`)
}
if(operacao === 2) {
  let resultado = num1 - num2
  console.log(`o resultado da subtração é ${resultado}`)
}
if(operacao === 3) {
  let resultado = num1 * num2
  console.log(`o resultado da multiplicação é ${resultado}`)
}
if(operacao === 4 ) {
  let resultado = num1 / num2
  console.log(`o resultado da divisão é ${resultado}`)
}