function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente!')

} else {
    var fsex = document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src' , 'bebehomem.JPG')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src' , 'jovemhomem.JPG')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src' , 'adultohomem.JPG')
        } else  {
            //Idoso
            img.setAttribute('src' , 'idosohomem.JPG')
        }    
    } else if (fsex[1].checked) {
          gênero = 'Mulher'
          if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src' , 'bebemulher.JPG')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src' , 'jovemmulher.JPG')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src' , 'adultomulher.JPG')
        } else  {
            //Idoso
            img.setAttribute('src' , 'idosomulher.JPG') 
        }    
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
res.appendChild(img) 
}

}

