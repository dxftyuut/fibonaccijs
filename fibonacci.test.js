// Importa a função fibonacci do arquivo principal
const fibonacci = require('./fibonacci');

// Descreve o conjunto de testes para a função fibonacci
describe('Função fibonacci', () => {

    // Teste 1: Posição 0 (Valor esperado: 0)
    test('deve retornar 0 para n = 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    // Teste 2: Posição 1 (Valor esperado: 1)
    test('deve retornar 1 para n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    // Teste 3: Posição 5 (Sequência: 0, 1, 1, 2, 3, 5. Valor esperado: 5)
    test('deve retornar 5 para n = 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    // Teste 4: Posição 8 (Sequência: ..., 3, 5, 8, 13, 21. Valor esperado: 21)
    test('deve retornar 21 para n = 8', () => {
        expect(fibonacci(8)).toBe(21);
    });

    // Teste 5: Posição 10 (Sequência: ..., 21, 34, 55. Valor esperado: 55)
    test('deve retornar 55 para n = 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    // Teste adicional para garantir que a entrada inválida lance um erro (boa prática)
    test('deve lançar um erro para entrada negativa', () => {
        expect(() => fibonacci(-1)).toThrow();
    });
});
