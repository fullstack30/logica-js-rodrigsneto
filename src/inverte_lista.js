function inverte_lista(array) {
    if (Array.isArray(array) === false || array.length === 0) {
        return "Argumento inválido. Função espera receber um array como argumento.";
    }

    return array.reverse(array);
}

let novo_array = [
    'arroz', 'feijao', 'bife', 'macarrao'
]