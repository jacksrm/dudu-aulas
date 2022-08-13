"use strict";
// Basicamente funções são escopos de código que são guardados com um rótulo.
function imprimirArray(array) {
    for (let numero of array) {
        console.log(numero);
    }
}
const chamada = ['Dudu', 'Jacson', 'Davisson', 'Jonathan'];
const somar = (a, b) => a + b;
const somaDeAMaisB = somar(10, 20);
console.log(somaDeAMaisB);
chamada.forEach((nome, ordemChamada, listaDeChamada) => {
    console.log('Nome:', nome, 'Ordem Na Chamada:', ordemChamada + 1, listaDeChamada);
});
