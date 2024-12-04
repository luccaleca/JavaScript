function tabuada() {
       let num = document.getElementById('txtn')     //Pegamos o valor das variaveis do HTML txtn e seltab
       let tab = document.getElementById('seltab')  //E agora criamos variaveis para colocar esses valores dessas variaveis no JS
       if (num.value.length == 0) {                //Aqui criamos uma condição, se o valor for nada,
        window.alert('Por favor, digite um número') //O site vai dar um aviso falando para colocarmos alguma coisa
    } else {                                        //Aqui fazemos o resto da condição falando que se não for nada que você colocar, o numero que virá tera seu valor entregue a uma variavel n             
        let n = Number(num.value)                   //Aqui convertemos o valor da variavel de numero (txtn) que esta em string para number
        let c = 1                                   //Atribuimos o valor para c como 1 (porque vai ser o primeiro número da tabuada)
         tab.innerHTML = ''                         // isso aqui vai limpar a tabela quando voce mudar o numero e não vai deixar rastros de tabuadas passadas        
        while (c <= 10) {                           //Aqui dissemos que , ENQUANTO c for menor que 10
            let item = document.createElement("option")    //Ele vai criar uma variavel que se chama item e esse item vai criar um option no elemento select
            item.text = `${n} x ${c} = ${n*c}`      //Aqui vai criar o formato do option, ele vai ser um texto com concatenação dos valores convertidos n, c e n*c
            item.value = `tab${c}`                  //Aqui da valor para o seu option
            tab.appendChild(item)                   //Adiciona um elemento filho ao tab ( e tab é a tabuada)
            c++                                     //Aqui vai adicionando valor ao c (c++ = c=c+1)
        }
    
        
    }
}


