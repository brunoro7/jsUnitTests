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
  it('Verifica se a função `productDetails` tem o comportamento esperado.', () => {
    expect(productDetails('teste1', 'teste2')).toEqual([
      { name: 'teste1', details: { productId: 'teste1123' } },
      { name: 'teste2', details: { productId: 'teste2123' } }
    ]);
  });
  it('Verifica se o retorno da função `productDetails` é um array.', () => {
    expect(productDetails('teste1','teste2')).toEqual([
      { name: 'teste1', details: { productId: 'teste1123' } },
      { name: 'teste2', details: { productId: 'teste2123' } }
    ]);
  });
});

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.