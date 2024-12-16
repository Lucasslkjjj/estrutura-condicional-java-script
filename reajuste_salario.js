const readlineSync = require('readline-Sync')
console.log("OBS: NÃO DIGITAR USANDO VIRGULA OU ESPAÇO,PARA REPRESENTAR OS DECIMAIS FAVOR USAR PONTO.\n")
var salario = readlineSync.question("digite seu salario:\n")
salario = parseInt(salario)
if(salario <= 1500.00) {
 let reajuste = salario/2
  const salario_final = salario + reajuste
  console.log(`seu salário com o reajuste será:${salario_final}`)
}
else if(salario > 1500.00) {
  let reajuste = salario * 0.3
  const salario_final = salario + reajuste
  console.log(`seu salario com reajuste será de:${salario_final}`)
}
else {
console.log("erro! por favor verifique se digitou corretamente e usou ponto final ao invés de virgula.\n")
console.log("EXEMPLO DE COMO DIGITAR CORRETAMENTE: 1500.00 , 1897.55, 2000.00 , 980.OO")
}
  
