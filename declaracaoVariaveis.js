//JavaScript é dinâmicamente tipada, isso significa que uma expressão é inferido em tempo de execução.
//Isso significa que vc nao precisa passar o tipo dela, como string, number, boolean, essas coisas, ela vai automatico
//Java é estaticamente tipada, entao vc tem que sempre colocar o tipo do valor da variavel

let x = 5;  //x é number
x = "Ola"; //x agora é string

//Declarar variavel: let ou var
//Declarar constantes const

//declarando constantes
const nome = "Jose";
const idade = 27;

//aspas simples e duplas tem o mesmo efeito
const sexo = "M"
const endereco =  'Rua K, 12'

//declarando variaveis

//let: variavel local com escopo de bloco
let a = 2;
let b = "abc";

//var: seu escopo é a função em que foi declarada ou global
var c = 2 + 3;
var d = "abcd"

//Diferença entre let e var:
//let você vai usar quando quiser passar um valor apenas dentro de um {}
//var você vai evitar usar, porque  ele funciona dentro e fora de um {}, causando confusão em codigos maiores

function exemploVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // 10 - `x` está acessível aqui porque `var` considera a função como escopo
  }
  exemploVar();

  function exemploLet() {
    if (true) {
      let y = 20;
    }
    console.log(y); // ReferenceError - `y` não está acessível aqui porque `let` limita o escopo ao bloco
  }
  exemploLet();

  //o var so ta por retrocompatibilidade, vamos focar no let e no const
