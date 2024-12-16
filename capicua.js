const readlineSync = require('readline-Sync')
var numero = readlineSync.question("digite um numero de 4 digitos e irei verificar se ele possui a propriedade de capicua:\n");
numero = parseInt(numero)
var separacao = numero / 100
var inteiro_1 = parseInt(separacao)
var decimal = ((separacao - inteiro_1) * 100)
var inteiro_2 = parseInt(decimal)
var soma = inteiro_1 + inteiro_2
var final = soma*soma

if(final == numero) {
  console.log(`o número ${numero} possui a propriedade de capicua,pois ${inteiro_1} somando com ${inteiro_2} da ${soma} que elevando ao quadrado da ${final}`)
}
else if(final != numero){
  console.log(`o numero ${numero} nao possui a propriedade de capicua,pois ${inteiro_1} somado com ${inteiro_2} da ${soma} que elevado ao quadrado da o valor ${final}.`)
}
else{
  console.log("erro! por favor verificar se o numero tem 4 digitos.")
}