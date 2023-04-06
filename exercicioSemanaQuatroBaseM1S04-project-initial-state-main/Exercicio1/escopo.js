// [M01S04] Ex 1 - Os 3 principais escopos do Javascript

console.log('Estou no escopo global');

function functionScope() {
  console.log('Estou no escopo de função');
}

if (true) {
  console.log('Estou em um escopo de bloco');
}

functionScope();