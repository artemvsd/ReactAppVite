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
    ativa: false,
  },
];

const Ex = () => {
  var i = 0;
  function contador() {
    i++;
  }
  return (
    <div>
      <button onClick={contador()}>Trocar</button>
      <p> {Pessoas[i].cliente} </p>
    </div>
  );
};

export default Ex;
