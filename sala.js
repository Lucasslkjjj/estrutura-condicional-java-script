const readlineSync = require('readline-Sync')
console.log("insira o nome do aluno:\n")
let nome = readlineSync.question("-")
let letras = nome.split("")
let final = letras[0]
let letras_1 = ["A","B","C","D","E","F","G","H","I","J","K"]
let letras_2 = ["L","M","N"]
let letras_3 = ["M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
if(letras_1.includes(final)) {
console.log("sala 101")
}
else if(letras_2.includes(final)) {
console.log("sala 102")
}
else if(letras_3.includes(final)){
console.log("sala 103")
}