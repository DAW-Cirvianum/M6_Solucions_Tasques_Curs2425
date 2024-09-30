1. **Ús d'una Funció de Tipus Guard (`isEsdeveniment`)**:
   ```typescript
   function isEsdeveniment(esdeveniment: string): esdeveniment is Esdeveniment {
     return esdeveniments.hasOwnProperty(esdeveniment);
   }
   ```
   - **Comentari**: Aquesta funció simplifica la verificació de si una cadena correspon a un esdeveniment vàlid. En lloc de realitzar múltiples comprovacions o convertir el tipus, podem utilitzar aquesta funció per verificar de manera concisa.

2. **Reducció de la Conversió i Validació**:
   ```typescript
   if (esdevenimentInput) {
     const esdeveniment = esdevenimentInput.toLowerCase() as string; // Convertim a minúscules

     if (isEsdeveniment(esdeveniment)) {
       // ...
     } else {
       console.log('Error: Esdeveniment desconegut.');
     }
   } else {
     console.log('Error: No s\'ha introduït cap esdeveniment.');
   }
   ```
   - **Comentari**: En comptes de definir `esdeveniment` com `Esdeveniment | ''`, simplement verifiquem si `esdevenimentInput` existeix i després utilitzem la funció de tipus guard per validar-lo. Això elimina la necessitat de múltiples tipus per `esdeveniment`.

3. **Gestió de Valors Nuls Directament**:
   - **Comentari**: En lloc d'assignar una cadena per defecte per a `esdeveniment`, gestionem directament el cas on `prompt` retorna `null`, fent el codi més net i fàcil de seguir.

4. **Eliminació de Tipus Innecessaris**:
   - **Comentari**: Amb l'ús de la funció de tipus guard, podem eliminar alguns tipus addicionals que havíem assignat prèviament, fent el codi més concís sense perdre la seguretat de tipus.

### Beneficis d'Aquesta Aproximació:

- **Menys Verbositat**: El codi és més concís i fàcil de llegir, evitant comprovacions redundants.
- **Claredat**: L'ús de funcions de tipus guard clarifica la intenció del codi, fent-lo més fàcil de mantenir.
- **Seguretat de Tipus**: Manté la seguretat proporcionada per TypeScript sense introduir complexitats innecessàries.

Aquestes simplificacions ajuden a mantenir el codi net i eficient mentre es manté la robustesa i la seguretat de tipus que ofereix TypeScript.