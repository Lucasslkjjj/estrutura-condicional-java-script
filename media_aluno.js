"use strict"
var readlineSync = require('readline-Sync');
var media_1 = readlineSync.question("insira a primeira nota do aluno:\n");
media_1 = parseInt(media_1);
var media_2 = readlineSync.question("insira a segunda nota do aluno:\n");
media_2 = parseInt(media_2);
var media_3 = readlineSync.question("insira a terceira nota do aluno:\n");
media_3 = parseInt(media_3);
const media_final = ((media_1 + media_2 + media_3)/3)
if (media_final >= 6)
console.log("a media do aluno é " + media_final + " e o aluno está aprovado.");
else
console.log("a media do aluno é " + media_final + " e o aluno está reprovado.");
