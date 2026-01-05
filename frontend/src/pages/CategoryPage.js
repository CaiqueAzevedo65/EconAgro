import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Produtos from '../components/Produtos';
import '../Styles/CategoryPage.css';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="conteudo-container">
      <h2 style={{ textTransform: 'capitalize' }}>{categoryName}</h2>
      
      <Produtos category={categoryName} />
      
      <button onClick={() => navigate('/')} className="voltar-button">
        Voltar para Home
      </button>
    </div>
  );
}
