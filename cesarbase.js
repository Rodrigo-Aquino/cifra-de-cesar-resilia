/*function mudandoCod() {
    if (document.getElementById("EscolhaCode").value == "cesar") {
        document.getElementById("cesar").style.display = "flex";
        document.getElementById("base64").style.display = "none";

    } else if (document.getElementById("EscolhaCode").value == "base64") {
        document.getElementById("base64").style.display = "flex";
        document.getElementById("cesar").style.display = "none";
    }




}/** */


var formCesar = document.getElementById("cifrador")
formCesar.addEventListener("submit", function(event) {
    event.preventDefault();
    return cifraCesar();

})



function cifraCesar() {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letra = document.getElementById('input-original').value.toUpperCase();
    var key = document.getElementById('rango').value
    var keyN = Number(key)

    /*if (document.getElementById('decifrador').checked) {
        keyN = keyN * (-1)
    }
    /*if (letra == " " | Number(letra)) {
        alert("A codificação não aceita espaço nem numero")
    }/** */
    var resultado = ""
    for (i = 0; i < letra.length; i++) {
        var posicaoDaLetraNoAlfabeto = letra.charCodeAt(i) - 64; //Identifica qual letra é do alfabeto
        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + keyN) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
        console.log(keyN)
        resultado += alfabeto[letraComDeslocamento - 1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.                    
        document.getElementById("resultado").innerHTML = resultado;
        // alert(resultado)
    }
}



var formCesar = document.getElementById("decifrador")
formCesar.addEventListener("submit", function(event) {
    event.preventDefault();
    return decifraCesar();

})



function decifraCesar() {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letra = document.getElementById('input-secundario').value.toUpperCase();
    var key = document.getElementById('rango').value
    var keyN = Number(key)
    let conserto = keyN * (-1)
    /*if (document.getElementById('decifrador').checked) {
        keyN = keyN * (-1)
    }
    /*if (letra == " " | Number(letra)) {
        alert("A codificação não aceita espaço nem numero")
    }/** */
    var resultado = ""
    for (i = 0; i < letra.length; i++) {
        var posicaoDaLetraNoAlfabeto = letra.charCodeAt(i) - 64; //Identifica qual letra é do alfabeto
        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + conserto ) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
        console.log(keyN)
        resultado += alfabeto[letraComDeslocamento - 1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.                    
        document.getElementById("resultado2").innerHTML = resultado;
        // alert(resultado)
    }
}

var formBase = document.getElementById("baseEnvio")
formBase.addEventListener("submit", function(event) {
    event.preventDefault();
    return funfandoBase64();

})

function funfandoBase64() {

    var dadoBase = document.getElementById("inputBase64").value
    if (document.getElementById('codificarBase').checked) {
        outputBase.innerHTML = atob(dadoBase);
    } else if (document.getElementById("decodificarBase").checked) {
        outputBase.innerHTML = btoa(dadoBase);
    }
}