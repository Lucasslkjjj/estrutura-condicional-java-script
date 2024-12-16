console.log("ola mundo!");
const a=10
if(a==10){
  let b = 10;
  console.log(b)
}
var num1 = 5;
var num2 = 10;
var num3 = 7;
var num4 = 9;
var num5 = 0;
console.log(!(num1 < num2) || (num2 < num3) &&(num3 == num2))
console.log(!(!(num5<num3) && (num1 < num3) || (num4<num1) && !(num2>num1)))
var resultado = (num2%2 ? "impar" : "par")
console.log(resultado)
var res=(!(num2%2)? "par":"impar")
console.log(res)
var pessoa ="n"
status=(pessoa == "s" ? "tomou o remedio" : "nao tomou")
console.log(status)
if(num1 > 0) {
  console.log("seu numero é positivo")
}
else if(num>1){
  console.log("seu numero é maior que 1")
}
if(num1>10){
  console.log("seu numero é maior que 10")
}
else{
 console.log( "seu numero é maior que zero e menor que 10")
}
console.log("fim da estrutura condicional")
switch (num1) {
  case 1:
    console.log("teste")
    break;
  case 2:
    console.log("teste")
    break;
    case 5:
      console.log("seu numero é 5")
      break;
  default:
  break;
}