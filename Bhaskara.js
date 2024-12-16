var readlineSync = require('readline-Sync')
var a = readlineSync.question("insira o coeficiente a da função:\n")
var b = readlineSync.question("insira o coeficiente b da função:\n")
var c = readlineSync.question("insira o coeficiente c da função:\n")
var delta = b*b - 4 * a * c
if(delta < 0) {
  console.log("o seu delta é: " + delta + " porém como é negativa,não existe raiz,ou seja,sao raizes imaginarias")
}
else if (delta == 0) {
 let raiz_delta = delta ** 0.5
  const raiz_1 = (-b + raiz_delta ) / 2
  const raiz_2 = (-b - raiz_delta) / 2
  console.log("a primeira raiz é: " + raiz_1 + " enquanto a segunda raiz é: " + raiz_2 + " portanto,sua raiz é unica.")
}
else if (delta > 0) {
  let raiz_delta = delta ** 0.5
  const raiz_1 = (-b + raiz_delta ) / 2
  const raiz_2 = (-b - raiz_delta) / 2
  console.log("a primeira raiz é: " + raiz_1 + " e a segunda raiz é: " + raiz_2 + " como as duas raizes sao existentes e delta>1,as raizes sao denominadas raizes distintas")
}
else {
  console.log("erro!verifique os numeros e tente novamente")
}

