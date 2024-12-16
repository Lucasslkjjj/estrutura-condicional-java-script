const readlineSnyc = require('readline-Sync')
var depedentes = readlineSnyc.question("insira o número de depedentes:\n")
var depedentes = parseInt(depedentes)
var imposto_pago = readlineSnyc.question("insira o imposto formal pago pela ultima vez:\n")
var imposto_pago = parseFloat(imposto_pago)
const salario = readlineSnyc.question("insira o seu salario:\n")
var salario = parseFloat(salario)
var salario_minimo = 1412
var salario_minimo = parseInt(salario_minimo)
if(salario >= salario_minimo * 12) {
  let porcentoo = salario * 0.2
  let porcento = parseFloat(porcentoo)
  let extraa = porcento * 0.04
  let extra = parseFloat(extraa)
  let imposto_brutoo = porcento + extra
  let imposto_bruto = parseFloat(imposto_brutoo)
  let descontoo = 300 * depedentes
  let desconto = parseFloat(descontoo)
  let imposto_liquidoo = imposto_bruto - desconto
  let imposto_liquido = parseFloat(imposto_liquidoo)
  let finall = imposto_pago - imposto_liquido
  let final = parseFloat(finall)
  if(final < 0) 
  console.log(`imposto a pagar: ${final}`)
  else if (final > 0) 
  console.log(`imposto a receber:${final}`)
}
 else if (salario >= salario_minimo * 5) {
  let porcentoo = salario * 0.08
  let porcento = parseFloat(porcentoo)
  let adicionall = porcento * 0.04
  let adicional = parseFloat(adicionall)
  let imposto_brutoo = porcento + adicional
  let imposto_bruto = parseFloat(imposto_brutoo)
  let descontoo = depedentes * 300
  let desconto = parseFloat(descontoo)
   let imposto_liquidoo = imposto_bruto - desconto
   let imposto_liquido = parseFloat(imposto_liquidoo)
  let finall = imposto_pago - imposto_liquido
  let final = parseFloat(finall)
   if(final< 0) 
  console.log(`imposto a pagar:${final}`)
  else if(final>0)
  console.log(`imposto a receber:${final}`)
}
if (salario < salario_minimo*5)
console.log("você nao paga nada ao imposto de renda.")