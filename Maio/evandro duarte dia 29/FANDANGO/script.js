const toggleButton =
document.getElementById("toggleLight");
const body = document.body;
const lampada = document.getElementById("lampada");

let LuzLigada = false;

toggleButton.addEventListener("click", () => {
    LuzLigada = !LuzLigada;

    if(LuzLigada) {
        body.classList.add("luz-ativa");
        toggleButton.textContent = " Desligar ";
    } else {
        body.classList.remove("luz-ativa");
        toggleButton.textContent = "ligar";
    }

});