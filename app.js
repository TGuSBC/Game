let idSelecionado = null;

function alterarStatus(id) {
    let gameEscolhido = document.getElementById(`jogo-${id}`);
    let imagem = gameEscolhido.querySelector('img');
    let botao = gameEscolhido.querySelector('.btn');
    let nomeJogo = gameEscolhido.querySelector('h2').textContent;
    let container = document.querySelector('.tableLog');
    let p = document.createElement('p');

    if (botao.classList.contains('devolver')) {
        idSelecionado = id;
        document.getElementById('popuptext').textContent = `Tem certeza que deseja devolver o ${nomeJogo}?`;
        document.getElementById('overlay').style.display = "flex"; 
        return;    
    }

    if(imagem.classList.contains('item-alugado')){
        imagem.classList.remove('item-alugado');
         botao.classList.remove('devolver');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('item-alugado');
        botao.textContent = 'Devolver'
        botao.classList.add('devolver');
        
        p.innerText = `${nomeJogo}`
        container.prepend(p);
    }
}

function confirmarpopup() {
    let game = document.getElementById(`jogo-${idSelecionado}`);
    let botao = game.querySelector('.btn');
    let imagem = game.querySelector('img');

    imagem.classList.remove('item-alugado');
    botao.classList.remove('devolver');
    botao.textContent = 'Alugar';

    document.getElementById('overlay').style.display = 'none';
    idSelecionado = null;
}

function recusarpopup(){
    document.getElementById('overlay').style.display = 'none';  
    idSelecionado = null;
}
















