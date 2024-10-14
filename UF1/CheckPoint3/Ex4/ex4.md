## 🏋️‍♂️ Exercici 4 - Tauler d'Escacs (3 punts)

### Descripció:
Crea un script en JavaScript que generi una cadena de text (`string`) que representi una graella d'8 × 8, utilitzant salts de línia (`\n`) per separar les files. En cada posició de la graella hi haurà un espai o un caràcter `"#"`, formant un taulell d'escacs.

### Instruccions:
- **Únicament utilitza sentències d'iteració** (com ara un `for` o un `while`).
- Desenvolupa una solució **òptima** que eviti la repetició innecessària de codi.
- Alterna els caràcters `"#"` i espais per crear el patró d'un taulell d'escacs correcte.

### Output Esperat:
Quan passes aquesta cadena de text a `console.log`, s'hauria de mostrar un tauler d'escacs similar a aquest:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

### Especificacions dels Tests:
Els tests verificaràn les següents funcionalitats:

1. **Generació de la Graella:**
   - **Test 1:** El script ha de generar una cadena de text de 8 files, cadascuna amb 8 posicions alternant espais i `"#"`.
   - **Test 2:** Cada fila ha d'alternar el començament entre un espai i un `"#"`.
   - **Test 3:** Quan la cadena de text es passa a `console.log`, ha de mostrar un tauler d'escacs correcte, com l'exemple a continuació.

2. **Exemple d'Output:**
   - Quan s'executa el script, el resultat hauria de ser similar a aquest:
     ```
      # # # #
     # # # #
      # # # #
     # # # #
      # # # #
     # # # #
      # # # #
     # # # #
     ```

### Puntuació:
- **0 punts** si el programa no funciona o no s'ha fet ús de cap dels requisits.
- **1 punt** si s'ha utilitzat correctament una sentència d'iteració però no s'ha aconseguit el patró correcte o no s'ha optimitzat la solució.
- **2 punts** si s'ha utilitzat correctament una sentència d'iteració i s'ha creat el patró correcte però la solució no és la més òptima.
- **3 punts** si s'ha utilitzat correctament una sentència d'iteració i s'ha creat el patró correcte de manera òptima, evitant repeticions innecessàries i mantenint el codi net i eficient.