## 🐉 Exercici 2: Generador de Criatures Fantàstiques (3 punts)

### Descripció:
Crea un generador de criatures fantàstiques. Cada criatura tindrà un nom, un tipus (`foc`, `aigua`, `terra`, `aire`), un atac especial i un nivell de poder (`powerLevel`).

### Funcions a implementar:

1. **`createCreature(name, type)`**
   - **Objectiu:** Crear una nova criatura amb les propietats especificades.
   - **Instruccions:**
     - Implementa una funció que rep `name` i `type` com a paràmetres.
     - Utilitza un objecte intern per definir els atacs especials corresponents a cada tipus de criatura.
     - Assigna un nivell de poder (`powerLevel`) aleatori entre 1 i 100 utilitzant l'objecte `Math`.
     - La funció ha de retornar un objecte amb les propietats `name`, `type`, `specialAttack` i `powerLevel`, aquest últim basat en el tipus de criatura proporcionat.
     - Si el tipus de criatura no està reconegut, assigna un atac especial predeterminat, com ara `'Atac Bàsic'`, i un `powerLevel` aleatori.
   
2. **`describeCreature(creature)`**
   - **Objectiu:** Generar una descripció detallada de la criatura.
   - **Instruccions:**
     - Implementa una funció que rep un objecte `creature` com a paràmetre.
     - Utilitza **destructuring** per extreure les propietats `name`, `type`, `specialAttack` i `powerLevel` de l'objecte `creature`.
     - Utilitza una estructura `switch` per determinar la descripció segons el tipus de criatura.
     - Utilitza **template literals** per formatar la resposta de manera clara i informativa.
     - La funció ha de retornar una cadena de text que descrigui la criatura, incloent el seu nom, tipus, atac especial i nivell de poder.

### Especificacions dels Tests:
Els tests verificaràn les següents funcionalitats:

1. **Funció `createCreature`:**
   - **Test 1:** Crear una criatura amb `name: 'Draco'` i `type: 'foc'` ha de retornar un objecte amb `name: 'Draco'`, `type: 'foc'`, `specialAttack: 'Llama Infernal'` i un `powerLevel` entre 1 i 100.
   - **Test 2:** Crear una criatura amb `name: 'Aqua'` i `type: 'aigua'` ha de retornar un objecte amb `name: 'Aqua'`, `type: 'aigua'`, `specialAttack: 'Torrents d'Aigua'` i un `powerLevel` entre 1 i 100.
   - **Test 3:** Crear una criatura amb un `type` no reconegut com a `'llum'` ha de retornar un objecte amb `name`, `type: 'llum'`, `specialAttack: 'Atac Bàsic'` i un `powerLevel` entre 1 i 100.

2. **Funció `describeCreature`:**
   - **Test 1:** Passar una criatura de tipus `foc` ha de retornar una descripció correcta que inclogui el nom, tipus, atac especial i nivell de poder.
     - **Entrada:** `{ name: 'Draco', type: 'foc', specialAttack: 'Llama Infernal', powerLevel: 85 }`
     - **Sortida esperada:** `"Draco és una criatura de foc amb l'atac especial: Llama Infernal i un nivell de poder de 85."`
   
   - **Test 2:** Passar una criatura de tipus `aigua` ha de retornar una descripció correcta que inclogui el nom, tipus, atac especial i nivell de poder.
     - **Entrada:** `{ name: 'Aqua', type: 'aigua', specialAttack: 'Torrents d\'Aigua', powerLevel: 60 }`
     - **Sortida esperada:** `"Aqua és una criatura d'aigua amb l'atac especial: Torrents d'Aigua i un nivell de poder de 60."`
   
   - **Test 3:** Passar una criatura amb un tipus no reconegut ha de retornar una descripció indicant que és una criatura desconeguda amb el seu atac especial i nivell de poder.
     - **Entrada:** `{ name: 'Lumen', type: 'llum', specialAttack: 'Atac Bàsic', powerLevel: 40 }`
     - **Sortida esperada:** `"Lumen és una criatura desconeguda amb l'atac especial: Atac Bàsic i un nivell de poder de 40."`

### Puntuació:
- **1 punt** per implementar correctament la funció `createCreature`.
- **1 punt** per implementar correctament la funció `describeCreature` utilitzant destructuring i un `switch`.
- **1 punt** per formatar correctament la resposta amb **template literals**.
