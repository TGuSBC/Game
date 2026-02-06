// guarda o id do jogo que o usuário clicou para devolver
let idSelecionado = null;

function alterarStatus(id) {

    // pega o card do jogo usando o id recebido no clique
    let gameEscolhido = document.getElementById(`jogo-${id}`);

    // pega a imagem do jogo
    let imagem = gameEscolhido.querySelector('img');

    // pega o botão (Alugar / Devolver)
    let botao = gameEscolhido.querySelector('.btn');

    // pega o nome do jogo (usado só para exibir, se precisar)
    let nomeJogo = gameEscolhido.querySelector('h2').textContent;

    // se o botão já estiver em "Devolver"
    if (botao.classList.contains('devolver')) {

        // guarda o id do jogo para usar depois no popup
        idSelecionado = id;

        // abre o popup de confirmação
        document.getElementById('overlay').style.display = "flex";

        // só para conferir no console se o id foi guardado
        console.log(idSelecionado);

        // para a função aqui (não altera nada ainda)
        return;
    }

    // se o jogo estiver alugado, devolve
    if (imagem.classList.contains('item-alugado')) {

        // remove aparência de alugado
        imagem.classList.remove('item-alugado');

        // volta o botão para estado "Alugar"
        botao.classList.remove('devolver');
        botao.textContent = 'Alugar';

    } else {
        // se não estiver alugado, aluga

        // deixa a imagem opaca
        imagem.classList.add('item-alugado');

        // muda o botão para "Devolver"
        botao.textContent = 'Devolver';
        botao.classList.add('devolver');
    }
}

function confirmarpopup() {

    // reencontra o jogo usando o id que foi guardado
    let game = document.getElementById(`jogo-${idSelecionado}`);

    // pega botão e imagem desse jogo específico
    let botao = game.querySelector('.btn');
    let imagem = game.querySelector('img');

    // confirma a devolução
    imagem.classList.remove('item-alugado');
    botao.classList.remove('devolver');
    botao.textContent = 'Alugar';

    // fecha o popup
    document.getElementById('overlay').style.display = 'none';

    // limpa o id para não reutilizar depois
    idSelecionado = null;
}

function recusarpopup(){

    // fecha o popup sem mudar o estado do jogo
    document.getElementById('overlay').style.display = 'none';

    // limpa o id guardado
    idSelecionado = null;
}


/*
RESUMO MENTAL DO FLUXO:

1) Clique no botão chama alterarStatus(id)

2) Se o botão já estiver em "Devolver":
   - guarda o id do jogo em idSelecionado
   - abre o popup de confirmação
   - para a função (return)
   - NÃO muda o estado ainda

3) Confirmar no popup:
   - usa idSelecionado para reencontrar o jogo
   - remove a classe item-alugado
   - muda botão para "Alugar"
   - fecha o popup
   - limpa idSelecionado

4) Recusar no popup:
   - apenas fecha o popup
   - NÃO altera o jogo
   - limpa idSelecionado

REGRA DE OURO:
- idSelecionado guarda um NÚMERO, não um elemento
- sempre reencontrar o jogo com: jogo-${id}
- HTML = estado inicial
- CSS = aparência
- JS = troca de classes
*/



