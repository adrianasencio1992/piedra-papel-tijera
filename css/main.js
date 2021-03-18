let victoria = 0;
let derrota = 0;


function clicar() {
    jugar();
    borrar();
}

function clicar2() {
    jugar2();
    borrar();
}

function clicar3() {
    jugar3();
    borrar();
}

function clicar4() {
    enviarSaludo();
    cambiarZindex();
    setTimeout('cuentaAtras2()', 1000);
    setTimeout('cuentaAtrasNumero()', 2000);
    setTimeout('cuentaAtrasNumero2()', 3000);
    setTimeout('cuentaAtrasNumero3()', 4000);
    setTimeout('empezarJuego()', 5000);
}

function enviarSaludo() {
    let nombre = document.getElementById('section1-input-nombre').value;
    let saludo = document.getElementById('bienvenido').innerHTML = "Bienvenido " + nombre + "."

}

function cambiarZindex() {
    document.getElementById("section1-div-nombre-copia").style.zIndex = 10;
}

function cuentaAtras2() {
    document.getElementById("bienvenido").style.fontSize = "40px";
    let empezar = document.getElementById('bienvenido').innerHTML = "El juego comienza en..."
}

function cuentaAtrasNumero() {
    document.getElementById("numero").style.zIndex = 10;
}

function cuentaAtrasNumero2() {
    let numero1 = document.getElementById('numero').innerHTML = "2"
}

function cuentaAtrasNumero3() {
    let numero2 = document.getElementById('numero').innerHTML = "1"
}

function empezarJuego() {
    location.href = 'file:///C:/Users/adria/OneDrive/Escritorio/Trabajo/juego/juego.html'
}

function borrar() {
    let winner = document.getElementById('result').innerHTML = "";
}

function jugar() {

    let piedra = document.getElementById('piedra');
    piedra = 2;
    let papel = document.getElementById('papel');
    papel = 1;
    let tijera = document.getElementById('tijera');
    tijera = 3;
    let numeroAleatorio = Math.round((Math.random() * 3));

    if (piedra < numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        setTimeout('tijeras()', 1800);
        console.log(numeroAleatorio)
    } else if (piedra == numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        setTimeout('tijeras()', 1800);
        setTimeout('piedra()', 1900);
        console.log(numeroAleatorio)
    } else if (piedra > numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        console.log(numeroAleatorio)
    } else {
        console.log("No funciona")
    }


    if (piedra < numeroAleatorio) {
        console.log("has ganado");
        if (victoria < 5) {
            victoria++
            let cambiarNumero = setTimeout(function() { document.getElementById('resultado-ganador').innerHTML = victoria; }, 1800);
            let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has ganado!"; }, 1800);
        }
        if (victoria === 5) {

            let detener = setTimeout(function() { document.getElementById('result-acabar').innerHTML = "¡Winner!"; }, 1800);
            let volver = setTimeout(function() { location.href = 'file:///C:/Users/adria/OneDrive/Escritorio/Trabajo/juego/index.html' }, 4000);

        }
    } else if (piedra == numeroAleatorio) {
        console.log("has empatado");
        let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has empatado!"; }, 1900);
    } else if (piedra > numeroAleatorio) {
        console.log("has perdido");
        if (derrota < 5) {
            derrota++
            let cambiarNumero = setTimeout(function() { document.getElementById('resultado-perdedor').innerHTML = derrota; }, 1700);
            let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has perdido!"; }, 1700);
        }
        if (derrota === 5) {
            let detener = setTimeout(function() { document.getElementById('result-acabar').innerHTML = "¡Loser!"; }, 1700);
            let volver = setTimeout(function() { location.href = 'file:///C:/Users/adria/OneDrive/Escritorio/Trabajo/juego/index.html' }, 4000);

        }
    } else {
        document.getElementById('resultado').innerHTML = "Houston tenemos un problema"
    }
}

