

function comprobarSeleccionado() {
    var aRadios = document.getElementsByName("grupo1");
    var radioActivo = null;

    for (var contador = 0; contador < aRadios.length; contador++) {
        if (aRadios[contador].checked == true)
            radioActivo = aRadios[contador].value;
    }

    if (radioActivo == null) {
        alert("Por favor seleccionar una opción")
    }
    /* else {
        document.getElementById("salida").innerHTML = radioActivo
    } */
    
    let jugada_usuario = 1
    jugada_computador_num = GenerarJugadaComputador()
    jug_computador = conversion(jugada_computador_num)

    jugada_tu_num = parseInt(radioActivo)
    jug_tu = conversion(parseInt(jugada_tu_num))

    document.getElementById("jugadashechas").innerHTML = "Computador:" + jug_computador + "<br>Tu:" + jug_tu + "<br>"
    comp2 = comprobarGanador(jugada_computador_num, jugada_tu_num)

}


function comprobarGanador(comp, tu) { //funcion que compara las dos elecciones por los numeros 
    if (comp == tu) { document.getElementById("resultado").innerHTML = 'Esto ha sido un empate' }
    else {
        if ((comp == '0' && tu == '2') || (comp == '1' && tu == '0') || (comp == '2' && tu == '0')) {
            document.getElementById("resultado").innerHTML = 'Lamentablemente has perdido'
        }
        else {
            document.getElementById("resultado").innerHTML = 'Felicitaciones, has ganado!!!!'
        }
    }
}

function conversion(num) { //funcion que covierte el numero a eleccion en string
    switch (num) {
        case 0:
            salida = 'Piedra';
            break;
        case 1:
            salida = 'Papel';
            break;
        case 2:
            salida = 'Tijera';
            break;
    }
    return salida
}

function GenerarJugadaComputador() { //funcion que generar la jugada del computador
    var jugada = (Math.round(Math.random() * 2))
    return jugada
}

