let victoria = 0;
let derrota = 0;

function clicar() {
    jugar();
    mostrarimg();
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
        console.log("has ganado");
        if (victoria <= 5) {
            victoria++
            document.getElementById('resultado-ganador').innerHTML = victoria;
        }
        if (victoria === 5) {

            let detener = setTimeout(function() { alert("Has Ganado"); }, 100);
        }
    } else if (piedra == numeroAleatorio) {
        console.log("has empatado");
    } else if (piedra > numeroAleatorio) {
        console.log("has perdido");
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
        console.log("Has perdido");
        if (derrota <= 5) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
        }
        if (derrota === 5) {

            let detener = setTimeout(function() { alert("Has Perdido"); }, 100);

        }

    } else if (papel == numeroAleatorio) {
        console.log("Has empatado");
    } else if (papel > numeroAleatorio) {
        console.log("Has ganado");
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
        console.log("Has perdido")
        if (derrota <= 5) {
            derrota++
            document.getElementById('resultado-perdedor').innerHTML = derrota;
        }
        if (derrota === 5) {

            let detener = setTimeout(function() { alert("Has Perdido"); }, 100);

        }
    } else if (tijera == numeroAleatorio) {
        console.log("Has empatado")
    } else if (tijera > numeroAleatorio) {
        console.log("Has ganado")
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
    setTimeout('tijeras()', 1500);
    setTimeout('piedra()', 1600);
    setTimeout('papel()', 1700);
    setTimeout('tijeras()', 1800);

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