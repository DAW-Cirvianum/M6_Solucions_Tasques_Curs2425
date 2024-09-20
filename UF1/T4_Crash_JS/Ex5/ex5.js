function calculaRegistreCursa(nom, edat, tipusRegistre){
    // Inicialitzem algunes variables
    let resultatInscripcio = false;
    let numeroCorredor;

    // Segons el tipus de registre que se'ns passi per paràmetre (anticipada o no anticipada), establim "true" o "false" al valor de la variable
    tipusRegistre == "anticipada" ? inscripcio = true : inscripcio = false;

    // Segons l'edat que tingui, realitzem una acció o una altra
    if (edat > 18){
        inscripcio ? hora = "9:30 A.M" : hora = "11:00 A.M"; // Segons si el registre és anticipat (true) o no (false)
        numeroCorredor = Math.floor(Math.random() * (5000 - 1000) + 1000); // Creem un número de corredor d'entre 1000 (inclós) i 5000
        resultatInscripcio = true; // Establim el resultat de la inscripció a "true" conforme ha sigut possible registrar el corredor a la cursa
    } else if  (edat < 18){ // Si l'edat és inferior a 18 anys
        hora = "12:30 P.M"; // Establim una hora per defecte per la cursa
        numeroCorredor = Math.floor(Math.random() * (999)); // Creem un número de corredor fins a 999 (inclós)
        resultatInscripcio = true; // Establim el resultat de la inscripció a "true"
    } else { // En cas que tingui 18 anys exactes (o introdueixi un altre valor)
        resultatInscripcio = false; // Establim el resultat de la inscripció com a "false"
    }
    // Retornem el resultat de la inscripció formatejant la sortida per pantalla amb els valors de les variables
    return(resultatInscripcio ? `Nom: ${nom} | Edat: ${edat} | L'hora de la teva cursa és a les: ${hora} amb número de corredor: ${numeroCorredor}` : `Atenció, ${nom}, dirigeix-te al punt d'informació per inscriure't a la cursa!`);
}

console.log(calculaRegistreCursa("Antonio", 21, "anticipada"));
console.log(calculaRegistreCursa("Pepe", 18, "no-anticipada"));
console.log(calculaRegistreCursa("Alberto", 14, "no-anticipada"));
console.log(calculaRegistreCursa("Carles", 12, "anticipada"));