La diferència principal entre **`toEqual`** i **`toBe`** a Jest és com comparen els valors:

### 1. **`toBe`**:
- Compara **referències** de valors primitius o objectes.
- És l'equivalent a l'operador `===` en JavaScript, per tant, només retorna `true` si els valors comparats són **exactament iguals** i ocupen la mateixa referència en memòria.

**Exemple amb valors primitius**:
```javascript
test('toBe amb valors primitius', () => {
  expect(2 + 2).toBe(4); // Això passarà correctament, ja que els valors són idèntics.
});
```

**Exemple amb objectes (fallarà)**:
```javascript
test('toBe amb objectes (fallarà)', () => {
  const obj = { name: 'John' };
  expect(obj).toBe({ name: 'John' }); // Fallarà perquè són dos objectes diferents, tot i tenir el mateix contingut.
});
```

### 2. **`toEqual`**:
- Compara **estructures de dades** en profunditat.
- Compara objectes o arrays verificant si tenen els **mateixos valors interns**, independentment de si ocupen la mateixa referència en memòria.

**Exemple amb objectes (passarà)**:
```javascript
test('toEqual amb objectes', () => {
  const obj = { name: 'John' };
  expect(obj).toEqual({ name: 'John' }); // Passarà correctament, ja que els objectes tenen el mateix contingut.
});
```

**Exemple amb arrays**:
```javascript
test('toEqual amb arrays', () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]); // Passarà, perquè els arrays tenen els mateixos elements.
});
```

### Resum:
- **`toBe`** es fa servir per a **comparar valors primitius** o **referències d'objectes**.
- **`toEqual`** es fa servir per a **comparar estructures de dades** com objectes o arrays, analitzant el seu contingut.