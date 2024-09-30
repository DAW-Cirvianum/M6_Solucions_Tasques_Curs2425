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
