function cambiarTema() {

    document.body.classList.toggle("dark");

}

function mostrarMas() {

    let texto = document.getElementById("extra");

    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }

}
