const readlineSync = require('readline-Sync')
console.log("Digite o nome do aluno:\n")
let nome = readlineSync.question("-")
console.log("digite a primeira nota do aluno:\n")
let nota1 = readlineSync.question("-")
console.log("digite a segunda nota do aluno:\n")
let nota2 = readlineSync.question("-")
console.log("digite a terceira nota do aluno:\n")
let nota3 = readlineSync.question("-")
nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)
let media_exercicios = (nota1 + nota2 + nota3) / 3
let media = (nota1 + nota2 * 2 + nota3 * 3 + media_exercicios) / 7
if(9.0 < media && media <= 10.0) {
  const conceito = "A"
  let aprovado = true
  console.log(`o(a) aluno(a) ${nome} teve as notas de ${nota1},${nota2},${nota3},tendo uma media de notas ${media_exercicios.toFixed(2)} e um total de media de aproveitamento de ${media.toFixed(2)}.Tendo um conceito de ${conceito}.`)
  console.log("SITUAÇÃO FINAL: APROVADO(A)")
}
else if(7.5 < media && media <= 9.0 ) {
  const conceito = "B"
  let aprovado = true
  console.log(`o(a) aluno(a) ${nome} teve as notas de ${nota1},${nota2},${nota3},tendo uma media de notas ${media_exercicios.toFixed(2)} e um total de media de aproveitamento de ${media.toFixed(2)}.Tendo um conceito de ${conceito}`)
  console.log("SITUAÇÃO FINAL: APROVADO(A)")
}
else if(6.0 < media && media <= 7.5) {
const conceito = "C"
  let aprovado = true
  console.log(`o(a) aluno(a) ${nome} teve as notas de ${nota1},${nota2},${nota3},tendo uma media de notas ${media_exercicios.toFixed(2)} e um total de media de aproveitamento de ${media.toFixed(2)}.Tendo um conceito de ${conceito}`)
  console.log("SITUAÇÃO FINAL: APROVADO(A)")
}
else if(4.0 < media && media <= 6.0) {
const conceito = "D"
  let aprovado = false
  console.log(`o(a) aluno(a) ${nome} teve as notas de ${nota1},${nota2},${nota3},tendo uma media de notas ${media_exercicios.toFixed(2)} e um total de media de aproveitamento de ${media.toFixed(2)}.Tendo um conceito de ${conceito}`)
  console.log("SITUAÇÃO FINAL:REPROVADO(A)")
}
else if(media <= 4.0) {
  const conceito = "E"
  console.log(`o(a) aluno(a) ${nome} teve as notas de ${nota1},${nota2},${nota3},tendo uma media de notas ${media_exercicios.toFixed(2)} e um total de media de aproveitamento de ${media.toFixed(2)}.Tendo um conceito de ${conceito}`)
  console.log("SITUAÇÃO FINAL: REPROVADO(A)")
}
