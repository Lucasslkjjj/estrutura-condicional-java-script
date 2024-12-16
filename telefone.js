const readlineSync = require('readline-Sync')
console.log("digite o número do seu telefone:\n")
let numero = readlineSync.question("-")
console.log("OBS:tem que ser tudo junto e sem DDD\n")
numero = parseInt(numero)
console.log("agora selecione seu bairro:\n")
console.log("1- oeste \n ")
console.log("2- Centro")
console.log("3- Sul \n")
console.log("4- Bueno \n ")
console.log("5- Campinas \n")
let bairro = readlineSync.question("-")
bairro = parseInt(bairro)
if(bairro < 0 || bairro > 5)
console.log("erro! por favor verificar se digitou corretamente.")
let prefixo = numero / 10000
prefixo = parseInt(prefixo)
let existente = false
switch (bairro) {
  case 1:
    if(prefixo === 3223 || prefixo === 3225 || prefixo === 3212 ) {
      console.log(`o número ${numero} esta correto.`)
      existente = true
    }
      if(existente === false)
      console.log(`o número ${numero} está incorreto!`)
    break;
  case 2:
    if(prefixo === 3223 || prefixo === 3224 || prefixo === 3212) {
    console.log(`o numero ${numero} está correto.`)
    existente = true
    }
    if(existente === false)
    console.log(`o numero ${numero} está incorreto.`)
    break;
    case 3:
      if(prefixo === 3241 || prefixo === 3242 || prefixo === 3243 || prefixo === 3281) {
      console.log(`o numero ${numero} está correto.`)
      existente = true
      }
      if(existente === false)
      console.log(`o número ${numero} está incorreto.`)
      break;
      case 4:
        if(prefixo === 3251 || prefixo === 3285)
        console.log(`o número ${numero} está correto.`)
        existente = true
        if(existente === false)
        console.log(`o número ${numero} esta incorreto.`)
        break;
        case 5:
          if(prefixo === 3233 || prefixo === 3291){
          console.log(`o número ${numero} está correto.`)
          existente = true
          }
          if(existente === false)
          console.log(`o número ${numero} está incorreto.`)
          break;
  default:
    break;
}
