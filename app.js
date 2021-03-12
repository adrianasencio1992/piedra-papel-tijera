function jugar() {
    let piedra = document.getElementById('piedra');
    piedra = 2;
    let papel = document.getElementById('papel');
    papel = 1;
    let tijera = document.getElementById('tijera');
    tijera = 3;
    let numeroAleatorio = Math.round((Math.random() * 3));
    let resultado = document.getElementById('resultado-ganador');
    resultado = 0;

    if (piedra < numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Piedra y tu contrincante Tijeras`;
    } else if (piedra == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Piedra y tu contrincante tambien`
    } else if (piedra > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has perdido, elegiste Piedra y tu contrincante papel`
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
    } else if (papel == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Papel y tu contrincante tambien`
    } else if (papel > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Papel y tu contrincante Piedra`
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
    } else if (tijera == numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has empatado, elegiste Tijera y tu contrincante tambien`
    } else if (tijera > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = `Has ganado, elegiste Tijera y tu contrincante Papel`
    } else {
        document.getElementById('resultado').innerHTML = "Houston tenemos un problema"
    }
}








/*function jugar() {
  let piedra = document.getElementById('piedra');
  piedra = 2;
  let papel = document.getElementById('papel');
  papel = 1;
  let tijera = document.getElementById('tijera');
  tijera = 3;
  let numeroAleatorio = Math.round((Math.random() * 3));
  let resultado = 0;

  if (piedra < numeroAleatorio) {
      document.getElementById('resultado').innerHTML = `Has ganado, elegiste Piedra y tu contrincante Tijeras`
  } else if (piedra == numeroAleatorio) {
      document.getElementById('resultado').innerHTML = `Has empatado, elegiste Piedra y tu contrincante tambien`
  } else if (piedra > numeroAleatorio) {
      document.getElementById('resultado').innerHTML = `Has perdido, elegiste Piedra y tu contrincante papel`
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
  } else if (papel == numeroAleatorio) {
      document.getElementById('resultado').innerHTML = `Has empatado, elegiste Papel y tu contrincante tambien`
  } else if (papel > numeroAleatorio) {
      document.getElementById('resultado').innerHTML = `Has ganado, elegiste Papel y tu contrincante Piedra`
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
  } else if (tijera == numeroAleatorio) {
      document.getElementById('resultado').innerHTML = `Has empatado, elegiste Tijera y tu contrincante tambien`
  } else if (tijera > numeroAleatorio) {
      document.getElementById('resultado').innerHTML = `Has ganado, elegiste Tijera y tu contrincante Papel`
  } else {
      document.getElementById('resultado').innerHTML = "Houston tenemos un problema"
  }
}*/