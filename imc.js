const readlineSync = require('readline-Sync')
console.log("insira o seu peso em kg:\n")
let kg = readlineSync.question("- ")
kg = parseFloat(kg)
console.log("insira sua altura:\n")
let altura = readlineSync.question("- ")
altura = parseFloat(altura)
let imc = kg / ((altura ** 2))

 if(imc < 20) {
  console.log("abaixo do peso ideal.")
}

else if(20 < imc && imc < 25) {
  console.log("peso ideal.")
}

else if(25 < imc && imc < 30) {
  console.log("excesso de peso.")
}

else if(30 < imc && imc < 35) {
  console.log("obesidade.")
}

else if(imc > 35) {
  console.log("obesidade mórbida.")
}