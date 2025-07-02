const inputMensagem = document.getElementById("inputMensagem");
const mensagem = document.getElementById("mensagem");
const velocidade = document.getElementById("velocidade");
const valorVelocidade = document.getElementById("valorVelocidade");
const toggleTheme = document.getElementById("toggleTheme");

inputMensagem.addEventListener("input", () => {
    mensagem.textContent = inputMensagem.value || "Sua mensagem aparecerá aqui";
});

velocidade.addEventListener("input", () => {
    const tempo = velocidade.value;
    valorVelocidade.textContent = `${tempo}s`;
    mensagem.style.animationDuration = `${tempo}s`;
});

toggleTheme.addEventListener("click", () => {
    const modoEscuroAtivo = document.body.classList.toggle("dark");
    toggleTheme.textContent = modoEscuroAtivo ? "Modo Claro" : "Modo Escuro";
});

mensagem.style.animationDuration = `${velocidade.value}s`;

