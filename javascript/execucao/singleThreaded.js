// há um único fluxo de execução. Não há execução de código em paralelo. As instruções são executadas uma após a outra, na ordem em que foram definidas.

console.log('Eu primeiro' );
console.log('Agora eu');
console.log('Sempre vou ser a ultima')

//casos que uma instrução nao depende da sua anterior para executar corretamente. O problema é que a primeira instrução pode ser demorada


//função projetada para simular uma operação que leva tempo
function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000

    while (new Date().getTime() <= atualMais2Segundos);

    const d = 8 + 4
    return d
}

const a = 2 + 3
const b = 5 + 9
const d = demorada()

//agora, nesse caso, o valor da constante e não depende do valor da demorada

const e = 2 + a + b
console.log(e)

//para resolver isso usamos a função setTimeout


