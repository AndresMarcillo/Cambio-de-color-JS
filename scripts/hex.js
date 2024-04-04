const btnColorHex = document.getElementById("btnColorHex");
const colorFondo = document.getElementById("colorFondo");
const colorSpan = document.querySelector(".colorSpan");

const colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

btnColorHex.addEventListener("click", () => {
    colorFondo.style.backgroundColor = coloresHex();
    colorSpan.textContent = coloresHex()
})

//Funcion para obtener 6 elementos del array colorHex

function coloresHex() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += colorHex[Math.floor(Math.random() * colorHex.length)].toString();
    }
    return color
}