function jugar2() {
    let piedra = document.getElementById('piedra');
    piedra = 1;
    let papel = document.getElementById('papel');
    papel = 2;
    let tijera = document.getElementById('tijera');
    tijera = 3;
    let numeroAleatorio = Math.round((Math.random() * 3));

    if (papel < numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        setTimeout('tijeras()', 1800);
        console.log(numeroAleatorio)
    } else if (papel == numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        console.log(numeroAleatorio)
    } else if (papel > numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        console.log(numeroAleatorio)
    } else {
        console.log("No funciona")
    }

    if (papel < numeroAleatorio) {
        console.log("Has perdido");
        if (derrota < 5) {
            derrota++
            let cambiarNumero = setTimeout(function() { document.getElementById('resultado-perdedor').innerHTML = derrota; }, 1800);
            let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has perdido!"; }, 1800);
        }
        if (derrota === 5) {

            let detener = setTimeout(function() { document.getElementById('result-acabar').innerHTML = "¡Loser!"; }, 1800);
            let volver = setTimeout(function() { location.href = 'file:///C:/Users/adria/OneDrive/Escritorio/Trabajo/juego/index.html' }, 4000);

        }

    } else if (papel == numeroAleatorio) {
        console.log("Has empatado");
        let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has empatado!"; }, 1700);
    } else if (papel > numeroAleatorio) {
        console.log("Has ganado");
        if (victoria < 5) {
            victoria++
            let cambiarNumero = setTimeout(function() { document.getElementById('resultado-ganador').innerHTML = victoria; }, 1600);
            let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has ganado!"; }, 1600);
        }
        if (victoria === 5) {

            let detener = setTimeout(function() { document.getElementById('result-acabar').innerHTML = "¡Winner!"; }, 1600);
            let volver = setTimeout(function() { location.href = 'file:///C:/Users/adria/OneDrive/Escritorio/Trabajo/juego/index.html' }, 4000);

        }
    } else {
        document.getElementById('resultado').innerHTML = "Houston tenemos un problema"
    }
}

function jugar3() {
    let piedra = document.getElementById('piedra');
    piedra = 3;
    let papel = document.getElementById('papel');
    papel = 1;
    let tijera = document.getElementById('tijera');
    tijera = 2;
    let numeroAleatorio = Math.round((Math.random() * 3));

    if (tijera < numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        setTimeout('tijeras()', 1800);
        setTimeout('piedra()', 1900);
        console.log(numeroAleatorio)
    } else if (tijera == numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        setTimeout('tijeras()', 1800);
        console.log(numeroAleatorio)
    } else if (tijera > numeroAleatorio) {
        setTimeout('piedra()', 100);
        setTimeout('papel()', 200);
        setTimeout('tijeras()', 300);
        setTimeout('piedra()', 400);
        setTimeout('papel()', 500);
        setTimeout('tijeras()', 600);
        setTimeout('piedra()', 700);
        setTimeout('papel()', 800);
        setTimeout('tijeras()', 900);
        setTimeout('piedra()', 1000);
        setTimeout('papel()', 1100);
        setTimeout('tijeras()', 1200);
        setTimeout('piedra()', 1300);
        setTimeout('papel()', 1400);
        setTimeout('tijeras()', 1500);
        setTimeout('piedra()', 1600);
        setTimeout('papel()', 1700);
        console.log(numeroAleatorio)
    } else {
        console.log("No funciona")
    }



    if (tijera < numeroAleatorio) {
        console.log("Has perdido")
        if (derrota < 5) {
            derrota++
            let cambiarNumero = setTimeout(function() { document.getElementById('resultado-perdedor').innerHTML = derrota; }, 1900);
            let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has perdido!"; }, 1900);
        }
        if (derrota === 5) {

            let detener = setTimeout(function() { document.getElementById('result-acabar').innerHTML = "¡Loser!"; }, 1900);
            let volver = setTimeout(function() { location.href = 'file:///C:/Users/adria/OneDrive/Escritorio/Trabajo/juego/index.html' }, 4000);

        }
    } else if (tijera == numeroAleatorio) {
        console.log("Has empatado")
        let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has empatado!"; }, 1800);
    } else if (tijera > numeroAleatorio) {
        console.log("Has ganado")
        if (victoria < 5) {
            victoria++
            let cambiarNumero = setTimeout(function() { document.getElementById('resultado-ganador').innerHTML = victoria; }, 1700);
            let winner = setTimeout(function() { document.getElementById('result').innerHTML = "¡Has ganado!"; }, 1700);
        }
        if (victoria === 5) {

            let detener = setTimeout(function() { document.getElementById('result-acabar').innerHTML = "¡Winner!"; }, 1700);
            let volver = setTimeout(function() { location.href = 'file:///C:/Users/adria/OneDrive/Escritorio/Trabajo/juego/index.html' }, 4000);

        }
    } else {
        document.getElementById('resultado').innerHTML = "Houston tenemos un problema"
    }
}



function piedra() {
    document.getElementById('jugar').innerHTML = '<img src="piedra.png" style="width:180px; height:140px;">';

}

function papel() {
    document.getElementById('jugar').innerHTML = '<img src="papel.png" style="width:180px; height:140px;">';

}

function tijeras() {
    document.getElementById('jugar').innerHTML = '<img src="tijeras.png" style="width:180px; height:140px;">';

}