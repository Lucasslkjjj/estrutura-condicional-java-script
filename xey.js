const readlineSync=require('readline-Sync')
const x = readlineSync.question("digite um numero X e falarei um valor Y:\n")
if(x < 1){
const y = x
console.log(`o valor de y é ${y},pois x<1`)
}
else if(x == 1){
  const y = 0
  console.log(`o valor de y é ${y},pois x=1`)
}
else if(x > 1){
  const y = x*x
  console.log(`o valor de y é ${y},pois x>1`)
}