const resultEl = document.getElementById("passwordResult");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("includeUppercase");
const lowercaseEl = document.getElementById("includeLowercase");
const numberEl = document.getElementById("includeNumbers");
const symbolEl = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");


const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersLower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%*()_+-=[]{},.<>?/";


generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);


function generatePassword() {
  const length = parseInt(lengthEl.value);
  let chars = "";
  if (uppercaseEl.checked) chars += lettersUpper;
  if (lowercaseEl.checked) chars += lettersLower;
  if (numberEl.checked) chars += numbers;
  if (symbolEl.checked) chars += symbols;


  if (chars === "") {
    resultEl.value = "Selecione ao menos 1 opção!";
    return;
  }


  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }


  resultEl.value = password;
}


function copyToClipboard() {
  if (resultEl.value && resultEl.value !== "Selecione ao menos 1 opção!") {
    navigator.clipboard.writeText(resultEl.value).then(() => {
      alert("Senha copiada para a área de transferência!");
    });
  }
}
