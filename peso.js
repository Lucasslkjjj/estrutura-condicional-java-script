const readlineSync = require('readline-Sync')
console.log("insira o seu sexo:\n")
console.log("1- Masculino \n")
console.log("2- feminino \n")
let sexo = readlineSync.question("-")
sexo = parseInt(sexo)
if(sexo !== 1 && sexo !== 2 )
console.log("caractere invalido detectado!")
console.log("insira sua altura:\n")
let altura = readlineSync.question("-")
altura = parseFloat(altura)
if(sexo === 1) {
  const peso = 72.7 * altura - 58
  console.log(`o peso ideal seria de ${peso.toFixed(2)}`)
}
else{
  const kg = 62.1 * altura - 44.7
  console.log(`o peso ideal seria de ${kg.toFixed(2)}`)
}