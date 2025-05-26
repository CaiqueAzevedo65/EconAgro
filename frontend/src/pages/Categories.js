import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import imagem1 from '../assets/imagem1.jpg';
import imagem2 from '../assets/imagem2.jpg';
import imagem3 from '../assets/imagem3.jpg';
import imagem4 from '../assets/imagem4.jpg';
import imagem5 from '../assets/imagem5.jpg';
import imagem6 from '../assets/imagem6.jpg';
import imagem7 from '../assets/imagem7.jpg';
import imagem8 from '../assets/imagem8.jpg';
import '../Styles/Categorias.css'; 
import Conteudo from './Conteudo';
import Produtos from '../components/Produtos';

export default function Categorias() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const location = useLocation();

  const categories = [
    { name: 'Carnes', img: imagem1 },
    { name: 'Ovos', img: imagem2 },
    { name: 'Laticínios', img: imagem3 },
    { name: 'Grãos', img: imagem4 },
    { name: 'Frutas', img: imagem5 },
    { name: 'Verduras', img: imagem6 },
    { name: 'Legumes', img: imagem7 },
    { name: 'Flores', img: imagem8 },
  ];

  // Se estiver em uma rota específica de categoria, mostra apenas os produtos
  const isCategoryRoute = location.pathname !== '/' && location.pathname !== '/categorias';
  
  // Se uma categoria foi selecionada, exibe o componente Conteudo
  if (categoriaSelecionada && !isCategoryRoute) {
    return <Conteudo categoria={categoriaSelecionada} voltar={() => setCategoriaSelecionada(null)} />;
  }

  return (
    <div className="home-container">
      <div className="categorias-container">
        <div className="categorias-grid">
          {categories.map((category) => {
            // Se estiver em uma rota de categoria, não faz nada ao clicar
            const onClick = isCategoryRoute 
              ? undefined 
              : () => setCategoriaSelecionada(category.name);
              
            return (
            <div
              className="categoria-item"
              key={category.name}
              onClick={onClick}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !isCategoryRoute) {
                  e.preventDefault();
                  setCategoriaSelecionada(category.name);
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
                    e.target.src = 'https://via.placeholder.com/200x150?text=Imagem+Não+Disponível'
                  }}
                />
              </div>
            </div>
          );
          })}
        </div>
      </div>
      
      {/* Seção de Produtos em Destaque */}
      {!isCategoryRoute && (
        <div className="produtos-destaque">
          <h2 className="section-title">Produtos em Destaque</h2>
          <Produtos />
        </div>
      )}
      
      {/* Se estiver em uma rota de categoria, mostra os produtos daquela categoria */}
      {isCategoryRoute && (
        <div className="produtos-categoria">
          <h2 className="section-title">
            {location.pathname === '/graos' ? 'Grãos' : 
             location.pathname === '/frutas' ? 'Frutas' : 
             location.pathname === '/legumes' ? 'Legumes' : 'Produtos'}
          </h2>
          <Produtos category={location.pathname === '/graos' ? 'Grãos' : 
                           location.pathname === '/frutas' ? 'Frutas' : 
                           location.pathname === '/legumes' ? 'Legumes' : null} />
        </div>
      )}
    </div>
  );
}
