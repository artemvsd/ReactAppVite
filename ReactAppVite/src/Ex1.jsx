import React from 'react';
let Pessoas = [
  {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  },
  {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: true,
  },
];

var Lista = [];
const Ex = () => {
  Pessoas.forEach((pessoa, index) => {
    if (pessoa.ativa) {
      Lista.push(
        <div key={index}>
          <h2>Cliente: {pessoa.cliente}</h2>
          <h2>Idade: {pessoa.idade}</h2>
          <h2>
            Compra:
            {pessoa.compras.map((item, index) => (
              <tr data-index={index}>
                <td>{item.nome}</td>
                <td>{item.preco}</td>
              </tr>
            ))}
          </h2>
          <hr />
        </div>,
      );
    }
  });
  return <div>{Lista}</div>;
};

export default Ex;
