//funções podem ter nome ou nao e pra declarar uma função vc tem que usar essa estrutura:

function hello () {      //como declarar
    console.log('oi')    //o que vai ter
}
hello()                  //o que vai retornar

function hello (nome) {
    console.log('Hello, ' + nome)
}
hello('Pedro')

function soma (a, b) {
    return a + b;
}
const res = soma(2, 3)
console.log (res)


//funções anonimas são funções sem nome usadas principalmente em operações basicas e unicas, podem ser atribuidas a let ou const
const dobro = function (n) {
    return n * 2;
};
const a = dobro(4);
console.log(a);

const triplo = function (n = 5) {
    return 3 * n;
};
console.log(triplo());
console.log(triplo(10));

//arrow functions
//para escrever uma, apenas especificamos a lista de parametros e seu corpo
const somar = (a, b) => {
    return a + b;
};
console.log(somar(3, 4)) //7

//elas nao tem nome e podem ser armazenadas em const ou let
const multiplicar = (x, y) => x*y;
console.log(multiplicar(3,4));//12
//se so tiver 1 argumento na lista de parametros, os () podem ser omitidos
const dobrar = n => n*2;
console.log(dobrar(5))//10
//se o corpo possuir uma instrução, as chaves podem ser omitidas
const cumprimentar = nome => `Olá, ${nome}`;
console.log(cumprimentar('Ana')); //Olá, Ana!
//se a intrução for retornar um valor, entao o return é opcional, mas se vc usar chaves o retunr é obrigatorio
const subtrair = (a, b) => {
    return a - b;
  };
  console.log(subtrair(10, 4)); // 6

 