const readlineSync = require('readline-Sync')
var num = readlineSync.question("insira um numero e irei verificar se possui uma raiz quadrada perfeita:\n")
var num = parseInt(num)
var raiz = num ** (1/2)
const final = (typeof raiz === "number" && Number.isInteger(raiz) ? `o numero ${num} possui uma raiz perfeita que é ${raiz}`:`o numero ${num} nao possui uma raiz quadrada perfeita.`)
console.log(final)
/*if(tipo === "number" && Number.isInteger(raiz))
console.log(`o numero ${num} possui uma raiz perfeita que é ${raiz}`)
else
console.log(`o numero ${num} nao possui raiz quadrada perfeita`)
*/