const readlineSync = require('readline-Sync')
console.log("insira o preço de entrada do carro:\n")
let inicial = readlineSync.question("-")
inicial = parseFloat(inicial)
console.log("o carro possui ar condicionado? :\n")
console.log("1-sim \n")
console.log("2- não \n")
let ar = readlineSync.question("-")
ar = parseInt(ar)
console.log("o carro possui vidro elétrico?\n")
console.log("1-sim\n")
console.log("2- não \n")
let vidro = readlineSync.question("-")
vidro = parseInt(vidro)
console.log("o carro possui pintura metálica?\n")
console.log("1-sim\n")
console.log("2- não \n")
let pintura = readlineSync.question("-")
pintura = parseInt(pintura)
console.log("o carro possui direção hidráulica?\n")
console.log("1-sim\n")
console.log("2- não \n")
let direcao = readlineSync.question("-")
direcao = parseInt(direcao)
let preco_ar = 1750
let preco_vidro = 1200
let preco_pintura = 800
let preco_direcao = 2000
 if(ar === 1 && vidro === 1 && pintura === 1 && direcao === 1) {
   const preco_final = inicial + preco_ar + preco_vidro + preco_pintura + preco_direcao
   console.log(`o preço final será do carro será de ${preco_final}`)
 }
 else if(ar !== 1  && vidro === 1 && pintura === 1 && direcao === 1) {
   const preco_2 = preco_vidro + preco_direcao + preco_pintura + inicial
   console.log(`o preço final do carro será de ${preco_2}`)
 }
 else if(ar !== 1 && vidro !== 1 && pintura === 1 && direcao === 1) {
   const preco_3 = inicial + preco_pintura + preco_direcao
   console.log(`o preço final será de ${preco_3}`)
 }
 else if(ar !== 1 && vidro !== 1 && pintura !==1 && direcao === 1 ) {
   const preco_4 = inicial + preco_direcao
   console.log(`o preço final será de ${preco_4}`)
 }
 else {
   console.log(`o preço sera o mesmo de fabrica que é ${inicial}`)
 }