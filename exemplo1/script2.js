let rlSync = require('readline-sync');

// Faz com que o usuario interaja com o terminal
let name = rlSync.question('Qual o teu nome\n');

console.log(`hello to world, ${name}`);
