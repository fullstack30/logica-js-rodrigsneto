function inverte_lista(array) {
    if (array instanceof Array === false) {
        return "Argumento inválido. Função espera receber um array como argumento.";
    }

    return array.reverse(array);
}

let bolo = [
    'ovo',
    'farinha',
    'leite',
    'fermento',
    'margarina',
    'açucar'
]

console.log(inverte_lista([]));