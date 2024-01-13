function soma(a, b) {
    if(b === "" || b === undefined || b === null || isNaN(a) || isNaN(b)) {
        return "Parâmetros inválidos!";
    }

    if (typeof a === "string" || typeof b === 'string') {
        return Number(a) + Number(b);
    }


    return Number(a) + Number(b);

}

console.log(soma(1, 2));