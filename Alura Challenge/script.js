function criptografar() {
    let inputText = document.getElementById('input-text').value;
    if(inputText ===''){
        document.getElementById("titulo_paragrafo").innerHTML = "Nenhuma mensagem foi encontrada";
        document.getElementById("sub_titulo_paragrafo").innerHTML = "Digite um texto que você deseja criptografar ou descriptografar.";

    }
    if (/[^a-z\s]/.test(inputText)) {
        alert('Apenas letras minúsculas e espaços são permitidos.');
        return;
    }
    let outputText = inputText.replace(/[a-z]/g, function(char) {
        
        document.getElementById("titulo_paragrafo").innerHTML = "Texto Criptografado com sucesso";
        document.getElementById("sub_titulo_paragrafo").innerHTML = "Clique Abaixo em copiar";

        return String.fromCharCode((char.charCodeAt(0) - 97 + 3) % 26 + 97);
    });

    document.getElementById('output-text').innerText = outputText;
}

function descriptografar() {
    let inputText = document.getElementById('input-text').value;
    if(inputText ===''){
        document.getElementById("sub_titulo_paragrafo").innerHTML = "Digite um texto que você deseja criptografar ou descriptografar.";

        document.getElementById("titulo_paragrafo").innerHTML = "Nenhuma mensagem foi encontrada";

    }
    if (/[^a-z\s]/.test(inputText)) {
        alert('Apenas letras minúsculas e espaços são permitidos.');
        return;
    }
    let outputText = inputText.replace(/[a-z]/g, function(char) {
          
        document.getElementById("titulo_paragrafo").innerHTML = "Texto Descriptografado com sucesso";
        document.getElementById("sub_titulo_paragrafo").innerHTML = "Clique Abaixo em copiar";
        return String.fromCharCode((char.charCodeAt(0) - 97 - 3 + 26) % 26 + 97);

    });
    
    document.getElementById('output-text').innerText = outputText;
}

function copiar() {
    let outputText = document.getElementById('output-text').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
}

