let lista = []

var entrada = require('readline-sync');
let opcao = 's';
while (opcao == 's') {
    let nome = prompt("Coloque o seu nome:");
    let idade = prompt("Coloque a sua idade:");
    if (idade >= 18) {
        if (lista.length < 100) {
            console.log("Cadastro permitido!!!");
            lista.push(nome);
        }
        else
            console.log("Cadastro não permitido, pois atingiu o limite máximo de 100.");
    }
    else {
        console.log("Cadastro não permitido pela idade.");
    }
    opcao = prompt("Cadastrar outro participante? (s ou n) ");
}

i = 1
while (i < lista.length) {
    conosole.log(lista);
    i++
}