let pessoa = {
    nome: "João",
    idade: 17,
}

//o acesso as propriedades podem ser feitos com pontos
console.log("Me chamo " + pessoa.nome);

console.log("Tenho " + pessoa["idade"]  + " anos");  //voce tambem pode acessar o valor usando []

let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
    },
};
console.log (
    `Sou ${pessoaComEndereco.nome},
    tenho ${pessoaComEndereco.idade} anos
    e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
    número ${pessoaComEndereco["endereco"]["numero"]}`
);

let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
      logradouro: "Rua A",
      numero: 10,
      bairro: "Vila J",
    },
    veiculos: [
      {
        marca: "Ford",
        modelo: "Ecosport",
        anoDeFabricacao: 2018,
      },
      {
        marca: "Chevrolet",
        modelo: "Onix",
        anoDeFabricacao: 2020,
      },
      {
        marca: "Volkswagen",
        modelo: "Nivus",
        anoDeFabricacao: 2020,
      },
    ],
  };
  
  for (let veiculo of concessionaria.veiculos) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`);
  }

//podemos tambem armazenar funções dentro de objetos json

    let calculadora =  {
    //pode ser arrow function
    soma: (a, b) => a + b,
    //e uma função comum tambem
    subtracao: function (a, b) {
        return a + b;
    },
};
console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);