// 1️⃣ Entrada do usuário
let palavra = window.prompt("Digite uma palavra ou frase:");

// 2️⃣ Função que verifica se é palíndromo
function ePalindromo(texto) {

    // 3️⃣ Normalização da string
    let normalizada = texto
        .toLowerCase() // deixa tudo minúsculo
        .normalize('NFD') // separa letras dos acentos (á → a + ´)
        .replace(/[\u0300-\u036f]/g, "") // remove os acentos
        .replace(/[^a-z]/g, ""); // remove tudo que não for letra (espaços, pontuação, etc.)

    // 4️⃣ Inverte a string normalizada
    let invertida = normalizada
        .split("") // transforma em array de letras
        .reverse() // inverte o array
        .join(""); // junta tudo de novo em uma string

    // 5️⃣ Comparação
    return normalizada === invertida;
}

// 6️⃣ Chamada da função e exibição do resultado
if (ePalindromo(palavra)) {
    console.log("É um palíndromo");
} else {
    console.log("Não é um palíndromo");
}




// Video para tentar aprender sa bosta
//https://cursos.alura.com.br/extra/alura-mais/funcoes-no-javascript-que-voce-precisa-conhecer-c1503//