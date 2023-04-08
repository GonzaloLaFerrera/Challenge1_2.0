//recordar que para utilizar el texto encriptado/desencriptado (procesado) tenemos que usar un textarea que no permite al usuario modif el contenido de la caja. Y que tendríamos que reemplazar la div con el niño-diamante por el textarea del contenido procesado.

//Esta es mi TextArea donde el Usuario Ingreso el texto
const texto_usuario = document.querySelector(".mensaje");

//Esta es mi TextArea del Output, donde sale el texto ya procesado
const mensaje = document.querySelector(".texto_final");

//Div completo en donde se muestra el texto procesado, y debería incluir tmb el botón de copiado
const texto_renderizado = document.querySelector(".bloque_texto_procesado");

//Div completo del bloque del muñeco, texto sin mensaje e instrucciones
const texto_sin_procesar = document.querySelector(".bloque_texto_sin_procesar");

//Mensaje de alerta de 'copy' en clipboard
const mensaje_copiadoClipboard = document.querySelector("#mensajeAlerta"); 


/*REGLAS DE CODIFICACIÓN*/
/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat" */


function boton_encriptacion(){
          
    
    /* Aqui se encripta el texto propiamente dicho */
    const texto_encriptado = encriptado(texto_usuario.value);
    mensaje.value = texto_encriptado;

    /* Aqui el interruptor para mostrar/ocultar */
    
    texto_sin_procesar.classList.add("oculto");

    texto_renderizado.classList.remove("oculto");

};

function encriptado(texto_a_encriptar){
    
    const parametrosCodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto_a_encriptar = texto_a_encriptar.toLowerCase();
    
    for(let i = 0; i < parametrosCodificacion.length; i++){
        if(texto_a_encriptar.includes(parametrosCodificacion[i][0])){
            texto_a_encriptar = texto_a_encriptar.replaceAll(parametrosCodificacion[i][0], parametrosCodificacion[i][1]);
        }   
    }
    return texto_a_encriptar;
}

function boton_desencriptacion(){
    
    /* Aqui se desencripta el texto propiamente dicho */
    const texto_desencriptado = desencriptado(texto_usuario.value);
    mensaje.value = texto_desencriptado;

    /*Interruptor mostrar_ocultar*/
    texto_sin_procesar.classList.add("oculto");
    texto_renderizado.classList.remove("oculto");

}

function desencriptado(texto_a_desencriptar){
    const parametrosDecodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto_a_desencriptar = texto_a_desencriptar.toLowerCase();
    
    for(let i = 0; i < parametrosDecodificacion.length; i++){
        if(texto_a_desencriptar.includes(parametrosDecodificacion[i][1])){
            texto_a_desencriptar = texto_a_desencriptar.replaceAll(parametrosDecodificacion[i][1], parametrosDecodificacion[i][0]);
        }
    
    }
    return texto_a_desencriptar;
};

function boton_copiado(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    /* mensaje.value = ""; (opción para borrar el contenido del output textArea una vez copiado al clipboard*/
    
    mensaje_copiadoClipboard.innerHTML = "Copiado al Portapapeles!";
    setTimeout(()=> mensaje_copiadoClipboard.innerHTML = '', 2000);
};