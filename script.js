const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

botonCorto.addEventListener('click',() => {
    cambiarContexto('descanso-corto')
})

botonEnfoque.addEventListener('click',() =>{
    cambiarContexto('enfoque')
})
botonLargo.addEventListener('click',()=>{
    cambiarContexto('descanso-largo')
})

function cambiarContexto(contexto){
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