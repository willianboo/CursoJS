function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector('#txtano')
   var res = document.querySelector('#res')
   if (fano.value.length == 0 || fano.value > ano){
    alert('[Erro] Verifique os dados e tente novamente!')
   } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'img/bebe-menino.png')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src','img/homem.png')
        } else{
            //idoso
            img.setAttribute('src', 'img/avo.png')
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'img/bebe-menina.png')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src','img/mulher.png')
        } else{
            //idoso
            img.setAttribute('src', 'img/avo-mulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   }
}