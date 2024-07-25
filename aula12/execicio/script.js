function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#378dff'
    } else if(hora >= 12 && hora <=18){
        //Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#ffdf3d'
    } else{
        //Noite
        img.src = 'noite.png'
        document.body.style.background = '#54626b'
    }
}