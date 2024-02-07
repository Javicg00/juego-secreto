let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' } `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos ++;
    limpiarCaja();
        
    }    
    return;
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
        
    } else {

        // si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }   

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p',  `Indica un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
    
}

function reinciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    condicionesIniciales();
    //generar el numero aleatorio
    //iniciar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de jugar de nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}

condicionesIniciales();