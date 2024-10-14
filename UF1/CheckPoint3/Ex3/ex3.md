## 💻 Exercici 3: Convertidor de Temps (JavaScript) (1 punt)

### Descripció:
Crea una funció en JavaScript que, donada una data proporcionada per l'usuari, calcula el temps restant fins a aquesta data. La funció ha de determinar si la data és en el futur o si ja ha passat i retornar una frase que indiqui el temps restant en anys, mesos, dies, hores i minuts, o indicar que la data ja ha passat.

### Funció a implementar:

1. **`calculateTimeLeft(targetDate)`**
  - **Objectiu:** Calcular el temps restant fins a una data especificada i retornar una frase descriptiva.
  - **Instruccions:**
    - Implementa una funció que rep `targetDate` com a paràmetre en format de cadena (`YYYY-MM-DD HH:MM:SS`).
    - Utilitza l'objecte predefinit `Date` per obtenir la data i l'hora actual i per convertir `targetDate` a un objecte `Date`.
    - Calcula la diferència entre `targetDate` i la data actual en mil·lisegons.
    - Si `targetDate` és en el futur:
     - Converteix la diferència en anys, mesos, dies, hores i minuts.
     - Retorna una frase que detalli el temps restant, per exemple: `"Falten 1 any, 2 mesos, 3 dies, 4 hores i 5 minuts per arribar a la data especificada."`
    - Si `targetDate` és en el passat:
     - Retorna la frase `"La data especificada ja ha passat."`
    - Si `targetDate` no és una data vàlida, retorna `"Data invàlida."`

### Especificacions dels Tests:
Els tests verificaràn les següents funcionalitats:

1. **Funció `calculateTimeLeft`:**
  - **Test 1:** Passar una `targetDate` en el futur, per exemple, `"2030-01-01 00:00:00"`, ha de retornar una frase detallant el temps restant fins a aquesta data en anys, mesos, dies, hores i minuts.
  - **Test 2:** Passar una `targetDate` en el passat, per exemple, `"2000-01-01 00:00:00"`, ha de retornar `"La data especificada ja ha passat."`
  - **Test 3:** Passar una `targetDate` invàlida, per exemple, `"invalid-date"`, ha de retornar `"Data invàlida."`

### Puntuació:
1 punt per calcular correctament el temps restant fins a la data especificada.
1 punt per determinar si la data és en el futur o si ja ha passat.
1 punt per retornar correctament la frase amb anys, mesos, dies, hores i minuts, o indicar que la data ja ha passat.
---

**Bona sort amb l'examen!**

---

Espero que aquest enunciat sigui clar i adequat per als teus alumnes. Si necessites més ajustaments o ajuda amb els altres exercicis, no dubtis a dir-m'ho!