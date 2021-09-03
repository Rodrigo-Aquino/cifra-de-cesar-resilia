var formBase = document.getElementById("baseenvio")
formBase.addEventListener("submit", function(event) {
    event.preventDefault();
    return funfandoBase64();

})

function funfandoBase64() {

    var dadoBase = document.getElementById("inputbasemq").value
    if (document.getElementById('codificarbase').checked) {
        outputBase.innerHTML = atob(dadoBase);
    } else if (document.getElementById("decodificarbase").checked) {
        outputBase.innerHTML = btoa(dadoBase);
    }
}