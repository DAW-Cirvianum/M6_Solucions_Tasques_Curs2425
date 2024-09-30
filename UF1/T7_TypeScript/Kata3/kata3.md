### **Kata 3 - Training Days**

**Descripció:**

Ets un atleta experimentat que participa en diversos esdeveniments esportius. Un servei anomenat "Training Days" t'ajuda a saber quants dies queden per preparar-te per aquests esdeveniments. El teu repte és implementar un programa que gestioni aquesta informació correctament.

La idea és crear una aplicació que mostri quants dies d'entrenament queden fins a la teva cursa segons l'esdeveniment escollit.

**Requisits:**

1. **Esdeveniments disponibles:**
   - Marató: 50 dies d'entrenament
   - Mitja Marató: 30 dies d'entrenament
   - Cursa 10K: 15 dies d'entrenament
   - Triatló: 70 dies d'entrenament

2. **Funcionalitats:**
   - El programa ha de demanar al participant que escrigui el seu **nom** i el **tipus d'esdeveniment** en el qual està inscrit.
   - El programa ha de retornar quants dies li queden per entrenar per l'esdeveniment escollit.
   - Si l'usuari no introdueix cap nom, ha de mostrar un missatge dient "**Atleta desconegut**".
   - Si l'esdeveniment introduït no és vàlid, ha de mostrar un missatge d'error.
   
3. **Extensibilitat del codi:**
   - El codi ha de ser escalable per poder afegir més esdeveniments en el futur sense haver de modificar la lògica principal.

**Exemple de Comportament Esperat:**

```
// Input: 
Nom: Joan 
Esdeveniment: marató

// Output:
Joan està entrenant per a una marató.
Li queden 50 dies d'entrenament.

// Input:
Nom: Anna
Esdeveniment: natació

// Output:
Error: Esdeveniment desconegut.
```

---
