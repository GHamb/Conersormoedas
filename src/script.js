$('#btncvtr').click(function () {
    var valor = $('#valor').val()
    var conv = 100
    converte(valor, conv)

})

function converte(valor, conversao) {
    var transf = (valor * conversao)
    var v5 = transf / 5
    var v10 = transf / 10
    var v25 = transf / 25
    var v50 = transf / 50
    var v100 = transf / 100
    $('#v5').val(v5)
    $('#v10').val(v10)
    $('#v25').val(v25)
    $('#v50').val(v50)
    $('#1r').val(v100)
}
