function soma_impar(x) {
    if (isNaN(x) === false) {
        return "Função aceita apenas números inteiros positivos.";
    }

    let soma_final = 0;
    

    for(var i = 0; i < (x+1); i++) {

        if (i%2 != 0) {
            soma_final += i;
        }

    }

    return soma_final;

}