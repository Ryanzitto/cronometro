const display = document.getElementById("display");
const pauseBtn = document.getElementById("pausar");
const clearBtn = document.getElementById("clear");
const play = document.getElementById("iniciar");
const tempo = document.getElementById('tempo')
const parcial = document.getElementById('parcial')
const volta = document.getElementById('volta')
const volta2 = document.getElementById('volta2')
const volta3 = document.getElementById('volta3')

let sec = 0;
let min = 0;
let hour = 0;

let interval;
 // Variavel que irá receber um setInterval, fazendo com que a função visor() seja chamada a cada 1 segundo.

let verificador = false ;
// A variavel 'verificador' é uma alternativa pra não permitir que a função "start()" seja empilhada varias vezes.

let contador = 0;
// Contador que organiza a lógica de qual volta (primeira, segunda ou última) deve ser mostrada na tela.

function start() {
    if(verificador === false){
         verificador = true;
         contador = 1
         tempo.innerText = ''
        interval = setInterval(visor, 1000);
    }  
}

function pause() {
    verificador = false;
    clearInterval(interval);
}

function clear() {
    verificador = false;
    pause();
    tempo.innerText ='Tempo final:  '  + addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
    sec = 0;
    min = 0;
    hour = 0;
    display.innerHTML = addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
    volta.textContent = ""
    volta2.textContent = ""
    volta3.textContent = ""
    contador = 0;  
}

function visor() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
        if (min === 60) {
            hour++;
            min = 0;
        }
    }
    display.innerHTML = addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
}

function addZero(digito) {
    if (digito < 10) {
        return `0${digito}`;
    } else {
        return `${digito}`;
    }
}

function print(){
    if( contador == 1){
          volta.textContent ='Primeira parcial ' + addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
          contador += 1
    } else if (contador == 2){
        volta2.textContent ='Segunda parcial ' + addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
        contador +=1
    } else if(contador == 3){
        volta3.textContent ='Última parcial ' + addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
    }   
}

parcial.addEventListener("click", print)
play.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
clearBtn.addEventListener("click", clear);
