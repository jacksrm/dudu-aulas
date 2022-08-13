//variáveis e constantes
// let nome = 'Eduardo';
// let sobrenome: string = ' Viana';
// let nomeCompleto = `${nome} ${sobrenome}`;

// console.log(nomeCompleto);

// const ednaldo: string = 'banido';

// console.log(ednaldo);

// let idade: number = 26;

//tipos de dados
// console.log('String:', typeof 'String');
// console.log('Number:', typeof 10);
// console.log('Boolean:', typeof false);
// console.log('Array:', [] instanceof Array);
// console.log('Object:', {} instanceof Object);
// console.log('Null:', null);
// console.log('Undefined:', undefined);

// type MeuArrayDiferenciado = (number | string | boolean | undefined)[];
//Array
// const arrayAleatorio = ['Jacson', 8, true, undefined, [1, 2, 3], {}];
// const array: MeuArrayDiferenciado = ['jacson', 12];
//estruturas de controle
//if else else if switch/case

// const a = 10;
// const b = 5;

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

// if (a < b) {
//   // console.log('A é menor que b');
// } else if (a === b) {
//   // console.log('A é igua a B');
// } else {
//   // console.log('A é maior que B');
// }

//switch/case
// 1 - Iniciar;
// 2 - Carregar;
// 3 - Configurações;
// 4 - Sair;
// let opcao: string = '';

// const form = document.getElementById('form-opcoes');
// form?.addEventListener('submit', (ev) => {
//   ev.preventDefault();

//   const input = <HTMLInputElement>document.getElementById('number');

//   opcao = input?.value;

//   switch (opcao) {
//     case '1':
//       console.log('Iniciar Jogo');
//       break;
//     case '2':
//       console.log('Carregando Save');
//       break;
//     case '3':
//       console.log('Abrindo Configurações');
//       break;
//     case '4':
//       console.log('Saindo');
//       break;
//     default:
//       console.log('Opção inválida');
//       break;
//   }
// });

//estruturas de repetição
// while

// let option = '';

// let menu = `
// 1 - Imprimir Olá.
// 2 - Imprimir Mundo.
// 3 - Imprimir Olá Mundo.
// Sair - Sair do programa.
// `;
// while (option !== 'Sair') {
//   const answer = prompt(menu);
//   switch (answer) {
//     case '1':
//       console.log('Olá\n');
//       break;
//     case '2':
//       console.log('Mundo\n');
//       break;
//     case '3':
//       console.log('Olá Mundo\n');
//       break;
//     case 'Sair':
//       console.log('Bye Bye\n');
//       option = 'Sair';
//       break;

//     default:
//       console.log('Opção Inválida!\n');
//       break;
//   }
// }

// let count = 0;
// while (count <= 10) {
//   console.log(count);
//   count += 1;
// }

// for
// for (let count = 0; count <= 10; count += 1) console.log(count);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let count = 0; count <= array.length - 1; count += 1) {
  if (array[count] % 2 === 0) console.log(array[count] * 5);
}
