const fs = require("fs");  // módulo que fornece funcionalidades para interagir com o sistema de arquivos

const abrirArquivo = function (nomeArquivo) {   // função que recebe o nome do arquivo a ser lido
    const exibirConteudo = function (erro, conteudo) {  // callback para processar o resultado da leitura
        if (erro) {
            console.log(`Deu erro: ${erro}`); // exibe mensagem de erro se houver problema na leitura
        } else {
            console.log(conteudo.toString()); // exibe o conteúdo do arquivo se a leitura for bem-sucedida
            const dobro = +conteudo.toString() * 2;
            const finalizar = function (erro) {
                if(erro){
                    console.log('Deu erro tentando salvar o dobro')
                }
                else {
                    console.log("Salvou o dobro com sucesso");
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar);
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo); 
}
abrirArquivo("arquivo.txt"); // chama 'abrirArquivo' para ler 'arquivo.txt'