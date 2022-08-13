import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let option = '';

let menu = `
1 - Imprimir Olá.
2 - Imprimir Mundo.
3 - Imprimir Olá Mundo.
Sair - Sair do programa.
`;

while (option !== 'Sair') {
  rl.question(menu, (answer) => {
    switch (answer) {
      case '1':
        console.log('Olá\n');
        break;
      case '2':
        console.log('Mundo\n');
        break;
      case '3':
        console.log('Olá Mundo\n');
        break;
      case 'Sair':
        console.log('Bye Bye\n');
        option = 'Sair';
        break;

      default:
        console.log('Opção Inválida!\n');
        break;
    }
    rl.close();
  });
}
