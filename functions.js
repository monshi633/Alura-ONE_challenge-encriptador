let input = document.getElementById("input-text");
let output = document.getElementById("output-text");

function onlyContainsLowercase(str) {
    return /^[a-z/ /:;,.¿?¡!]+$/.test(str);
}

function encrypt() {
    const chars = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"        
    }

    if (onlyContainsLowercase(input.value)) {
        let encriptedText = input.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }
}

function desencrypt() {
    const chars = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
        }

    if (onlyContainsLowercase(input.value)) {
        let desencriptedText = input.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }
}

function copy() {

}