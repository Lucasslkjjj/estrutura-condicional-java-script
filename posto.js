const readlineSync = require('readline-Sync')
console.log("digite um caractere valido que represente o tipo de combustivel que quer:\n")
console.log("A- alcool \n")
console.log("D- diesel \n")
console.log("G- gasolina \n ")
let tipo = readlineSync.question("-")
console.log("digite a quantidade de litros que deseja:\n")
let litros = readlineSync.question("-")
litros = parseFloat(litros)
if(tipo === "A") {
  let preco = 1.799
  let pagar = litros * preco
  console.log(`o total a pagar será de R$ ${pagar.toFixed(2)}`)
}
else if(tipo === "D") {
  let preco = 1.899
  let pagamento = litros * preco
  console.log(`o pagamento será de R$ ${pagamento.toFixed(2)}`)
}
else if(tipo === "G") {
  let preco = 2.799
  let total = litros * preco
  console.log(`o total será de R$ ${total.toFixed(2)}`)
}
else 
console.log("caractere não listado detectado! por favor tente novamente.")