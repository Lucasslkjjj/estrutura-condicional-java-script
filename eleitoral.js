const readlineSync = require('readline-Sync')
console.log("insira sua idade:\n")
let idade = readlineSync.question("-")
idade = parseInt(idade)
if(idade < 16)
console.log("não-eleitor.")
else if(idade === 16 || idade > 16 && idade < 18)
console.log(`eleitor-facultativo`)
else if(idade >= 18 && idade < 65)
console.log(`eleitor obrigatório.`)
else if(idade === 65 || idade > 65)
console.log(`eleitor-facultativo.`)
