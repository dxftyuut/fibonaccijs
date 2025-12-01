/**
 * Calcula o número de Fibonacci na posição (índice) fornecida.
 *
 * @param {number} n O índice (posição) do número de Fibonacci a ser calculado (n >= 0).
 * @returns {number} O número de Fibonacci na posição n.
 * @throws {Error} Se o argumento não for um número inteiro não negativo.
 */
function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("O argumento deve ser um número inteiro não negativo.");
    }

    // Casos base
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    // Implementação iterativa para calcular o número de Fibonacci
    let a = 0; // F(0)
    let b = 1; // F(1)
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Exporta a função para que possa ser usada em outros arquivos (como o de teste)
module.exports = fibonacci;
