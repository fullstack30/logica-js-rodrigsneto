function vogais(params) {
    if(typeof params == 'string') {
        var string = params.split('');
        var vogais = string.filter(caracter => /[aàáâãeéêèiíìoòõóôuúùûçAÀÁÂÃEÉÈÊIÍÌOÓÒÔÕUÇ]/.test(caracter));

        return vogais.length;
    }

    return "Função aceita apenas string como argumento.";
