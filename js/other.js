$(document).ready(function() {
    var palabras = ["web designer", "backend dev"];
    var indice = 0;
    var divTexto = $("#textoDinamico");

    function mostrarPalabras() {
        divTexto.fadeOut(1000, function() {
            divTexto.text(palabras[indice]).fadeIn(1000);
        });
        indice++;

        if (indice >= palabras.length) {
            indice = 0;
        }
    }

    setInterval(mostrarPalabras, 6000); // Cambia cada 6 segundos (3 segundos para fade out, 3 segundos para fade in)
});



