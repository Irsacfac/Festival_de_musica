document.addEventListener("DOMContentLoaded", function(){
    crearGaleria()
})

function crearGaleria(){
    const CANT_IMG = 16
    const galeria = document.querySelector(".galeria-imagenes")

    for(let i = 1; i <= CANT_IMG; i++){
        const imagen = document.createElement("IMG")
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = "Imagen Galeria"
        //Event Handler
        imagen.onclick = function(){
            mostrarImagen(i)
        }
        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i){
    const imagen = document.createElement("IMG")
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = "Imagen Galeria"
    // Generar Modal
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.onclick = cerrarModal
    modal.appendChild(imagen)
    // Botón cerrar modal
    const cerrarModalBtn = document.createElement("BUTTON")
    cerrarModalBtn.textContent = "X"
    cerrarModalBtn.classList.add("btn-cerrar")
    cerrarModalBtn.onclick = cerrarModal
    modal.appendChild(cerrarModalBtn)
    // Agredar al HTML
    const body = document.querySelector("body")
    body.classList.add("overflow-hidden")
    body.appendChild(modal)
    console.log(modal)
}

function cerrarModal(){
    const modal = document.querySelector(".modal")
    modal.classList.add("fade-out")
    setTimeout(() => {
        modal?.remove()
        const body = document.querySelector("body")
        body.classList.remove("overflow-hidden")
    }, 500);
}