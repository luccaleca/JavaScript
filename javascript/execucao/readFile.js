const fs = require("fs");  //módulo que fornece funcionalidades para interagir com o sistema de arquivos, ler, atualizar, excluir arquivos
const abrirArquivo = function (nomeArquivo) {   //funcao anonima dentro da variavel abrirArquivo
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log( `Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};

abrirArquivo("arquivo.txt");