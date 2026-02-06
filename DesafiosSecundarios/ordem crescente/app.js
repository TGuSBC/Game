function ordenarCrescente(a, b, c) {

    // Colocamos os números dentro de um array
    let numeros = [a, b, c];

    // Ordena o array em ordem crescente
    numeros.sort(function(x, y) {
        return x - y;
    });

    // Retorna os números ordenados
    return numeros; //nunca deixar o return sozinho, retorna undefined
}

let n1 = Number(prompt(''));
let n2 = Number(prompt(''));
let n3 = Number(prompt(''));

let resultado = ordenarCrescente(n1, n2, n3);

alert(resultado);


// versao do curso alura
// function ordenarNumeros(a, b, c) {
//     const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
//     console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
// }

// Exemplo de uso:
// ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"


