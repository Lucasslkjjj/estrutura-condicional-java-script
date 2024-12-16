const readlineSync = require('readline-Sync')
const nome = readlineSync.question("insira o nome do posto:\n")
var consumo = readlineSync.question(`insira a quantidade do consumo do posto ${nome}:\n`)
var consumo = parseFloat(consumo)
var litro = 4.95
if(consumo <= 50000) {
  let aumento = litro * 0.2
  const preco_litro = litro + aumento
  console.log(`o preço do litro no posto ${nome} será de ${preco_litro}`)
}
else if(consumo > 50000) {
  let aumento = litro * 0.12
  const preco_final = litro + aumento
  console.log(`o preço do litro no posto ${nome} será de ${preco_final.toFixed(1)}`)
}
else{
  console.log("erro! por favor verifique se digitou corretamente e tente novamente.")
}