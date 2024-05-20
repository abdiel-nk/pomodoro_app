const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputMusic = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const musica_0 = new Audio('./sonidos/beep.mp3');
const musicPlay= new Audio('./sonidos/play.wav');
const musicPause= new Audio('./sonidos/pause.mp3');
const buttonpause= document.querySelector("#start-pause");
const textIniciaPausa = document.querySelector('#start-pause span');
const tiempoPant = document.querySelector('#timer');
const changeLogo = document.querySelector('.app__card-primary-button-wrapper img');

let tiempo = 1500
let idIntervalo = null
console.log(changeLogo)
inputMusic.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})


botonCorto.addEventListener('click',() => {
    tiempo = 300
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
})

botonEnfoque.addEventListener('click',() =>{
    tiempo = 1500
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')
})
botonLargo.addEventListener('click',()=>{
    tiempo = 900
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
})

function cambiarContexto(contexto){
    mostrarTiempo()
    botones.forEach(function (contexto) {
    contexto.classList.remove('active');
})
    
    html.setAttribute('data-contexto' , contexto);
    console.log(contexto);
    banner.setAttribute('src',`./imagenes/${contexto}.png`);
    
    switch(contexto){
        case "enfoque" :
            title.innerHTML = `Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>`
            break;
        case "descanso-corto":
            title.innerHTML = `¿Qué tal tomar un respiro? <strong class="app__title-strong">!Haz una pausa corta!</strong>`
            break;
        case "descanso-largo" :     
            title.innerHTML = `!Hora de volver a la superficie.<strong class="app__title-strong"> Haz una pausa larga!</strong>`
            break;
        default:
            break;
    }
}
//iniciar tiempo y cambiar icono a pausar
const cuentaRegresiva = () =>{
    if(tiempo <=0){
        musica_0.play()
        reiniciar()
        return
    }
    textIniciaPausa.textContent = "Pausar"
    changeLogo.setAttribute('src',`./imagenes/pause.png`);
    tiempo -=1;
    mostrarTiempo()

}

buttonpause.addEventListener('click', iniciarPausa)
    
function iniciarPausa(){
    if(idIntervalo){
        musicPause.play()
        reiniciar()

        return
    }
    musicPlay.play();
    idIntervalo=setInterval(cuentaRegresiva,1000)
}
//al activar pausa debe regresar el icono de empezar
function reiniciar (){
    clearInterval(idIntervalo);
    changeLogo.setAttribute('src',`./imagenes/play_arrow.png`);
    textIniciaPausa.textContent = "Comenzar"
    idIntervalo =null;
}
function mostrarTiempo(){
    const tempo = new Date(tiempo * 1000) 
    const tempoFormateo = tempo.toLocaleString('es-MX',{minute:'2-digit',second:'2-digit'})
    tiempoPant.innerHTML=`${tempoFormateo}`
}

mostrarTiempo()
//get value input

// const miInput = document.getElementById("miInput");
// miInput.addEventListener("keydown", function(event) {
//   console.log(`Tecla presionada: ${event.key}`);
// });

//Focus input 
// const miCampo = document.getElementById("miInput");
// miCampo.addEventListener("focus", function() {
//   console.log("El campo ha obtenido el enfoque.");
// });

// miCampo.addEventListener("blur", function() {
//   console.log("El campo ha perdido el enfoque.");
// });