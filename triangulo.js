const readlineSync = require('readline-Sync')
var lado_1 = readlineSync.question("digite um numero:\n")
var lado_2 = readlineSync.question("digite um segundo numero:\n")
var lado_3 = readlineSync.question("digite um terceiro numero:\n")
lado_1 = parseInt(lado_1)
lado_2 = parseInt(lado_2)
lado_3 = parseInt(lado_3)
const soma_1 = lado_1 + lado_2
const soma_2 = lado_2 + lado_3
const soma_3 = lado_1 + lado_3
if (soma_2 > lado_1 && soma_1 > lado_3 && soma_3 > lado_2) {
  if(lado_1 == lado_2 && lado_1 == lado_3 && lado_2 == lado_3) {
    console.log(`os numeros ${lado_1},${lado_2},${lado_3} formam um triangulo equilatero`)
  }
  else if(lado_1 == lado_2 && lado_1 != lado_3 || lado_1 == lado_3 && lado_1 != lado_2 || lado_2 == lado_3 && lado_2 != lado_1) {
console.log(`os numeros ${lado_1},${lado_2},${lado_3} formam um triangulo isosceles`)
  }
  else if(lado_1 != lado_2 && lado_1 != lado_3 && lado_2 != lado_3){
console.log(`os numeros ${lado_1},${lado_2},${lado_3} formam um triangulo escaleno`)
  }
}
else {
  console.log("os numeros nao formam um triangulo.")
}
/*


*/