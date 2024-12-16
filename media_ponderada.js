
var readlineSync = require('readline-Sync');
var nome = readlineSync.question("insira o nome completo do aluno: \n");
var nota_1 =readlineSync.question("insira a primeira nota: \n");
var nota_2 = readlineSync.question("insira segunda nota:\n");
var nota_3 = readlineSync.question("insira a terceira nota: \n");
nota_1 = parseInt(nota_1);
nota_2 = parseInt(nota_2);
nota_3 = parseInt(nota_3);
if((nota_1 > nota_2) && (nota_1 > nota_3)) {
   let media = ((nota_1 * 4) + (nota_2 * 3) + (nota_3 * 3)) / 10
  let resultado = (media>=5 ? "aprovado":"reprovado")
  console.log("o aluno " + nome + " teve a media ponderada de " + media + " e foi " + resultado)
}
else if ((nota_1 < nota_2) && (nota_3 < nota_2)) {
  let media = ((nota_2 * 4) + (nota_1 * 3) + (nota_3 * 3)) / (4 + 3 + 3)
  let resultado = (media >=5 ? "aprovado" : "reprovado")
  console.log("o/a aluno/aluna " + nome + " teve a media ponderada de " + media + " e foi" + resultado)
}
else if ((nota_1 < nota_3) && (nota_2 < nota_3)) {
   var media = ((nota_3 * 4) + (nota_1 * 3) + (nota_2 * 3)) / (4 + 3 + 3)
   var resultado = (media >= 5 ? "aprovado" : "reprovado")
  console.log("o/a aluno/a " + nome + " teve uma media ponderada de " + media + " e foi " + resultado)
}
else {
  console.log("erro! por favor verifique se você digitou corretamente")
}

