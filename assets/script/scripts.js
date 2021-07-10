

function comprobarSeleccionado() {
    var aRadios = document.getElementsByName("grupo1");
    var radioActivo = null;

    for (var contador = 0; contador < aRadios.length; contador++) {
        if (aRadios[contador].checked == true)
            radioActivo = aRadios[contador].value;
    }

    if (radioActivo == null) {
        alert("Debes marcar 1 opción")
    }
    
    
    let jugada_usuario = 1
    jugada_computador_num = GenerarJugadaComputador()
    jug_computador = conversion(jugada_computador_num)

    jugada_tu_num = parseInt(radioActivo)
    jug_tu = conversion(parseInt(jugada_tu_num))

    document.getElementById("jugadashechas").innerHTML = "MÁQUINA:" + jug_computador + "<br>HUMANO:" + jug_tu + "<br>"
    comp2 = comprobarGanador(jugada_computador_num, jugada_tu_num)

}


function comprobarGanador(comp, tu) { 
    if (comp == tu) { document.getElementById("resultado").innerHTML = 'EMPATE' }
    else {
        if ((comp == '0' && tu == '2') || (comp == '1' && tu == '0') || (comp == '2' && tu == '0')) {
            document.getElementById("resultado").innerHTML = '¡PERDISTE!'
        }
        else {
            document.getElementById("resultado").innerHTML = '¡GANASTE!'
        }
    }
}

function conversion(num) { 
    switch (num) {
        case 0:
            salida = 'PIEDRA';
            break;
        case 1:
            salida = 'PAPEL';
            break;
        case 2:
            salida = 'TIJERA';
            break;
    }
    return salida
}

function GenerarJugadaComputador() { 
    var jugada = (Math.round(Math.random() * 2))
    return jugada
}

