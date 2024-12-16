const readlineSync = require('readline-Sync')
var a = readlineSync.question("digite o lado A do triangulo,onde A tem que ser o maior numero:\n")
var a = parseInt(a)
var b = readlineSync.question("digite o lado B do triangulo:\n")
var b = parseInt(b)
var c = readlineSync.question("digite o lado C de um triangulo:\n")
var c = parseInt(c)
var quad_a = a*a
if(a*a == b*b + c*c) {
  console.log(`os numeros ${a},${b},${c},formam um triangulo retangulo`)
}
else if(a*a > b*b + c*c) {
console.log(`os numeros ${a},${b},${c},formam um triangulo obtusangulo`)
}
else if(a*a < b*b + c*c) {
  console.log(`os numeros ${a},${b},${c},formam um triangulo acutangulo`)
}
else {
  console.log("o triangulo nao forma um triangulo retangulo,obtusangulo e acutangulo.")
}