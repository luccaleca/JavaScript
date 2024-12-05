function calculoRapidinho (numero) {
    return Promise.resolve((numero * (numero + 1)) /2);
}
calculoRapidinho (10). then(resultado => {
    console.log (resultado)
})
//Escuta primeiro, mesmo que a promise ja esteja fulfilled
console.log('Esperando')