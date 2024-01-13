frase = "";

function hello() {

    if (typeof frase != "string") {
        frase = "World";
    }

}

return "Hello. " + frase + "!";