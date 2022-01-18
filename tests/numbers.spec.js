/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário.', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });
  it('Verifica se a função `numbers`retorna `false` quando o array contém algum valor que não seja número.', () => {
    expect(numbers([2, 'errado', 5])).toBe(false);
  });
  it('Verifica se a função `numbers`retorna `false` quando o array está vazio.', () => {
    expect(numbers([''])).toBe(false);
  });
  it('Verifica se a função `numbers`retorna `false` quando o array contém letras.', () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  });
});