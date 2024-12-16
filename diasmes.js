const readlineSync = require('readline-Sync')
var mes = readlineSync.question("insira o mês em numero:\n")
var mes = parseInt(mes)
var ano = readlineSync.question("insira o ano:\n")
var ano = parseInt(ano)
if(mes == 1) 
var dias = 31
if(mes == 3) 
var dias = 31
if (mes == 4)
var dias = 30
if(mes == 5)
var dias = 31
if(mes == 6)
var dias = 30
if (mes == 7)
var dias = 31
if (mes == 8)
var dias = 31
if (mes == 9)
var dias = 30
if (mes == 10)
var dias = 31
if (mes == 11)
var dias = 30
if (mes == 12)
var dias = 31
if(ano % 4 == 0 && ano % 10 != 0) {
  if (mes == 2) 
    var dias = 29
}
else if (ano % 4 == 0 && ano % 10 == 0 && ano % 400 == 0) {
  if (mes == 2) 
    var dias = 29
}
else if(ano % 4 != 0 || ano % 4 == 0 && ano % 10 == 0 && ano % 400 != 1) {
  if (mes == 2) 
  var dias = 28
}
console.log(`o seu mes tem ${dias} dias no ano de  ${ano}`)

