const readlineSync = require('readline-Sync')
console.log("insira:\n")
console.log("1 para residencial \n")
console.log("2 para comercial \n")
console.log("3 para industrial \n ")
var tipo = readlineSync.question("-")
var tipo = parseInt(tipo)
if(tipo === 1) {
  let consumo = readlineSync.question("insira o consumo em m³:\n")
  const conta = 5 + (consumo * 0.05)
  console.log(`a conta a pagar é: ${conta}`)
}
else if(tipo === 2) {
  let consumo = readlineSync.question("insira o consumo em m³:\n")
  let resposta = parseFloat(consumo)
  let taxa = consumo - 80
  let resto = taxa * 0.25
  const conta =  resto + 500
  console.log(`a conta a pagar é:${conta}`)
}
else if(tipo === 3) {
  let consumo = readlineSync.question("insira o consumo em m³:\n")
  let resposta = parseFloat(consumo)
  let taxa = consumo - 100
  let exedente = taxa * 0.04
  const conta = exedente + 800
  console.log(`a conta total a pagar é:${conta}`)
}
else {
  console.log("erro! verifique se digitou corretamente os numeros.")
}
