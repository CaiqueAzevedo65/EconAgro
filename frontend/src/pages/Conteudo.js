import React from 'react';
import Produtos from '../components/Produtos.js';
import '../Styles/Conteudo.css';

export default function Conteudo({ categoria, voltar }) {
  return (
    <div className="conteudo-container">
      <h2>{categoria}</h2>


      <Produtos category={categoria} />


      <button onClick={voltar} className="voltar-button">Voltar</button>
    </div>
  );
}
