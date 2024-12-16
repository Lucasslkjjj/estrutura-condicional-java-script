const readlineSync = require('readline-Sync')
var numero = readlineSync.question("insira um numero de 5 digitos,e irei verificar se ele ao inverso é igual:\n")
var numero = parseInt(numero) //92929
var a = numero / 10000 //9,2929
var num1 = parseInt(a) //9
var b = a - num1 // 9,2929 - 9 = 0,2929
var ba = b * 10 // 2,929
var num2 = parseInt(ba) //2
var c = ba - num2 // 0,929
var ca = c * 10 // 9,29
var num3 = parseInt(ca)
var d = ca - num3 //0,29
var da = d * 10 //2,9
var num4 = parseInt(da) //2
//var e = da - num4 // 2,9 - 2 = 0,9
//var num5 = e * 10 //0,9.10 = 9
//var num5 = parseInt(num5) // 9
var e = da - num4 //2,9 - 2 = 0,9
var num5 = e * 10
var num5 = parseInt(num5)
num5++
var numstring1 = String(num1)
var numstring2 = String(num2)
 var numstring3 = String(num3)
 var numstring4 = String(num4)
 var numstring5 = String(num5)
 const resultado = numstring1 + numstring2 + numstring3 + numstring4 + numstring5
 const numero_string = String(numero)
 if(resultado == numero_string){
   console.log(`o numero ${numero} é um capicua,pois ao inverso da o mesmo numero que é ${resultado}`)
 }
 else {
   console.log(`o numero ${numero} nao é semelhante ao inverter,pois ao inverso fica ${resultado}`)
 }