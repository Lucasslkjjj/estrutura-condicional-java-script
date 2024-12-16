const readlineSync = require('readline-Sync')
console.log("insira o preço do DVD:\n")
var preco = readlineSync.question("-")
console.log("insira 1 se o DVD for comum e 2 se for em lançamento:\n")
var categoria = readlineSync.question("-")
console.log("digite o numero do dia da semana:\n")
console.log(" 1- segunda-feira \n") //promocao
console.log(" 2- terça-feira \n") // promocao
console.log(" 3- quarta-feira \n") //normal
console.log(" 4- quinta-feira \n") //promocao
console.log(" 5- sexta-feira \n") //normal
     console.log(" 6- sabado \n") //normal
     console.log(" 7- domingo \n") //normal
var dia = readlineSync.question("-")
var dia = parseInt(dia)
var preco = parseFloat(preco)
var categoria = parseInt(categoria)
if(categoria > 2) {
  console.log("erro nos digitos da categoria! por favor tente novamente.")
}
if(dia > 7) {
  console.log(`erro! o digito ${dia} não esta presente na lista,por favor insira novamente.`)
}
if(categoria === 1) {
  if(dia === 1 || dia === 2 || dia === 4) {
     let desconto = preco * 0.4
     let preco_desconto_aplicado = preco - desconto
     console.log(`o preço do DVD será de:${preco_desconto_aplicado}`)
  }
  else if(dia === 3 || dia === 5 || dia === 6 || dia === 7) {
    console.log(`nada foi aplicado,o preço continuará sendo ${preco}`)
  }
}
if (categoria == 2) {
  if(dia === 1 || dia === 2 || dia === 4) {
     let desconto = preco * 0.4
     let preco_desconto_aplicado = preco - desconto
     let acrescimo = preco_desconto_aplicado * 0.15
     let preco_desconto_acrescimo_aplicado = preco_desconto_aplicado + acrescimo
     console.log(`o preço final do DVD será de ${preco_desconto_aplicado.toFixed(2)}`)
  }
  else if(dia === 3 || dia === 5 || dia === 6 || dia === 7) {
    let adicional = preco * 0.15
    let preco_acrescimo = preco + adicional
    console.log(`o preço final do DVD será de ${preco_acrescimo.toFixed(2)}`)
  }
  
}
