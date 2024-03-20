// Função para descriptografar o texto
function descriptografarTexto(texto, chave) {
    var descriptografado = "";
    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        if (char.match(/[a-z]/i)) {
            var code = texto.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) { 
                char = String.fromCharCode(((code - 65 - chave + 26) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) { 
                char = String.fromCharCode(((code - 97 - chave + 26) % 26) + 97);
            }
        } else if (char.match(/[0-9]/)) { // Se for um número
            char = String.fromCharCode((parseInt(char) - chave - 48 + 10) % 10 + 48);
        }
        descriptografado += char;
    }
    return descriptografado;
}
 

// Função para criptografar o texto
function criptografarTexto(texto, chave) {
    var criptografado = "";
    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        if (char.match(/[a-z]/i)) {
            var code = texto.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) { 
                char = String.fromCharCode(((code - 65 + chave) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + chave) % 26) + 97);
            }
        } else if (char.match(/[0-9]/)) { 
            char = String.fromCharCode((parseInt(char) + chave - 48 + 10) % 10 + 48);
        }
        criptografado += char;
    }
    return criptografado;
}