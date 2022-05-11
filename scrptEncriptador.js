//BOTON ENCRIPTAR Y DESENCRIPTAR

const cajaTexto = document.querySelector("#caja-texto")
const cajaRespuesta = document.querySelector("#caja-respuesta")

function btnEncriptar(){
    const textoEncriptado = encriptar(cajaTexto.value)
    cajaRespuesta.value = textoEncriptado
}

function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptar = stringEncriptar.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptar
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(cajaTexto.value)
    cajaRespuesta.value = textoEncriptado
}

function desencriptar(stringEncriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringEncriptar = stringEncriptar.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptar
}
//COPIAR    

const contenido = document.getElementById("caja-respuesta")
const btnCopy = document.getElementById("btn-copy")

btnCopy.addEventListener("click", e=> {
    contenido.select()
    document.execCommand("copy")
}
)