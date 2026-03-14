// Pegando elementos do HTML
const output = document.getElementById("output");
const lengthInput = document.getElementById("charsNumber");
const includeNumbers = document.getElementById("incluideNumbers");
const includeSymbols = document.getElementById("incluideSymbols");
const button = document.getElementById("gerarSenha");
const btnCopy = document.getElementById('btnCopy')

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_[]{}|;:,.<>?";

function gerarSenha() {
  let chars = letters;

  if (includeNumbers.checked) chars += numbers;
  if (includeSymbols.checked) chars += symbols;

  let senha = "";
  const length = parseInt(lengthInput.value);

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    senha += chars[index];
  }

  output.value = senha;
}

button.addEventListener("click", gerarSenha);

btnCopy.addEventListener('click', function() {
    output.select()
    output.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(output.value)
        .then(function() {alert("Senha Copiada!")})
        .catch(function(err) {console.error("Erro ao copiar:", err)})
})