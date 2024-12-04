function contar() {
var numero_inicial = document.getElementById('txti')          //Aqui vai pegar os valores dos input
var numero_final = document.getElementById('txtf')            //Criar as váriaveis que vamos trabalhar no JS
var pular = document.getElementById('txtp')                   //E colocar os valores nessas variaveis que criamos
var res = document.getElementById('res')


if (numero_inicial.value.length == 0 || numero_final.value.length == 0 || pular.value.length == 0){     //Aqui vamos avisar que SE qualquer um dos três valores for 0, 
    res.innerHTML = 'Impossível contar!'                                                                //vai aparecer um alerta avisando que esta faltando dados
   // window.alert('[ERRO] Faltam dados!')
  
  }  else {                                                              //Aqui SE você NÃO colocar a condição acima
        res.innerHTML = 'Contando:  <br>'                                //Vai aparecer na tela a palavra 'Contando' se estiver tudo ok 
        var i = Number(numero_inicial.value)                             //E vamos pegar o valor das variaveis que criamos no começo
        var f = Number(numero_final.value)                               //e converter os seus valores para Number (porque todo o valor que vem de input é string)
        var p = Number(pular.value)
   if (p <= 0)  {
    window.alert('Passo invalido! Considerando PASSO 1')
    p = 1
  }
  if (1 < f) {
        // Contagem crescente                                            //Aqui vai ser a contagem para frente, obrigatoriamente o fim tem que ser maior que o inicio
        for(var c = i; c <= f; c += p) {                                 //Aqui estamos avisando que vamos começar no início
            res.innerHTML += ` ${c} \u{1F449}	`                          //E enquanto o contador for menor menor ou igual ao fim, 
                                                                         //E o incremento vai ser ele receber ele mesmo + o valor do pular
      }                                                                  //Alem de mostrar com o place holder ($) a variavel c que criamos na inicialização do for, que é responsavel por ter o valor_inicial + o valor da variavel pular
    } else {                                                             //O \u{1F449} é o código do emoji
      // Contagem regressiva
     for(let c = i; c >= f; c -= p)  {                                  //Aqui vai ser a contagem para tras, obrigatoriamente o começo tem que ser maior que o fim
          res.innerHTML +=  ` ${c} \u{1F449} `                          //Aqui estamos avisando que vamos começar no início
        }                                                               //E que o inicio tem que ser maior ou igual ao fim
     }                                                                  //E o incremento vai ser o ele mesmo - o valor do pular
    res.innerHTML += ` \u{1F3C1}`	


    }
}