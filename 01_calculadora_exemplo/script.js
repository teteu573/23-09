/*
Exercício: Calculadora Simples
Objetivo: Criar uma calculadora simples que realiza as quatro operações básicas (soma, subtração, multiplicação e divisão) com dois números fornecidos pelo usuário.
Passos:
Solicitar ao usuário que insira dois números.
Armazenar esses números em variáveis.
Calcular a soma, subtração, multiplicação e divisão.
Exibir os resultados das operações em um formato claro.
tem menu de contexto

*/

// Soçicitar ao usuário para inserir os números
let num1 = Number(prompt("insira o primeiro numero: "))
let num2 = Number(prompt("insira o segundo numero: "))

// Calcular as operações
let soma = num1 + num2;
let subtração = num1 - num2;
let multiplicação = num1 * num2;
let divisão = num1 / num2;

// Exibir os resultados 
// console.log("A soma entre: ",num1, "e", num2, "é:", soma);
// console.log("A subtração entre: ",num1, " e ", num2, "é:", subtração);
// console.log("A multiplicação entre: ",num1," e ", num2, "é:", multiplicação);
// console.log("A divisão entre: ",num1,"e", num2,"é", divisão);

// Exibir os resultados usando template strings
console.log(`A soma entre ${num1} e ${num2} é: ${soma}`);
console.log(`A subtração entre ${num1} e ${num2} é: ${subtração}`);
console.log(`A multiplicação entre ${num1} e ${num2} é: ${multiplicação}`);
console.log(`A divisão entre ${num1} e ${num2} é: ${divisão}`);