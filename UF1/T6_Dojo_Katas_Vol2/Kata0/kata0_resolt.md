Aquí tens els codis que responen a cada un dels exercicis:

---

### **String:**

1. **Escriu una funció que accepti dos strings com a arguments (nom i cognom) i retorni una cadena amb el nom complet en majúscules i els cognoms en minúscules.**

   ```javascript
   function formatarNom(nom, cognom) {
     const nomMajuscules = nom.toUpperCase();
     const cognomMinuscules = cognom.toLowerCase();
     return `${nomMajuscules} ${cognomMinuscules}`;
   }

   // Exemple d'ús:
   console.log(formatarNom("Joan", "GARCIA")); // Output: "JOAN garcia"
   ```

2. **Escriu una funció que accepti un paràgraf i retorni un array de paraules separades.**

   ```javascript
   function paraulesDelParagraf(paragraf) {
     return paragraf.split(' ');
   }

   // Exemple d'ús:
   console.log(paraulesDelParagraf("Això és un paràgraf d'exemple."));
   // Output: ["Això", "és", "un", "paràgraf", "d'exemple."]
   ```

3. **Escriu una funció que accepti una frase i retorni només els 5 primers caràcters.**

   ```javascript
   function cincPrimersCaracters(frase) {
     return frase.slice(0, 5);
   }

   // Exemple d'ús:
   console.log(cincPrimersCaracters("Hola, món!")); // Output: "Hola,"
   ```

---

### **Number:**

1. **Escriu una funció que accepti un número decimal i el retorni arrodonit a dues decimals.**

   ```javascript
   function arrodonirADosDecimals(numero) {
     return Number(numero.toFixed(2));
   }

   // Exemple d'ús:
   console.log(arrodonirADosDecimals(3.14159)); // Output: 3.14
   ```

