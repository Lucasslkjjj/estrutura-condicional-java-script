const readlineSync = require('readline-Sync')
console.log("digite a quantidade em reais para converter:\n")
let reais = readlineSync.question("- ")
console.log("escolha a moeda a ser convertida.")
console.log("1-Euro \n")
console.log("2-Libra Esterlina \n")
console.log("3-Dólar \n")
console.log("4-Iene \n")
let moeda = readlineSync.question("- ")
moeda = parseInt(moeda)
reais = parseFloat(reais)
let euro = 5.25754
let libra = 5.91632
let dolar = 4.73754
let iene = 0.0442286
if(moeda > 4 || moeda < 1) {
  console.log("numero incorreto!")
}
else if(moeda === 1) {
  let resultado = reais * euro
  console.log(`${reais} em Euro equivale a ${resultado.toFixed(2)}`)
}
else if(moeda === 2) {
  let resultado = reais * libra
  console.log(`${reais} equivale a ${resultado} libras.`)
}
else if(moeda === 3) {
  let resultado = reais * dolar
  console.log(`${reais} é igual a ${resultado.toFixed(2)} dolares`)
}
else if(moeda === 4) {
  let resultado = reais * iene
  console.log(`${reais} equivale a ${resultado.toFixed(2)} ienes`)
}