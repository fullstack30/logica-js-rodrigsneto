function fatorial(params) {
    params = isNaN(params) == false ? parseInt(params) : false;

    if ((params < 0) || (Number.isInteger(params) == false)) {
        return "Função deve receber um argumento do tipo inteiro positivo.";
    }

    let fator = 1;
    
    for (i = 1; i < params + 1; i++ ) {
        fator = fator * i;
    }
    return fator;
}