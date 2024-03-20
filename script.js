
let textoOriginal = '';
document.getElementById('encodeBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const chave = 3; 
    const textoCriptografado = criptografarTexto(inputText, chave);
    document.getElementById('outputText').value = textoCriptografado;
});
document.getElementById('decodeBtn').addEventListener('click', function() {
    document.getElementById('outputText').value = textoOriginal;
});

document.getElementById('inputText').addEventListener('input', function() {
    textoOriginal = this.value;
});
document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência');
});
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
});
