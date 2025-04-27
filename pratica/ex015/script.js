function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique o campo "ANO DE NASCIMENTO"')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade >= 0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else {
            genero = 'uma mulher'
            if (idade >= 0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
