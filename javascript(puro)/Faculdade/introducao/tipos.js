//temos os tipos: boolean, null, number, string, undefined
//temos os objetos: json, array, classe, math, funções

//coerção
//é quando você pega duas variaveis que estão envolvidos numa expressão e um deles pode ter o seu tipo alterado 
//para que a expressao faça sentido

const n1 = 2;
const n2 = '3'
const n3 = n1 + n2
//console.log(n3) //concatena, entao vai ser 23 (coerção implicita)

const n4 = n1 + Number (n2)
//console.log(n4);  //soma, entao vai ser 5 (coerção explicita)


//comparação
//pode ser de dois tipos em javascript:
// == compara o valor
// === compara o valor e o tipo