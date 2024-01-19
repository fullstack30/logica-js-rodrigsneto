function inverte_lista(array) {
    if (array instanceof Array === false || array.length === 0) {
        return "Argumento inválido. Função espera receber um array como argumento.";
    }

    return array.reverse(array);
}