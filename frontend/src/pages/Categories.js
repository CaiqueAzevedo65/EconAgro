import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import '../Styles/Categorias.css';
import Produtos from '../components/Produtos';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="categorias-container">
        <div className="categorias-grid">
          {categories.map((category) => (
            <div
              className="categoria-item"
              key={category.name}
              onClick={() => navigate(`/categoria/${category.name}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/categoria/${category.name}`);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver produtos de ${category.name}`}
            >
              <div className="categoria-content">
                <p className="categoria-name">{category.name}</p>
                <img 
                  src={category.img} 
                  alt={category.name} 
                  className="categoria-img" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://placehold.co/200x150?text=Imagem+Não+Disponível'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Seção de Produtos em Destaque */}
      <div className="produtos-destaque">
        <h2 className="section-title">Produtos em Destaque</h2>
        <Produtos />
      </div>
    </div>
  );
}
