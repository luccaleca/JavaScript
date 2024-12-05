//declaração
v1 = [];
//podemos acessar qualquer posição, e ir colocando valores
v1[0] = 3.4;
v1[10] = 2;
v1[2] = 'abc'
//aqui v1 tem comprimento 11
console.log(v1.length)
//conteudo dele
console.log(v1);

v2 = [2, 'abc', true]
console.log(v2);

//iterando
for (let i = 0; i < v2.length; i++) {
    console.log(v2[i]) //i=2
}