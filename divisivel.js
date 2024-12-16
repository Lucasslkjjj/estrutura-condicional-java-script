var readlineSync = require('readline-Sync')
var num = readlineSync.question("insira o numero e o codigo ira dizer se é divisivel por 3 e 5: \n");
var num = parseInt(num);
 var resultado = ((num % 3 == 0) && (num % 5 == 0) ? "\n é divisivel por 3 e 5" : "\n nao é divisivel pelos dois ao mesmo tempo");
 console.log(resultado)