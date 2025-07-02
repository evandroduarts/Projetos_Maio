const imagens = ['imagens/POPULAR.JPG',
    'imagens/imagem2.png', 'imagens/imagem3.jpg'];
    let indiceAtual = 0;
    const imagemElemento = document.getElementById('imagemAtual');
    const botaoAnterior = document.getElementById('anterior');
    const botaoProxima = document.getElementById('proxima');

    function atualizarImagem() {
        imagemElemento.src = imagens[indiceAtual];
    }

    function mostrarProximaImagem() {
        if (indiceAtual < imagens.lenght - 1) {
            indiceAtual++;
        } else {
            indiceAtual = 0;
        }
        atualizarImagem();
    }

    function mostrarImagemAnterior() {
        if (indiceAtual > 0) {
            indiceAtual--;
        } else {
            indiceAtual = imagens.lenght - 1;
        }
        atualizarImagem();
    }

    botaoProxima.addEventListener('click', mostrarProximaImagem);
    botaoAnterior.addEventListener('click', mostrarImagemAnterior);


    atualizarImagem();
