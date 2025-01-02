function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {  //aqui ta falando que essa função vai demorar entao promise neles
        let res = 0;                                //variavel normal
        for (let i = 1; i <= numero; i++) {         //loop para incrementar até chegar no numero que o usuario passar
            res += i; // =+ mantem o valor da esquerda e soma com o da direita, e continua somando com o resultado anterior 0+1 1+2 3+3 ... até chegar no 10
        }
        resolve(res);               //se der certo(then), que seria o resolve, retorna o valor de res
    });
}
calculoDemorado(10).then ( (resultado) => {    //passamos o numero 10 como parametro, e como é uma promise, se o resultado der certo (then)
    console.log(resultado)                      //mostra pra gente
})