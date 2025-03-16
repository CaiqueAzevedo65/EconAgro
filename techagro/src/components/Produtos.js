import React from 'react';
import logo from '../assets/logo.png';
import '../Styles/Produtos.css';
import imagem2 from '../assets/arroz_7_graos.jpg';
import imagem3 from '../assets/proteina_de_soja_texturizada.webp';
import imagem4 from '../assets/milho5kg.jpg';
import imagem5 from '../assets/café_arabica.webp';

// Objeto contendo a lista de produtos organizados por categorias
const allProducts = {
  'Grãos': [
    { name: 'Arroz 7 grãos Ecobio 500g', price: 'R$ 17,40', img: imagem2 },
    { name: 'Proteína de soja texturizada', price: 'R$ 11,14', img: imagem3 },
    { name: 'Milho 5 Kg', price: 'R$ 25,34', img: imagem4 },
    { name: 'Grãos de café arabica', price: 'R$ 87,40', img: imagem5 },
  ],
};
 // Componente funcional Produtos que recebe a categoria como propriedade
 function Produtos({ category }) {
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
        <div className="products2">
          {products.map((product, idx) => (
            <div className="col-3" key={idx}>
              <div className="card shadow-sm border-light rounded">
                <div className="image">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="card-body">
                  <h4 className="product-title">{product.name}</h4>
                  <span style={{ color: '#17a354' }}>{product.price}</span>
                  <div className="ms-4">
                    <a href="" className="botaofaleco btn btn-success ms-5 mt-3">Comprar</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    <div className="spacexl"></div>

  </section>
</main>

  );
}

export default Produtos; // Exporta o componente Produtos