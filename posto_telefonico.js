const readlineSync = require('readline-Sync')
console.log("insira o nome do usuario:\n")
const nome = readlineSync.question("-")
console.log("insira o tempo da ligação em minutos:\n")
let tempo = readlineSync.question("-")
tempo = parseInt(tempo)

if(tempo < 3)
console.log(`o preço da ligação do usuario ${nome} será de 1.00`)
else if(tempo === 3) {
  let preco = 2.00 + 1.00
  console.log(`o preço da ligação do usuario ${nome} será de ${preco}`)
}
else if(tempo > 3) {
  let tempo_descontado = tempo - 3
  let tempoo = Math.floor(tempo_descontado / 5)
  let tempo_abaixo = tempo_descontado % 5
  let custo = tempoo * 2.15
  let custo_abaixo = tempo_abaixo * 0.85
  let taxa = 1.00 + 2.00 + custo + custo_abaixo
  console.log(`o tempo a ser pago pelo usuario ${nome} sera de ${taxa.toFixed(2)}`)
  
}
