const input = document.getElementById("input-text");
const output = document.getElementById("output-text");
const button = document.querySelectorAll("button");

function onlyContainsLowercase(str) {
    return /^[a-z0-9/ /ñ:;,.¿?¡!]+$/.test(str);
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

    document.getElementById("paste").style.display = "none";
}

function encryptMurcielago() {
    const chars = {
    "m": "0",
    "u": "1",
    "r": "2",
    "c": "3",
    "i": "4",
    "e": "5",
    "l": "6",
    "a": "7",
    "g": "8",
    "o": "9"
    }

    if (onlyContainsLowercase(input.value)) {
        let encriptedText = input.value.replace(/[murcielago]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
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

    document.getElementById("paste").style.display = "none";
}

function desencryptMurcielago() {
    const chars = {
        "0": "m",
        "1": "u",
        "2": "r",
        "3": "c",
        "4": "i",
        "5": "e",
        "6": "l",
        "7": "a",
        "8": "g",
        "9": "o"
        }

    if (onlyContainsLowercase(input.value)) {
        let desencriptedText = input.value.replace(/[0-9]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function copy() {
    let copyText = output.innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("paste").style.display = "block";
}

function paste() {
    navigator.clipboard
        .readText()
        .then((clipText) => (input.value = clipText));
}

button.forEach(element => element.addEventListener("click", (event) => {
    element.classList.add("pulse");
    setTimeout(function() {
        element.classList.remove("pulse");
    }, 800);
}));