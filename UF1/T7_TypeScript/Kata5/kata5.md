### Kata5: Caràcters Extra en una Cadena

**Descripció del problema:**

Tens una cadena de text `s` i un diccionari de paraules `dictionary`. L'objectiu és dividir la cadena `s` en una o més subcadenes no superposades, de manera que cada subcadena aparegui en el diccionari. Pot ser que alguns caràcters de `s` no formin part de cap subcadena vàlida.

Has de trobar el nombre mínim de caràcters sobrants que no poden ser utilitzats com a part de cap subcadena vàlida del diccionari.

**Exemples:**

- **Exemple 1:**

    ``` 
    Entrada: 
    s = "leetscode", 
    dictionary = ["leet", "code", "leetcode"]
    
    Sortida: 
    1
    
    Explicació: 
    Podem dividir `s` en dues subcadenes: "leet" (índexs 0 a 3) i "code" (índexs 5 a 8). El caràcter a l'índex 4 ('s') no forma part de cap subcadena vàlida, per tant retornem 1.
    ```

- **Exemple 2:**

    ```
    Entrada: 
    s = "sayhelloworld", 
    dictionary = ["hello", "world"]
    
    Sortida: 
    3
    
    Explicació: 
    Podem dividir `s` en dues subcadenes: "hello" (índexs 3 a 7) i "world" (índexs 8 a 12). Els caràcters als índexs 0, 1 i 2 ('say') no poden ser utilitzats, per tant retornem 3.
    ```

**Requeriments:**

- Escriu una funció que accepti dos paràmetres:
  - Una cadena de text `s`.
  - Un diccionari de paraules `dictionary`.
  
- La funció ha de retornar el nombre mínim de caràcters sobrants que no formen part de cap subcadena vàlida del diccionari.

**Detalls:**

- **Entrada:**
  - `s` és una cadena de com a màxim 50 caràcters.
  - `dictionary` és un conjunt de paraules, cadascuna de com a màxim 50 caràcters, i el diccionari pot contenir fins a 50 paraules.

- **Sortida:** 
  - Un nombre enter que indica el mínim nombre de caràcters de `s` que no poden ser utilitzats en cap subcadena vàlida.

---