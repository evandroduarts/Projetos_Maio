let display = document.getElementById('display');
let operadorAtual = null;
let primeiroNumero = null;
let operadorPressed = false;
let calculationDone = false;

function inserirNumero(numero) {
    if (operadorPressed || calculationDone) {
        display.value = '';
        operadorPressed = false;
        calculationDone = false;
    }
    display.value += numero;
}

function inserirOperador(operador) {
    if (display.value === '' && primeiroNumero === null) return;

    if (primeiroNumero !== null && !operadorPressed) {
        calcular();
    }
    primeiroNumero = parseFloat(display.value);
    operadorAtual = operador;
    operadorPressed = true;
    calculationDone = false;
}

function inserirDecimal() {
    if (operadorPressed || calculationDone) {
        display.value = '0.';
        operadorPressed = false;
        calculationDone = false;
    } else if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function limparDisplay() {
    display.value = '';
    primeiroNumero = null;
    operadorAtual = null;
    operadorPressed = false;
    calculationDone = false;
}

function apagarUltimo() {
    if (operadorPressed || calculationDone) {
        return;
    }
    display.value = display.value.slice(0, -1);
}

function calcular() {
    if (primeiroNumero === null || operadorAtual === null || display.value === '') return;

    let segundoNumero = parseFloat(display.value);
    let resultado;

    if (operadorAtual === '+') {
        resultado = primeiroNumero + segundoNumero;
    } else if (operadorAtual === '-') {
        resultado = primeiroNumero - segundoNumero;
    } else if (operadorAtual === '*') {
        resultado = primeiroNumero * segundoNumero;
    } else if (operadorAtual === '/') {
        if (segundoNumero === 0) {
            resultado = 'Erro: Divisão por zero!';
        } else {
            resultado = primeiroNumero / segundoNumero;
        }
    } else {
        resultado = 'Erro!';
    }

    display.value = resultado;
    primeiroNumero = null;
    operadorAtual = null;
    operadorPressed = false;
    calculationDone = true;
}