import React from 'react';
import imagem1 from '../assets/imagem1.jpg';
import imagem2 from '../assets/imagem2.jpg';
import imagem3 from '../assets/imagem3.jpg';
import imagem4 from '../assets/imagem4.jpg';
import imagem5 from '../assets/imagem5.jpg';
import imagem6 from '../assets/imagem6.jpg';
import imagem7 from '../assets/imagem7.jpg';
import imagem8 from '../assets/imagem8.jpg';

 // Componente Categorias recebe a função onSelectCategory como prop
 function Categorias({ onSelectCategory }) {
    // Definindo as categorias com seus respectivos nomes e imagens
  const categories = [
    { name: 'Carnes', img: imagem1 },
    { name: 'Ovos', img: imagem2 },
    { name: 'Leite', img: imagem3 },
    { name: 'Grãos', img: imagem4 },
    { name: 'Frutas', img: imagem5 },
    { name: 'Verduras', img: imagem6 },
    { name: 'Legumes', img: imagem7 },
    { name: 'Flores', img: imagem8 },
  ];

  return (
    <div className="pagcontent mt-5 mb-5">
        <div className="categories">
            <div className="categories2 row">
                <div className="categoryspace col-3"
                    key="Carnes"
                    onClick={() => onSelectCategory('Carnes')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Carnes</p>
                            <img className="carne" src={imagem1} alt="carne" />
                        </div>
                    </div>
                </div>

                <div className="categoryspace col-3"
                    key="Ovos"
                    onClick={() => onSelectCategory('Ovos')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Ovos</p>
                            <img src={imagem2} alt="ovos" />
                        </div>
                    </div>
                </div>

                <div className="categoryspace col-3"
                    key="Leite"
                    onClick={() => onSelectCategory('Leite')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Leite</p>
                            <img src={imagem3} alt="leite" />
                        </div>
                    </div>
                </div>

                <div className="categoryspace col-3"
                    key="Grãos"
                    onClick={() => onSelectCategory('Grãos')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Grãos</p>
                            <img src={imagem4} alt="grãos" />
                        </div>
                    </div>
                </div>

                <div className="categoryspace col-3"
                    key="Frutas"
                    onClick={() => onSelectCategory('Frutas')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Frutas</p>
                            <img src={imagem5} alt="frutas" />
                        </div>
                    </div>
                </div>

                <div className="categoryspace col-3"
                    key="Verduras"
                    onClick={() => onSelectCategory('Verduras')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Verduras</p>
                            <img src={imagem6} alt="verduras" />
                        </div>
                    </div>
                </div>

                <div className="categoryspace col-3"
                    key="Legumes"
                    onClick={() => onSelectCategory('Legumes')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Legumes</p>
                            <img src={imagem7} alt="legumes" />
                        </div>
                    </div>
                </div>

                <div className="categoryspace col-3"
                    key="Flores"
                    onClick={() => onSelectCategory('Flores')}
                    style={{ cursor: 'pointer' }}>
                    <div className="category">
                        <div className="text">
                            <p className="names text-light">Flores</p>
                            <img src={imagem8} alt="Flores" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className="space">
        <hr />
    </div>
    </div>

  );
}


export default Categorias; // Exporta o componente Categorias