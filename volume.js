const readlineSync = require('readline-Sync')
console.log("insira a figura que queira calcular:\n")
console.log("1- cone \n")
console.log("2- cilindro \n")
console.log("3- esfera \n")
var figura = readlineSync.question("-")
var figura = parseInt(figura)
if(figura <= 0 || figura > 3 || typeof(figura) != "number") {
  console.log("erro! por favor digite corretamente.")
}
if(figura === 1) {
   console.log("insira a altura do cone:\n")
   let altura = readlineSync.question("-")
   console.log("insira o raio do cone:\n")
   let raio = readlineSync.question("-")
   altura = parseFloat(altura)
    raio = parseFloat(raio)
   let raioquad = raio * raio
   let alturaquad = altura * altura
   let volume = (3.14 * raioquad * altura) / 3
   let raiz_area = (raioquad + alturaquad) ** (1/2)
   let area = 3.14 * raio * raiz_area
   console.log(`o volume do cone é ${volume} e a area é ${area}`)
}
 else if(figura === 2) {
  console.log("insira a altura do cilindro:\n")
  let altura = readlineSync.question("-")
   altura = parseFloat(altura)
  console.log("insira o raio do cilindro:\n")
  let raio = readlineSync.question("-")
   raio = parseFloat(raio)
  let volume = 3.14 * (raio * raio) * altura
  let area = 2 * 3.14 * raio * altura
  console.log(`o volume do cilindro é ${volume} enquanto a area é ${area}`)
}
else if(figura === 3) {
  console.log("digite o raio da esfera:\n")
  let raio = readlineSync.question("-")
  raio = parseFloat(raio)
  let volume = 4/3 * 3.14 * (raio ** 3)
  let area = 4 * 3.14 * (raio ** 2)
  console.log(`o volume da esfera é ${volume},enquanto a da area é de ${area}`)
}