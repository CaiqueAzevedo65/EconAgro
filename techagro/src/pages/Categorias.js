import React, { useState } from 'react';
import imagem1 from '../assets/imagem1.jpg';
import imagem2 from '../assets/imagem2.jpg';
import imagem3 from '../assets/imagem3.jpg';
import imagem4 from '../assets/imagem4.jpg';
import imagem5 from '../assets/imagem5.jpg';
import imagem6 from '../assets/imagem6.jpg';
import imagem7 from '../assets/imagem7.jpg';
import imagem8 from '../assets/imagem8.jpg';
import '../Styles/Categorias.css'; 
import Conteudo from './Conteudo'; // Importa o novo componente

export default function Categorias() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

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

  // Se uma categoria foi selecionada, exibe o componente Conteudo
  if (categoriaSelecionada) {
    return <Conteudo categoria={categoriaSelecionada} voltar={() => setCategoriaSelecionada(null)} />;
  }

  return (
    <div className="categorias-container">
      <div className="categorias-grid">
        {categories.map((category) => (
          <div
            className="categoria-item"
            key={category.name}
            onClick={() => setCategoriaSelecionada(category.name)}
          >
            <div className="categoria-content">
              <p className="categoria-name">{category.name}</p>
              <img src={category.img} alt={category.name} className="categoria-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
