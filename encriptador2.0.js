//recordar que para utilizar el texto encriptado/desencriptado (procesado) tenemos que usar un textarea que no permite al usuario modif el contenido de la caja. Y que tendríamos que reemplazar la div con el niño-diamante por el textarea del contenido procesado.
const texto_usuario = document.querySelector(".mensaje");
const mensaje = document.querySelector(".texto_final");
const texto_renderizado = document.querySelector(".texto_procesado");
const texto_sin_procesar = document.querySelector(".texto_sin_procesar");


/*REGLAS DE CODIFICACIÓN*/
/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat" */


function boton_encriptacion(){
    
    const texto_usuario = document.querySelector(".mensaje");
    const mensaje = document.querySelector(".texto_final");
    const texto_encriptado = encriptado(texto_usuario.value);
    mensaje.value = texto_encriptado; 
    const texto_sin_procesar = document.querySelector(".texto_sin_procesar");
    const texto_renderizado = document.querySelector(".texto_procesado");
       
    
    texto_usuario.value = ""; /* deja sin contenido el texto a encriptar */
    
    texto_sin_procesar.style.display = "none"; /*desaparece el campo de texto donde esta el muñeco */ 
    
    /*aparece el campo de texto donde esta el texto procesado/codificado*/
    texto_renderizado.style.display = "flex";
    texto_renderizado.style.display = "flex-direction: column";
    texto_renderizado.style.display = "gap: 40px";
    texto_renderizado.style.display = "align-items: center";

}


function encriptado(texto_a_encriptar){
    
    const parametrosCodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto_a_encriptar = texto_a_encriptar.toLowerCase();
    
    for(let i = 0; i < parametrosCodificacion.length; i++){
        if(texto_a_encriptar.includes(parametrosCodificacion[i][1])){
            texto_a_encriptar = texto_a_encriptar.replaceAll(parametrosCodificacion[i][0], parametrosCodificacion[i][1]);
        }
    
    }

    return texto_a_encriptar;

}



function boton_desencriptacion(){

}

function verificar(){

}

function desencriptado(){

}

function texto_procesado(){

}

/* boton_encriptado(); */


