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
        if (fsex[0].checked) {
            genero = 'um homem'
        } else {
            genero = 'uma mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
