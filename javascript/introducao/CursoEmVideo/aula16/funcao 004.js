// 5! = 5 x 4 x 3 x 2 x 1

function fatorial(n) {                   //Função fatorial vai receber um número e vai retornar o seu fatorial
    var fat = 1                         // vou criar uma variavel fat que vai receber 1
    for(var c = n; c > 1; c--) {       // para a variavel c (que eu criei agr) ela vai ter o valor de n e enquanto c for maior que 1, ele perde 1 (c-- = c= c-1)
        fat *= c
    }
    return fat
}

console.log(fatorial(5))