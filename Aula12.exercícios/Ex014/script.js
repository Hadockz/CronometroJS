function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${[hora]} horas e ${[minutos]} minutos.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA!
        foto.src = 'manhã.jpg'
        document.body.style.background = '#feefbf'
        
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        foto.src = 'Tarde.jpg'
        document.body.style.background = '#a8670c'
    } else {
        // BOA NOITE!
        foto.src = 'noite.jpg'
        document.body.style.background = '#191633'
        
        
    }
}