function fatorial(params) {
    if ((params < 0) || ((Number.isInteger(params) == false) && (isNaN(params) == false))) {
        return "Função deve receber um argumento do tipo inteiro positivo.";
    }
    params = parseInt(params);
    let fator = 1;
    for (i = 1; i < params + 1; i++ ) {
        fator = fator * i;
    }
    return fator;
}