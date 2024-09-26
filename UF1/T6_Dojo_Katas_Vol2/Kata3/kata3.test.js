// Importem la funció a testear
import { calcularDiesEntrenament } from './kata3b.js';

// Per poder simular l'entrada de dades amb prompt i capturar la sortida amb console.log
// cal utilitzar jest.mock() per a cada funció que volem simular i capturar la sortida amb console.log

// Abans de cada test, reinicialitzem els mocks perquè no es mantinguin els valors d'una execució a l'altra

global.prompt = jest.fn();
global.console.log = jest.fn();

describe('calcularDiesEntrenament', () => {
  beforeEach(() => {
    // Reinicialitzar els mocks abans de cada test
    jest.clearAllMocks();
  });

  test("Hauria de calcular correctament per a l'esdeveniment 'marató'", () => {
    // Simular les respostes del prompt
    prompt
      .mockReturnValueOnce('Joan') // Nom de l'usuari
      .mockReturnValueOnce('marató'); // Esdeveniment

    calcularDiesEntrenament();

    expect(console.log).toHaveBeenCalledWith(
      'Joan està entrenant per a una marató.'
    );
    expect(console.log).toHaveBeenCalledWith(
      "Li queden 50 dies d'entrenament."
    );
  });

  test("Hauria de calcular correctament per a l'esdeveniment 'mitja marató'", () => {
    prompt.mockReturnValueOnce('Maria').mockReturnValueOnce('mitja marató');

    calcularDiesEntrenament();

    expect(console.log).toHaveBeenCalledWith(
      'Maria està entrenant per a una mitja marató.'
    );
    expect(console.log).toHaveBeenCalledWith(
      "Li queden 30 dies d'entrenament."
    );
  });

  test("Hauria de calcular correctament per a l'esdeveniment 'cursa 10k'", () => {
    prompt.mockReturnValueOnce('Pere').mockReturnValueOnce('cursa 10k');

    calcularDiesEntrenament();

    expect(console.log).toHaveBeenCalledWith(
      'Pere està entrenant per a una cursa 10k.'
    );
    expect(console.log).toHaveBeenCalledWith(
      "Li queden 15 dies d'entrenament."
    );
  });

  test("Hauria de calcular correctament per a l'esdeveniment 'triatló'", () => {
    prompt.mockReturnValueOnce('Anna').mockReturnValueOnce('triatló');

    calcularDiesEntrenament();

    expect(console.log).toHaveBeenCalledWith(
      'Anna està entrenant per a una triatló.'
    );
    expect(console.log).toHaveBeenCalledWith(
      "Li queden 70 dies d'entrenament."
    );
  });

  test('Hauria de mostrar un error per a un esdeveniment desconegut', () => {
    prompt.mockReturnValueOnce('Lucia').mockReturnValueOnce('escalada');

    calcularDiesEntrenament();

    expect(console.log).toHaveBeenCalledWith('Error: Esdeveniment desconegut.');
  });

  test('Hauria d\'utilitzar "Atleta desconegut" si no s\'introdueix el nom', () => {
    prompt
      .mockReturnValueOnce('') // Nom buit
      .mockReturnValueOnce('marató');

    calcularDiesEntrenament();

    expect(console.log).toHaveBeenCalledWith(
      'Atleta desconegut està entrenant per a una marató.'
    );
    expect(console.log).toHaveBeenCalledWith(
      "Li queden 50 dies d'entrenament."
    );
  });

  test("Hauria de gestionar majúscules i minúscules en l'esdeveniment", () => {
    prompt.mockReturnValueOnce('Carlos').mockReturnValueOnce('TriAtló'); // Amb majúscules i minúscules

    calcularDiesEntrenament();

    expect(console.log).toHaveBeenCalledWith(
      'Carlos està entrenant per a una triatló.'
    );
    expect(console.log).toHaveBeenCalledWith(
      "Li queden 70 dies d'entrenament."
    );
  });
});
