const inputMensagem = document.getElementById("inputMensagem");
const mensagem = document.getElementById("mensagem");
const velocidade = document.getElementById("velocidade");
const valorVelocidade = document.getElementById("valorVelocidade");
const toggleTheme = document.getElementById("toggleTheme");

// Atualiza o texto conforme o usuário digita
inputMensagem.addEventListener("input", () => {
  mensagem.textContent = inputMensagem.value || "Sua mensagem aqui";
});

// Atualiza a velocidade da animação
velocidade.addEventListener("input", () => {
  const tempo = velocidade.value;
  valorVelocidade.textContent = `${tempo}s`;
  mensagem.style.animationDuration = `${tempo}s`;
});

// Alterna o tema
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Inicialização
mensagem.textContent = inputMensagem.value || "Sua mensagem aqui";
mensagem.style.animationDuration = `${velocidade.value}s`;

