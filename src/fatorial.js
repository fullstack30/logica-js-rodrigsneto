function fatorial(params) {
    if (Number.isInteger(params) && params > 0 || (isNaN(params) == false)) {
        params = parseInt(params);

        let fator = 1;
        for (i = 1; i < params + 1; i++ ) {
            fator = fator * i;
        }
        return fator;
    }

    return "Função deve receber um argumento do tipo inteiro positivo.";
}