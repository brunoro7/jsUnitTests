const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se o retorno da função `productDetails` é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se a função `productDetails` tem o comportamento esperado.', () => {
    expect(productDetails('teste1', 'teste2')).toEqual([
      { name: 'teste1', details: { productId: 'teste1123' } },
      { name: 'teste2', details: { productId: 'teste2123' } }
    ]);
  });
  it('Verifica se o retorno da função `productDetails` é um array.', () => {
    expect(Array.isArray(productDetails('teste1', 'teste2'))).toBe(true);
  });
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('teste1', 'teste2').length).toBe(2);
  });
  it('Verifica se os dois productIds terminam com 123.', () => {
    expect(productDetails('teste1', 'teste2')[0].details.productId.endsWith('123')).toBe(true);
    expect(productDetails('teste1', 'teste2')[1].details.productId.endsWith('123')).toBe(true);
  });
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('teste1', 'teste2')[0]).not.toEqual(productDetails('teste1', 'teste2')[1]);
  });
});

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se os dois itens dentro do array retornado pela função são objetos.