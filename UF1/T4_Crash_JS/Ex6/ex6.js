function nombrePrimer(numero){

    if (numero <= 1) {
        return false; // Els nombres menors o iguals a 1 no són primers
    }

    // Comprovem si el nombre és divisible per qualsevol nombre entre 2 i la seva arrel quadrada
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si és divisible, no és primer
        }
    }
    return true; // Si no es pot dividir per cap nombre entre 2 i la seva arrel quadrada, és primer   
}

let numero = 5;
let resultNombrePrimer = nombrePrimer(numero);
console.log(`El número ${numero} ${resultNombrePrimer ? "SI" : "NO"} és un nombre primer...`);