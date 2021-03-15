let victoria = 0;
let derrota = 0;

function clicar() {
    jugar();
    mostrarimg();
    sonido();
}

function clicar2() {
    jugar2();
    mostrarimg();
}

function clicar3() {
    jugar3();
    mostrarimg();
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
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Piedra y tu contrincante Tijeras`
        if (victoria <= 5) {
            victoria++
            document.getElementById('resultado-ganador').innerHTML = victoria;
        }
        if (victoria === 5) {

            let detener = setTimeout(function() { alert("Has Ganado"); }, 100);

        }


    } else if (piedra == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Piedra y tu contrincante tambien`
    } else if (piedra > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has perdido, elegiste Piedra y tu contrincante papel`
        if (derrota <= 5) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
        }
        if (derrota === 5) {

            let detener = setTimeout(function() { alert("Has Perdido"); }, 100);

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
        document.getElementById('resultado').innerHTML = `Has perdido, elegiste papel y tu contrincante Tijeras`
        if (derrota <= 5) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
        }
        if (derrota === 5) {

            let detener = setTimeout(function() { alert("Has Perdido"); }, 100);

        }

    } else if (papel == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Papel y tu contrincante tambien`
    } else if (papel > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Papel y tu contrincante Piedra`
        if (victoria <= 5) {
            victoria++
            document.getElementById('resultado-ganador').innerHTML = victoria;
        }
        if (victoria === 5) {

            let detener = setTimeout(function() { alert("Has Ganado"); }, 100);

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
        document.getElementById('resultado').innerHTML = `Has perdido, elegiste Tijera y tu contrincante Piedra`
        if (derrota <= 5) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
        }
        if (derrota === 5) {

            let detener = setTimeout(function() { alert("Has Perdido"); }, 100);

        }
    } else if (tijera == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Tijera y tu contrincante tambien`
    } else if (tijera > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Tijera y tu contrincante Papel`
        if (victoria <= 5) {
            victoria++
            document.getElementById('resultado-ganador').innerHTML = victoria;
        }
        if (victoria === 5) {

            let detener = setTimeout(function() { alert("Has Ganado"); }, 100);

        }
    } else {
        document.getElementById('resultado').innerHTML = "Houston tenemos un problema"
    }
}

function mostrarimg() {
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
    setTimeout('piedra()', 1500);

}

function piedra() {
    document.getElementById('jugar').innerHTML = '<img src="piedra.jpg" style="width:200px; height:200px;">';

}

function papel() {
    document.getElementById('jugar').innerHTML = '<img src="papel.jpg" style="width:200px; height:200px;">';

}

function tijeras() {
    document.getElementById('jugar').innerHTML = '<img src="tijerasjpg.jpg" style="width:200px; height:200px;">';

}

function sonido() {
    let boton = document.querySelector(".col-1")

    boton.addEventListener("click", () => {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "sonido.mp3")
        etiquetaAudio.play()
    })
}

/*
let victoria = 0;
let derrota = 0;

function jugar() {

    let piedra = document.getElementById('piedra');
    piedra = 2;
    let papel = document.getElementById('papel');
    papel = 1;
    let tijera = document.getElementById('tijera');
    tijera = 3;
    let numeroAleatorio = Math.round((Math.random() * 3));



    if (piedra < numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Piedra y tu contrincante Tijeras`
        if (victoria === victoria) {
            victoria++
            document.getElementById('resultado-ganador').innerHTML = victoria;
        }
    } else if (piedra == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Piedra y tu contrincante tambien`
    } else if (piedra > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has perdido, elegiste Piedra y tu contrincante papel`
        if (derrota === derrota) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
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
        document.getElementById('resultado').innerHTML = `Has perdido, elegiste papel y tu contrincante Tijeras`
        if (derrota === derrota) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
        }

    } else if (papel == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Papel y tu contrincante tambien`
    } else if (papel > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Papel y tu contrincante Piedra`
        if (victoria === victoria) {
            victoria++
            document.getElementById('resultado-ganador').innerHTML = victoria;
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
        document.getElementById('resultado').innerHTML = `Has perdido, elegiste Tijera y tu contrincante Piedra`
        if (derrota === derrota) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
        }
    } else if (tijera == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Tijera y tu contrincante tambien`
    } else if (tijera > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Tijera y tu contrincante Papel`
        if (victoria === victoria) {
            victoria++
            document.getElementById('resultado-ganador').innerHTML = victoria;
        }
    } else {
        document.getElementById('resultado').innerHTML = "Houston tenemos un problema"
    }
}

}*/