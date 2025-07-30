let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; // Número máximo para el juego

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }

function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números han sido sorteados. Reinicia el juego para jugar de nuevo.');
    }

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Has acertado el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor. Inténtalo de nuevo.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor. Inténtalo de nuevo.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    asignarTextoElemento('h1', 'Juego del numero secreto');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;  

    }


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();
    document.getElementById('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();