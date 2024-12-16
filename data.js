const readlineSync = require('readline-Sync')
var dia = readlineSync.question("digite o numero do dia:\n")
var dia = parseInt(dia)
var mes = readlineSync.question("digite o numero do mes:\n")
var  mes = parseInt(mes)
var ano = readlineSync.question("digite o ano em numeros:\n")
var ano = parseInt(ano)
var valido = true
if(typeof mes === "number") 
if (mes > 12 || mes == 0) 
  console.log(`a data ${dia}/${mes}/${ano} é invalida`)
  var valido = true
if(dia > 31) {
console.log(`a data ${dia}/${mes}/${ano} é invalida`)
var valido = false
}
switch(mes) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
  if(dia > 31){
console.log(`a data ${dia}/${mes}/${ano} é invalida`)
var valido = false
break;
}
case 2:
  if(ano % 4 == 0 && ano % 100 == 0 && ano % 400 ==0 || ano % 4 == 0 && ano % 100 != 0) {
    if(dia > 29) {
      console.log(`a data ${dia}/${mes}/${ano} é invalida`)
      var valido = false
    }
  }
  else if(ano % 4 != 0 || ano % 4 == 0 && ano % 100 == 0 && ano % 400 != 0) {
    if(dia > 28) {
    console.log(`a data ${dia}/${mes}/${ano} é invalida`)
    var valido = false
    }
  }
  break;
   case 4: case 6 : case 9: case 11:
     if(dia > 30) {
       console.log(`a data ${dia}/${mes}/${ano} é invalida`)
       var valido = false
       break;
     }
              default:
              break;
}
if(valido == true) 
console.log(`a data ${dia}/${mes}/${ano} é valida.`)


