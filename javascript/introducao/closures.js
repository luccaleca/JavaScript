//clousure é quando vc tem uma função, que dentro tem outra função, e essa função filha tem acesso ao escopo dessa função pai

let umaFuncao = function () {
  console.log("Fui armazenada em uma variável")
}

umaFuncao(); // ate aqui no terminal so vai aparecer o console.log acima

function f (funcao) {
  funcao()
}       //como so criamos essa função f que tem uma função funcao dentro de si e ela é chamada nos parametros, nada acontece

function g () {
  function outraFuncao() {
    console.log("Fui criada por g");
  }
  return outraFuncao //retorna a função mas não a executa
} // aqui vai continuar a mesma coisa, porque nao chamamos a função g

f (function () {
  console.log ('Estou sendo passada para f') //aqui vai aparecer, porque chamamos de forma explicita a funcao() que recebe o valor da função anonima
})                                           

const gResult = g()
gResult()     //aqui vai aparecer porque jogamos a função g dentro dessa constante e chamamos ela

g() ()   //nesse caso, vai chamar porque ele ta chamando a função dentro do que tem em g, que é a outraFuncao e essa funcao sim tem uma ação

f(g) //aqui nao vai ser exibido nada, porque g tem uma função dentro dela e f nao esta acessando essa função e sim a função g

f(g()) //aqui vai retornar porque é como se tivessemos escrevendo f(outraFuncao)

//f(g()())  //aqui vai dar erro porque nao tem uma funcao interna de outraFuncao

//f(1)  //aqui vai dar erro porque vc esta considerando 1 como se fosse uma função porque é oque tem dentro de f

function b () {  //função de alta ordem
  let nome = 'João';  //variavel dentro da função b
  function g () {    //função filha de b
      console.log(nome);  //tem uma ação aqui, mas por si so nao apareceria
  }
  g()   //como a gente chama a função dentro ,se eu chamar b vai aparecer o console.log de g, mase se nao tivesse 
}
b()  //aqui nao iria retornar

function ola () {
  let nome = 'João';
   return function () {   //esse return faz com que apareça o console.log se ela fosse chamada, porque se nao tivesse nao chamaria
    console.log ('Olá, Jõao');
  }
}

let olaResult = ola();

olaResult();

function saudacoesFactory(saudacao, nome) {
  return function () {
    console.log (saudacao + ', ' + nome);
  }
}

let olaJoao = saudacoesFactory ('Olá', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao();  //Olá, Jõao
tchauJoao(); //Tchau, João

//uma função interna em conjunto com as variaveis de seu escopo externo é o que chamamos de closure.

//Caso de closure que pode ser contra intuitivo

function eAgora () {
  let cont = 1;
  function f1 () {
    console.log (cont);
  }
  cont++;
  function f2 () {
    console.log (cont);
  }
  //JSON contendo as duas funções
  return {f1, f2}
}

let eAgoraResult = eAgora();

eAgoraResult.f1(); //2
eAgoraResult.f2(); //2
