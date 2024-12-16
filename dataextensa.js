const readlineSync = require('readline-Sync')
console.log("insira a data em numeros e utilizando /")
let data = readlineSync.question("- ")
let quebra = data.split("/")
const dias = {
  1 : "um",2:"dois",3:"três",4:"quatro",5:"cinco",6:"seis",7:"sete",8:"oito",9:"nove",10:"dez",11:"onze",12:"doze",13:"treze",14:"quatorze",15:"quinze",16:"dezesseis",17:"dezessete",18:"dezoito",19:"dezenove",20:"vinte",21:"vinte e um",22:"vinte e dois",23:"vinte e três",24:"vinte e quatro",25:"vinte e cinco",26:"vinte e seis",27:"vinte e sete",28:"vinte e oito",29:"vinte e nove",30:"trinta",31:"trinta e um"
}
const meses = {
  1:"janeiro",2:"fevereiro",3:"março",4:"abril",5:"maio",6:"junho",7:"julho",8:"agosto",9:"setembro",10:"outubro",11:"novembro",12:"dezembro"
}
const ano =  {
 1:"um",2:"dois",3:"três",4:"quatro",5:"cinco",6:"seis",7:"sete",8:"oito",9:"nove",10:"dez",20:"vinte",30:"trinta",40:"quarenta",50:"cinquenta",60:"sessenta",70:"setenta",80:"oitenta",90:"noventa",100:"cem"
}
let dia = dias[quebra[0]]
let mes = meses[quebra[1]]
let anol = quebra[2]
anol = parseInt(anol) //2024
let ano_final = anol - 2000 // 24
ano_final = String(ano_final) //"24"
let final_ano = ano_final.split("") // "2" e "4"
let unidade = final_ano[1] //"4"
unidade = parseInt(unidade) //4
ano_finall = parseInt(ano_final) //24
let dezena = ano_finall - unidade  // 24 - 4 = 20
let unidade_final = ano[unidade] //quatro
let dezena_final = ano[dezena] // vinte
dia = String(dia)
mes = String(mes)
dezena_final = String(dezena_final)
unidade_final = String(unidade_final)
console.log(`${dia} de ${mes} de dois mil e ${dezena_final} ${unidade_final}`)