2. **Escriu una funció que prengui dues cadenes (una conté un enter, l'altra un decimal) i les converteixi al seu tipus numèric corresponent.**

   ```javascript
   function convertirNumeros(enterStr, decimalStr) {
     const enter = parseInt(enterStr, 10);
     const decimal = parseFloat(decimalStr);
     return { enter, decimal };
   }

   // Exemple d'ús:
   console.log(convertirNumeros("42", "3.14")); // Output: { enter: 42, decimal: 3.14 }
   ```

3. **Escriu una funció que accepti un número en forma de cadena i el multipliqui per 10 després de convertir-lo a nombre.**

   ```javascript
   function multiplicarPerDeu(numeroStr) {
     const numero = Number(numeroStr);
     return numero * 10;
   }

   // Exemple d'ús:
   console.log(multiplicarPerDeu("5")); // Output: 50
   ```

---

### **Boolean:**

1. **Escriu una funció que accepti una cadena i retorni `true` si la cadena no està buida i `false` si ho està.**

   ```javascript
   function cadenaNoBuida(cadena) {
     return cadena.length > 0;
   }

   // Exemple d'ús:
   console.log(cadenaNoBuida("Hola")); // Output: true
   console.log(cadenaNoBuida(""));     // Output: false
   ```

2. **Escriu una funció que accepti diferents valors (númerics, strings, etc.) i retorni el seu equivalent booleà.**

   ```javascript
   function convertirABoolean(valor) {
     return Boolean(valor);
   }

   // Exemple d'ús:
   console.log(convertirABoolean(0));      // Output: false
   console.log(convertirABoolean("Hola")); // Output: true
   console.log(convertirABoolean(null));   // Output: false
   ```

3. **Escriu una funció que comprovi si un número és positiu, retornant `true` si ho és i `false` si és negatiu o zero.**

   ```javascript
   function esPositiu(numero) {
     return numero > 0;
   }

   // Exemple d'ús:
   console.log(esPositiu(10));  // Output: true
   console.log(esPositiu(-5));  // Output: false
   console.log(esPositiu(0));   // Output: false
   ```

---

### **Date:**

1. **Escriu una funció que retorni la data i hora actual.**

   ```javascript
   function dataIHoraActual() {
     return new Date();
   }

   // Exemple d'ús:
   console.log(dataIHoraActual()); // Output: Data i hora actual
   ```

2. **Escriu una funció que prengui dues dates com a cadenes en format ISO (`YYYY-MM-DD`) i calculi el nombre de dies entre aquestes dates.**

   ```javascript
   function diesEntreDates(data1Str, data2Str) {
     const data1 = new Date(data1Str);
     const data2 = new Date(data2Str);
     const diferènciaTemps = Math.abs(data2 - data1);
     const milisegonsPerDia = 1000 * 60 * 60 * 24;
     return Math.floor(diferènciaTemps / milisegonsPerDia);
   }

   // Exemple d'ús:
   console.log(diesEntreDates("2023-10-01", "2023-10-14")); // Output: 13
   ```

3. **Escriu una funció que accepti una data i retorni el nom del dia de la setmana corresponent.**

   ```javascript
   function nomDelDia(dataStr) {
     const diesSetmana = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'];
     const data = new Date(dataStr);
     return diesSetmana[data.getDay()];
   }

   // Exemple d'ús:
   console.log(nomDelDia("2023-10-14")); // Output: "Dissabte"
   ```

---

### **Math:**

1. **Escriu una funció que generi un número aleatori entre 1 i 100, i després l'arrodoneixi a l'enter més proper.**

   ```javascript
   function numeroAleatoriArrodonit() {
     return Math.round(Math.random() * 99) + 1;
   }

   // Exemple d'ús:
   console.log(numeroAleatoriArrodonit()); // Output: un número enter entre 1 i 100
   ```

2. **Escriu una funció que accepti un número i retorni la seva arrel quadrada.**

   ```javascript
   function arrelQuadrada(numero) {
     return Math.sqrt(numero);
   }

   // Exemple d'ús:
   console.log(arrelQuadrada(9));  // Output: 3
   console.log(arrelQuadrada(16)); // Output: 4
   ```

3. **Escriu una funció que calculi l'àrea d'un cercle donat el radi.**

   ```javascript
   function areaCercle(radi) {
     return Math.PI * Math.pow(radi, 2);
   }

   // Exemple d'ús:
   console.log(areaCercle(5)); // Output: 78.53981633974483
   ```

---

### **RegExp:**

1. **Escriu una funció que comprovi si una cadena conté números.**

   ```javascript
   function conteNumeros(cadena) {
     return /\d/.test(cadena);
   }

   // Exemple d'ús:
   console.log(conteNumeros("Hola123")); // Output: true
   console.log(conteNumeros("Hola"));    // Output: false
   ```

2. **Escriu una funció que reemplaci totes les vocals d'una cadena amb un asterisc `*`.**

   ```javascript
   function reemplaçarVocals(cadena) {
     return cadena.replace(/[aeiouàèéíòóúü]/gi, '*');
   }

   // Exemple d'ús:
   console.log(reemplaçarVocals("Això és una prova")); // Output: "*ix* *s *n* pr*v*"
   ```

3. **Escriu una funció que accepti una cadena i comprovi si aquesta cadena comença amb una lletra majúscula.**

   ```javascript
   function comencaAmbMajuscula(cadena) {
     return /^[A-ZÀÈÉÍÒÓÚÜ]/.test(cadena);
   }

   // Exemple d'ús:
   console.log(comencaAmbMajuscula("Hola")); // Output: true
   console.log(comencaAmbMajuscula("hola")); // Output: false
   ```

---

### **Function:**

1. **Escriu una funció que accepti una altra funció com a argument i l'executi dins del seu cos.**

   ```javascript
   function executarFuncio(func) {
     func();
   }

   // Exemple d'ús:
   function salutacio() {
     console.log("Hola!");
   }

   executarFuncio(salutacio); // Output: "Hola!"
   ```

2. **Escriu una funció que retorni una altra funció, que simplement mostri un missatge.**

   ```javascript
   function crearFuncio() {
     return function() {
       console.log("Aquest és un missatge de la funció retornada.");
     };
   }

   // Exemple d'ús:
   const funcioRetornada = crearFuncio();
   funcioRetornada(); // Output: "Aquest és un missatge de la funció retornada."
   ```

3. **Escriu una funció que accepti dues funcions com a arguments i cridi cada una d'elles successivament.**

   ```javascript
   function cridarDuesFuncions(func1, func2) {
     func1();
     func2();
   }

   // Exemple d'ús:
   function primeraFuncio() {
     console.log("Primera funció cridada.");
   }

   function segonaFuncio() {
     console.log("Segona funció cridada.");
   }

   cridarDuesFuncions(primeraFuncio, segonaFuncio);
   // Output:
   // "Primera funció cridada."
   // "Segona funció cridada."
   ```

---

### **JSON:**

1. **Escriu una funció que accepti un objecte JavaScript i el converteixi a una cadena JSON.**

   ```javascript
   function objecteAJson(objecte) {
     return JSON.stringify(objecte);
   }

   // Exemple d'ús:
   const persona = { nom: "Joan", edat: 30 };
   console.log(objecteAJson(persona)); // Output: '{"nom":"Joan","edat":30}'
   ```

2. **Escriu una funció que accepti una cadena JSON i la converteixi en un objecte JavaScript.**

   ```javascript
   function jsonAObjecte(jsonStr) {
     return JSON.parse(jsonStr);
   }

   // Exemple d'ús:
   const jsonString = '{"nom":"Maria","edat":25}';
   console.log(jsonAObjecte(jsonString)); // Output: { nom: 'Maria', edat: 25 }
   ```

3. **Escriu una funció que agafi un array d'objectes i el converteixi a una cadena JSON.**

   ```javascript
   function arrayAJson(array) {
     return JSON.stringify(array);
   }

   // Exemple d'ús:
   const persones = [
     { nom: "Anna", edat: 28 },
     { nom: "Pere", edat: 35 }
   ];
   console.log(arrayAJson(persones)); // Output: '[{"nom":"Anna","edat":28},{"nom":"Pere","edat":35}]'
   ```

---

Espero que aquests codis responguin als teus exercicis. Si tens alguna pregunta o necessites més aclariments, no dubtis a preguntar.