function soma(a, b) {
    if(n2 === "" || n2 === undefined || n2 === null || isNaN(n1) || isNaN(n2)) {
        return "Parâmetros inválidos!";
    }

    if (typeof n1 === "string" || typeof n2 === 'string') {
        return Number(n1) + Number(n2);
    }

}

console.log(soma(1, 2));