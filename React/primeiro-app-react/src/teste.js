const pessoas = [
  { nome: 'Eduardo', idade: 80 },
  { nome: 'Jacson', idade: 26 },
  { nome: 'Pedro', idade: 34 },
];

console.log(pessoas.map((pessoa) => `<h2>${pessoa.nome}</h2>`));
