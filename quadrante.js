const readlineSync = require('readline-Sync')
console.log("insira a coordenada x:\n")
let x = readlineSync.question("-")
console.log("insira a coordenada y:\n")
let y = readlineSync.question("-")
x = parseFloat(x)
y = parseFloat(y)
if(x > 0 && y > 0){
  console.log(`as coordenadas ${x},${y} pertencem ao primeiro quadrante.`)
}
 else if(x < 0 && y > 0) {
  console.log(`as coordenadas ${x},${y} pertencem ao segundo quadrante.`)
}
else if(x < 0 && y < 0) {
  console.log(`as coordenadas ${x},${y} pertencem ao terceiro quadrante.`)
}
else if(x > 0 && y < 0) {
  console.log(`as coordenadas ${x},${y} pertencem ao quarto quadrante.`)
}
else{
  console.log("erro de digitação! tente novamente.")
}