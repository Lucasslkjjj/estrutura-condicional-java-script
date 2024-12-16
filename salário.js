const readlineSync = require('readline-Sync')
console.log("digite o nome do funcionário(a):\n")
const nome = readlineSync.question("-")
console.log("digite as horas extras trabalhadas:\n ")
let horas = readlineSync.question("-")
horas = parseInt(horas)
let salario_min = 545.00
let salario_horas_extras = horas * 10
let salario_bruto = 3 * salario_min + salario_horas_extras
if(salario_bruto > 1500.00) {
  let desconto = salario_bruto * 0.12
  let salario_inss = salario_bruto - desconto
  let final = salario_bruto - salario_inss
  if(salario_bruto > 2000.00) {
    let imposto = salario_inss * 0.2
    let salario_final = salario_bruto - imposto
    let salario_liquido = salario_bruto - salario_final
    console.log(`o salário do funcionario(a) ${nome} tem o salário bruto de ${salario_bruto} e um liquido de ${salario_liquido.toFixed(2)}.`)
  }
  else if(salario_bruto < 2000.00) 
    console.log(`o funcionário(a) ${nome} tem um salario bruto de ${salario_bruto} e um salario liquido de ${final.toFixed(2)}.`)
}
else if(salario_bruto < 1500.00)
  console.log(`o funcionário ${nome} possui um salário bruto de ${salario_bruto} e um salário liquido de ${salario_bruto}.`)



















