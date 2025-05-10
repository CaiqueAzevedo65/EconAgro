import React from 'react';
import logo from '../assets/logo.png';
import '../Styles/Produtos.css';
import { useCart } from '../context/CartContext';
import imagem2 from '../assets/arroz_7_graos.jpg';
import imagem3 from '../assets/proteina_de_soja_texturizada.webp';
import imagem4 from '../assets/milho5kg.jpg';
import imagem5 from '../assets/café_arabica.webp';
import bananaPrata from '../assets/banana_prata.jpg';
import macaFuji from '../assets/maca_fuji.webp';
import abacaxiPerola from '../assets/abacaxi_perola.jpg';
import tomateItaliano from '../assets/tomate_italiano.jpg';
import cenoura from '../assets/cenoura.jpg';
import batataInglesa from '../assets/batata_inglesa.jpeg';
import abobrinhaItaliana from '../assets/abobrinha_italiana.jpg';
import berinjela from '../assets/berinjela.jpg';
import pimentaoVerde from '../assets/Pimentao_Verde.webp';
import chuchu from '../assets/chuchu.webp';
import pepinoJapones from '../assets/pepino_japones.jpg';
import couveFlor from '../assets/couve_flor.webp';
import palmito from '../assets/palmito.webp';

// Objeto contendo a lista de produtos organizados por categorias
const allProducts = {
  'Grãos': [
    { name: 'Arroz 7 grãos Ecobio 500g', price: 'R$ 17,40', img: imagem2 },
    { name: 'Proteína de soja texturizada', price: 'R$ 11,14', img: imagem3 },
    { name: 'Milho 5 Kg', price: 'R$ 25,34', img: imagem4 },
    { name: 'Grãos de café arabica', price: 'R$ 87,40', img: imagem5 },
  ],
  'Frutas': [
    { name: 'Maçã Fuji 1kg', price: 'R$ 12,50', img: macaFuji },
    { name: 'Banana Prata 1kg', price: 'R$ 8,90', img: bananaPrata },
    { name: 'Abacaxi Pérola', price: 'R$ 15,00', img: abacaxiPerola },
    { name: 'Tomate Italiano 1kg', price: 'R$ 9,80', img: tomateItaliano },
  ],
  'Legumes': [
    { name: 'Cenoura 1kg', price: 'R$ 6,50', img: cenoura },
    { name: 'Batata Inglesa 1kg', price: 'R$ 7,20', img: batataInglesa },
    { name: 'Abobrinha Italiana 1kg', price: 'R$ 8,00', img: abobrinhaItaliana },
    { name: 'Berinjela 1kg', price: 'R$ 9,50', img: berinjela },
    { name: 'Pimentão Verde 1kg', price: 'R$ 10,00', img: pimentaoVerde },
    { name: 'Chuchu 1kg', price: 'R$ 5,80', img: chuchu },
    { name: 'Pepino Japonês 1kg', price: 'R$ 6,90', img: pepinoJapones },
    { name: 'Couve-Flor Unidade', price: 'R$ 12,00', img: couveFlor },  
    { name: 'Palmito Pupunha 300g', price: 'R$ 21,00', img: palmito },  
  ],
};

// Componente funcional Produtos que recebe a categoria como propriedade
function Produtos({ category }) {
  const { addToCart } = useCart();
  
  // Se nenhuma categoria for fornecida, o componente não renderiza nada
  if (!category) return null;
  // Obtém os produtos da categoria selecionada ou um array vazio caso não existam produtos
  const products = allProducts[category] || [];

  return (
    <main>
      <section>
        <div className="pagcontent">
          <div className="shops row">
            <div className="brand col-2">
              <img src={logo} alt="logo" />
            </div>
            <div className="namebrand col-8 row">
              <div className="shop col-12">
                <span className="ms-4"><b>Grain Trading Company</b></span>
              </div>
              <div className="shoprt col-12">
                <span style={{ color: 'darkgoldenrod' }} className="ms-4"><i className="fa-solid fa-star"></i></span>
                <span style={{ color: 'darkgoldenrod' }}>4.2</span>
                <span> • </span>
                <span className="km">3.5 km</span>
              </div>
            </div>
            <div className="brand col-2">
              <div>
                <i className="heart fa-regular fa-heart ms-2 mt-4"></i>
              </div>
            </div>
          </div>

          <div className="products mt-5">
            {products.map((product, idx) => (
              <div className="col-12 col-sm-6 col-md-5 col-lg-2 mb-4" key={idx}>
                <div className="card shadow-sm border-light rounded">
                  <div className="image">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="card-body">
                    <h4 className="product-title">{product.name}</h4>
                    <span style={{ color: '#17a354' }}>{product.price}</span>
                    <div className="ms-4">
                      <a 
                        href="#" 
                        className="botaofaleco"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                      >
                        Adicionar ao Carrinho
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="spacexl"></div>
      </section>
    </main>
  );
}

export default Produtos; // Exporta o componente Produtos