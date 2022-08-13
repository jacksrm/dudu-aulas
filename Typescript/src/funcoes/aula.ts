// Basicamente funções são escopos de código que são guardados com um rótulo.

function imprimirArray(array: (string | number)[]) {
  for (let numero of array) {
    console.log(numero);
  }
}

const chamada = ['Dudu', 'Jacson', 'Davisson', 'Jonathan'];

// imprimirArray(chamada);

// const somar = (a: number, b: number) => {
//   return a + b;
// };

type SumFn = (a: number, b: number) => number;

const somar: SumFn = (a: number, b: number) => a + b;

const somaDeAMaisB = somar(10, 20);

console.log(somaDeAMaisB);

chamada.forEach((nome, ordemChamada, listaDeChamada) => {
  console.log(
    'Nome:',
    nome,
    'Ordem Na Chamada:',
    ordemChamada + 1,
    listaDeChamada,
  );
});
