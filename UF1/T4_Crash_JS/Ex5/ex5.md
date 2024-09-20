# Exercici 5 - Matxos 2024! 

L'organització de la famosa carrera de Torelló ens ha demanat implementar un registra per la cursa. Hi ha corredors adults (majors de 18 anys) i corredors joves (menors de 18 anys). Els corredors poden registrar-se abans o després d'una data determinada. Als corredors se'ls assigna un número de cursa i una hora d'inici basat en la seva edat i registre.

Número de cursa:

- Els adults amb inscripció anticipada reben un número de cursa igual o superior a 1000.

- Tots els altres reben un número per sota de 1000.

Hora d'inici:

- Els corredors adults tenen la cursa a les 9:30 a. m. o a les 11:00 a. m.

- Els adults amb inscripció anticipada corren a les 9:30 a. m.

- Els adults amb inscripció a última hora corren a les 11:00 a. m.

- Els corredors joves corren a les 12:30 p. m. (independentment del registre).

Si tenen exactament 18 anys hauran de dirigir-se al punt d'informació.

La idea és que utilitzis una funció que rebi els següents paràmetres:

- `edat` (enter) - Edat del corredor.
- `data` (string) - Data de registre. Format: "YYYY-MM-DD".
- `anticipada` (booleà) - Indica si la inscripció és anticipada o no.

La funció ha de retornar una tupla amb el número de cursa i l'hora d'inici.

Exemple:

```javascript
console.log(registreCursa(20, "2024-06-01", true)); // [1000, "09:30"]
console.log(registreCursa(20, "2024-06-01", false)); // [999, "11:00"]
console.log(registreCursa(17, "2024-06-01", true)); // [998, "12:30"]
console.log(registreCursa(18, "2024-06-01", true)); // [997, "Punt d'informació"]
```

Pots suposar que la data de registre sempre serà anterior a la data de la cursa.

```javascript
function registreCursa(edat, data, anticipada) {
    // Escriu aquí el teu codi
}
```

---
