//Tienen parametros para dar argumentos y retorna o no un resultado esperado
//Las funciones flecha sirven para ahorrar código

function sumar(n1,n2) {
    return n1 + n2;
}

const sumar2 = (n1,n2) => {
    return n1+n2
}

const regresaString = () => "Hola mundo!"

sumar2(7,5);