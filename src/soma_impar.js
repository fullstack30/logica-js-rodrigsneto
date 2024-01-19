function soma_impar(x) {

    if (isNaN(x) === true || Math.sign(x) === -1 || Number.isInteger(x) == false) {
        return "Função aceita apenas números inteiros positivos.";
    } 
    
    
    x = parseInt(x);
    let soma_final = 0;
    
    for(var i = 0; i < (x+1); i++) {

        if (i%2 != 0) {
            soma_final += i;
        }
        
    }

    return soma_final;

}