const readlineSync = require('readline-Sync')
console.log("por favor,digite seu nome:\n")
let nome = readlineSync.question("-")
console.log("digite sua idade:\n")
let idade = readlineSync.question("-")
idade = parseInt(idade)
if(idade < 5)
console.log("nenhuma categoria definida.")
if(idade === 5 || idade <= 7) {
  let categoria = "infantil A"
  console.log(`${nome} de idade ${idade} pertence a categoria ${categoria}`)
}
 else if(idade === 8 || idade <= 10 ) {
   let categoria = "infantil B"
   console.log(`${nome} de idade ${idade} pertence a categoria ${categoria}`)
 }
 else if(idade === 11 || idade <= 13 ) {
   let categoria = "juvenil A"
   console.log(`${nome} de idade ${idade} pertence a categoria ${categoria}`)
 }
 else if(idade === 14 || idade <= 17 ) {
   let categoria = "juvenil B"
   console.log(`${nome} de idade ${idade} pertence a categoria ${categoria}`)
 }
 else if(idade >= 18){
   let categoria = "senior"
   console.log(`${nome} de idade ${idade} pertence a categoria ${categoria}`)
 }
