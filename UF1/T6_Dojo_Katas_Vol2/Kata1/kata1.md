# Kata 1 - Captcha 

Crea un captcha numèric senzill amb JavaScript que consti d'una operació matemàtica aleatòria i demani a l'usuari que introdueixi la resposta correcta.

- L'operació matemàtica pot ser una suma o una resta.

- Els nombres han de ser aleatoris entre 0 i 9.

- L'usuari ha d'introduir la resposta correcta per passar el captcha.

Algunes idees:

1.  Ho pots fer tot a través de JS i console.log

2.  Pots utilitzar mètodes de l'objecte `Math` per generar nombres aleatoris. Consulta la documentació de MDN per obtenir més informació.

3.  Decideix aleatòriament si l'operació serà una suma o una resta

4.  Mostra a l'usuari l'operació matemàtica generada i demana-li que introdueixi la resposta.

5.  Comprova si la resposta de l'usuari és correcta comparant-la amb el resultat de l'operació generada aleatòriament.

6.  Si la resposta de l'usuari és correcta, mostra un missatge d'èxit. En cas contrari, mostra un missatge d'error.

Extra:

1.  Limita el nombre d'intents que té l'usuari per resoldre el captcha (per exemple, tres intents).

2.  Proporciona una actualització de l'operació si l'usuari falla en el primer intent.

3.  Ens avançem força al temari... però si t'animes pos mirar de fer servir una interfície d'usuari (HTML i CSS) per fer que el captcha sigui més amigable visualment.


# Flux del programa:

```markdown
## Inicialització:

- Es defineixen els intents restants i es marca que el captcha no ha estat superat.

## Bucle principal:

1. Es genera una operació matemàtica aleatòria.
2. Es calcula la resposta correcta.
3. Es demana a l'usuari que resolgui l'operació.
4. Es comprova si la resposta és correcta o no.
    - Si és correcta, es felicita l'usuari i es surt del bucle.
    - Si és incorrecta, es decrementarà el nombre d'intents i es continuarà o es finalitzarà si no queden més intents.

## Finalització:

- Si l'usuari ha superat el captcha, el programa finalitza amb èxit.
- Si no l'ha superat, s'informa que ha esgotat els intents.
```
