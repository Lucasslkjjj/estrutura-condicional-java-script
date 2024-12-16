const readlineSync = require('readline-Sync')
console.log("digite a primeira nota:\n")
let nota1 = readlineSync.question("-")
nota1 = parseFloat(nota1)
console.log("digite a segunda nota:\n")
let nota2 = readlineSync.question("-")
nota2 = parseFloat(nota2)
console.log("digite a terceira nota:\n")
let nota3 = readlineSync.question("-")
nota3 = parseFloat(nota3)
console.log("digite o tipo de média que deseja calcular:\n")
console.log("1- média aritmética.\n")
console.log("2- média ponderada. \n")
console.log("3- média harmônica. \n")
console.log("4- média geométrica. \n ")
console.log("5- média quadrática. \n")
console.log("OBS: média ponderada dado a terceira nota com mais peso.\n")
let resposta = readlineSync.question("-")
resposta = parseInt(resposta)
if(resposta < 1 || resposta > 5) {
  console.log("erro! por favor digite o tipo da média corretamente.")
}
switch (resposta) {
  case 1:
    let media_art = (nota1 + nota2 + nota3) / 3
    console.log(`a média do aluno é de:${media_art.toFixed(2)}`)
    break;
  case 2:
    let media_pond = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (3 + 3 + 4)
    console.log(`a média ponderada do aluno é de ${media_pond.toFixed(2)}`)
    break;
    case 3:
      let media_har = 3/(1/nota1 + 1/nota2 + 1/nota3)
      console.log(`a média harmonica do aluno é de ${media_har.toFixed(2)}`)
      break;
      case 4:
        let media_geo = (nota1 * nota2 * nota3) ** (1/3)
        console.log(`a média geométrica do aluno é de ${media_geo.toFixed(2)}`)
        break;
        case 5:
          let media_quad = (nota1 ** 2 + nota2 ** 2 + nota3 ** 2) / 3
          let resultado = media_quad ** (1/2)
          console.log(`a média quadrática do aluno é de ${resultado.toFixed(2)}`)
          break;
  default:
    break;
}