const btnColor = document.getElementById("btnColor");
const colorFondo = document.getElementById("colorFondo");
const colorSpan = document.querySelector(".colorSpan");

const colores = ["green", 'yellow', 'blue', 'rgb(128, 34, 250)', '#01F2F3']

btnColor.addEventListener("click", () => {
    //colorFondo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    //colorFondo.style.backgroundColor = coloresRGB();
    //colorSpan.textContent = coloresRGB();

    //
    const numero = coloresArray();
    colorFondo.style.backgroundColor = colores[numero];
    colorSpan.textContent = colores[numero];

})

//Funcion con colores RGB

function coloresRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

//Funcion con colores extraidos del array

function coloresArray() {
    return Math.floor(Math.random() * colores.length)

}