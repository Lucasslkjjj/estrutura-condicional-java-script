"use strict"
var readlineSync = require('readline-Sync');
var num = readlineSync.question("insira um número: \n");
 var resultado=((num % 2) ? "impar":"par");
console.log("o número "+ num + " é " + resultado);