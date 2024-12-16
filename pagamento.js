const readlineSync = require('readline-Sync')
console.log("insira o preço de etiqueta do produto:\n")
let preco = readlineSync.question("-")
console.log("insira a forma de pagamento:\n")
console.log("1- a vista,dinheiro ou cheque.\n")
console.log("2- a vista,cartão de crédito.\n")
console.log("3- parcelado em 2x sem juros.\n")
console.log("4- parcelado em 3x com juros.\n")
let forma = readlineSync.question("-")
preco = parseFloat(preco)
forma = parseInt(forma)
if(forma === 0 || forma > 4) 
  console.log("erro! opção de pagamento não listada. Por favor tente novamente.")
  else if(forma === 1) {
    let desconto = preco * 0.1
    let final = preco - desconto
    console.log(`desconto aplicado!o preço final será de ${final.toFixed(2)}`)
  }
  else if(forma === 2) {
    let desconto = preco * 0.05
    let final = preco - desconto
   console.log(`desconto aplicado! o preço final será de ${final.toFixed(2)}`)
  }
  else if(forma === 3) 
    console.log(`nenhum desconto aplicado! o preço será de ${preco}`)
  else if(forma === 4) {
    let juros = preco * 0.1
    let final = preco + juros
    console.log(`juros aplicado! o total será de ${final.toFixed(2)}`)
  }
