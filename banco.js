const readlineSync = require('readline-Sync')
console.log("insira o seu nome completo:\n")
const nome = readlineSync.question("-")
console.log("digite o saldo bancário do semestre:\n")
let saldo = readlineSync.question("-")
saldo = parseFloat(saldo)
if(saldo < 1000.00 )
  console.log(`a tarifa total será de R$ 25.00`)
 else if(1000.1 < saldo  && saldo < 2000.00)
 console.log(`a tarifa total será de R$ 20.00`)
else if(2000.1 < saldo && saldo < 3500.00)
console.log(`a tarifa total será de R$ 13.00`)
else if(saldo >= 3500.00)
console.log(`tarifa isenta.`)