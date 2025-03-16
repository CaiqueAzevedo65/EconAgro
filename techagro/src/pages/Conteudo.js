import React from 'react';
import '../Styles/Conteudo.css';

export default function Conteudo({ categoria, voltar }) {
  return (
    <div className="conteudo-container">
      <h2>{categoria}</h2>
      <p>Aqui está o conteúdo relacionado a {categoria}.</p>
      <button onClick={voltar} className="voltar-button">Voltar</button>
    </div>
  );
}
