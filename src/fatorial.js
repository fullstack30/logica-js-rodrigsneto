function fatorial(params) {
    if (isNaN(params) == false) {
        params = parseInt(params);
    }
    if (Number.isInteger(params) && params > 0) {

        let fator = 1;
        for (i = 1; i < params + 1; i++ ) {
            fator = fator * i;
        }
        return fator;
    }

    return "Função deve receber um argumento do tipo inteiro positivo.";
}