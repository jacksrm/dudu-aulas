"use strict";
//variáveis e constantes
let nome = 'Eduardo';
let sobrenome = ' Viana';
let nomeCompleto = `${nome} ${sobrenome}`;
// console.log(nomeCompleto);
const ednaldo = 'banido';
// console.log(ednaldo);
let idade = 26;
//Array
const arrayAleatorio = ['Jacson', 8, true, undefined, [1, 2, 3], {}];
const array = ['jacson', 12];
//estruturas de controle
//if else else if switch/case
const a = 10;
const b = 5;
// true false
// igual ==
// console.log('A igual a B', a == b);
// estritamente igual ===
// console.log('A estritamente igual a B', a === b);
// diferente !=
// console.log('A diferente de B', a != b);
// estritamente diferente !==
// console.log('A estritamente diferente de B', a !== b);
// maior que >
// console.log('A maior que B', a > b);
// menor que <
// console.log('A menor que B', a < b);
// maior ou igual >=
// console.log('A maior ou igual que B', a >= b);
// menor ou igual<=
// console.log('A menor ou igual que B', a <= b);
// E (AND)
// OU (OR)
// NÃO (NOT)
// e (&&)                 | ou (||)                | not (!)
// true && true = true    | true || true = true    | !true = false
// true && false = false  | true || false = true   | !false = true
// false && true = false  | false || true = true
// false && false = false | false || false = false
if (a < b) {
    // console.log('A é menor que b');
}
else if (a === b) {
    // console.log('A é igua a B');
}
else {
    // console.log('A é maior que B');
}
//switch/case
// 1 - Iniciar;
// 2 - Carregar;
// 3 - Configurações;
// 4 - Sair;
let opcao = '';
const form = document.getElementById('form-opcoes');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const input = document.getElementById('number');
    opcao = input === null || input === void 0 ? void 0 : input.value;
    switch (opcao) {
        case '1':
            console.log('Iniciar Jogo');
            break;
        case '2':
            console.log('Carregando Save');
            break;
        case '3':
            console.log('Abrindo Configurações');
            break;
        case '4':
            console.log('Saindo');
            break;
        default:
            console.log('Opção inválida');
            break;
    }
});
//estruturas de repetição
