const readlineSync = require('readline-Sync')
console.log("insira o nome do fazendeiro:\n")
const nome = readlineSync.question("- ")
console.log("insira a área de acres que deseja pulverizar:\n")
let acres = readlineSync.question("- ")
acres = parseFloat(acres)
console.log("selecione o serviço:\n")
console.log("1- pulverização contra ervas daninhas :\n")
console.log("2- pulverização contra gafanhotos:\n")
console.log("3- pulverização contra broca \n")
console.log("4- pulverização contra tudo acima \n")
let tipo = readlineSync.question("- ")
tipo = parseInt(tipo)

if(tipo > 4 || tipo < 1) {
  console.log("erro de digitação! por favor insira um número valido.") //certo
}

if(tipo === 1) {
  let preco_a_pagar = acres * 5.00
  if(preco_a_pagar > 1750 && acres > 300) {
    let desconto = preco_a_pagar - (preco_a_pagar * 0.1)
    let finall1 = desconto -(desconto * 0.05)
    console.log(`total a pagar é ${finall1}`)
  } //certo
  
  else if(preco_a_pagar < 1750 && acres > 300) {
   
    let finall = preco_a_pagar - (preco_a_pagar *0.05)
    console.log(`o total a pagar será de ${finall.toFixed(2)}`) // certo
  }
  
  else if( preco_a_pagar < 1750 && acres < 300) {
    console.log(`o preço a pagar será de ${preco_a_pagar.toFixed(2)}`) //certo
  }
}

else if(tipo === 2) {
  let preco_a_pagar = acres * 10
  if(preco_a_pagar > 1750 && acres > 300) {
    let desconto = preco_a_pagar - (preco_a_pagar * 0.1)
    let finals = desconto - (desconto * 0.05)
      console.log(`o preço a pagar será de ${finals.toFixed(2)}`)
  } 
  
  else if( preco_a_pagar > 1750 && acres < 300)  {
      let desconto = preco_a_pagar - (preco_a_pagar * 0.1)
      console.log(`preço total a pagar é ${desconto.toFixed(2)}`)
    }
    
  else if(preco_a_pagar < 1750 && acres > 300) {
    let finall2 = preco_a_pagar - (preco_a_pagar * 0.05)
    console.log(`o total a pagar será de ${finall2.toFixed(2)}`) //certo
  }
  else if(preco_a_pagar < 1750 && acres < 300) {
      console.log(`o total a pagar será de ${preco_a_pagar.toFixed(2)}`)
    }
}

else if(tipo === 3) {
  let preco_a_pagar = acres * 15
  
  if(preco_a_pagar > 1750 && acres < 300) {
    let desconto = preco_a_pagar - (preco_a_pagar * 0.1)
    console.log(`o total a pagar será de ${desconto.toFixed(2)}`)
    
    if(preco_a_pagar > 1750 && acres > 300) {
      let descontoo = desconto - (desconto * 0.05)
      console.log(`o total a pagar será de ${descontoo.toFixed(2)}`)
    }
  }
  
  else if(preco_a_pagar < 1750 && acres > 300) {
    let finall3 = preco_a_pagar - (preco_a_pagar * 0.05)
    console.log(`o total a ser pago será de ${finall3.toFixed(2)}`)
  }
  
  else if(preco_a_pagar < 1750 && acres < 300) {
    console.log(`o total a pagar será de ${preco_a_pagar.toFixed(2)}`)
  }
}

else if(tipo === 4) {
  let preco_a_pagar = acres * 25
  
  if(preco_a_pagar > 1750 && acres > 300) {
    let desconto = preco_a_pagar - (preco_a_pagar * 0.1)
    let final = desconto - (desconto * 0.05)
    console.log(`total a pagar ${final}`)
    
  }
  
  else if(preco_a_pagar > 1750 && acres < 300) {
    console.log(`total a pagar ${desconto}`)
  }
  
  else if(preco_a_pagar < 1750 && acres > 300) {
    let descontoo4 = preco_a_pagar - (preco_a_pagar * 0.05)
    console.log(`total a pagar ${descontoo4}`)
  }
  
  else if(preco_a_pagar < 1750 && acres < 300) {
    console.log(`total a pagar ${preco_a_pagar}`)
  }
}