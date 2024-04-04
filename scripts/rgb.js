const btnColorRGB = document.getElementById("btnColorRGB");
const colorFondo = document.getElementById("colorFondo");
const colorSpan = document.querySelector(".colorSpan");

btnColorRGB.addEventListener("click", () => {
    colorFondo.style.backgroundColor = coloresRGB();
    colorSpan.textContent = coloresRGB();
})

//Funcion con colores RGB

function coloresRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}