import React from 'react';
import logo from '../assets/logo.png';
import '../Styles/Produtos.css';
import { useCart } from '../context/CartContext';

// Importando todas as imagens de cada pasta de categoria
const carnesImages = require.context('../assets/imgs_carnes', false, /\.(png|jpe?g|webp)$/);
const ovosImages = require.context('../assets/imgs_ovos', false, /\.(png|jpe?g|webp)$/);
const laticiniosImages = require.context('../assets/imgs_laticinios', false, /\.(png|jpe?g|webp)$/);
const graosImages = require.context('../assets/imgs_graos', false, /\.(png|jpe?g|webp)$/);
const frutasImages = require.context('../assets/imgs_frutas', false, /\.(png|jpe?g|webp)$/);
const legumesImages = require.context('../assets/imgs_legumes', false, /\.(png|jpe?g|webp)$/);

// Função auxiliar para obter a imagem pelo nome do arquivo
const getImage = (context, imageName) => {
  try {
    return context(`./${imageName}`);
  } catch (error) {
    console.warn(`Imagem não encontrada: ${imageName}`);
    return null;
  }
};

// Objeto contendo a lista de produtos organizados por categorias
const allProducts = {
  'Carnes': [
    { name: 'Filé Mignon 1kg', price: 'R$ 89,90', img: getImage(carnesImages, 'file_mignon.jpg') },
    { name: 'Alcatra 1kg', price: 'R$ 49,90', img: getImage(carnesImages, 'alcatra.jpg') },
    { name: 'Picanha 1kg', price: 'R$ 79,90', img: getImage(carnesImages, 'picanha.jpg') },
    { name: 'Frango Inteiro 1kg', price: 'R$ 19,90', img: getImage(carnesImages, 'frango.png') },
  ],
  'Ovos': [
    { name: 'Ovos Brancos 30 unidades', price: 'R$ 24,90', img: getImage(ovosImages, 'ovos_brancos.png') },
    { name: 'Ovos Vermelhos 30 unidades', price: 'R$ 29,90', img: getImage(ovosImages, 'ovos_vermelhos.webp') },
    { name: 'Ovos Caipiras 30 unidades', price: 'R$ 34,90', img: getImage(ovosImages, 'ovos_caipira.jpg') },
    { name: 'Ovos Orgânicos 12 unidades', price: 'R$ 19,90', img: getImage(ovosImages, 'ovos_organicos.jpg') },
  ],
  'Laticínios': [
    { name: 'Leite Integral Piracanjuba 1L', price: 'R$ 6,90', img: getImage(laticiniosImages, 'leite_integral_piracanjuba.jpg') },
    { name: 'Queijo Minas 500g', price: 'R$ 24,90', img: getImage(laticiniosImages, 'queijo_minas.webp') },
    { name: 'Iogurte Natural Itambé Desnatado 500g', price: 'R$ 8,90', img: getImage(laticiniosImages, 'iogurte_natural_itambé_desnatado.webp') },
    { name: 'Manteiga Piracanjuba 500g', price: 'R$ 19,90', img: getImage(laticiniosImages, 'manteiga.webp') },
  ],
  'Grãos': [
    { name: 'Arroz 7 grãos Ecobio 500g', price: 'R$ 17,40', img: getImage(graosImages, 'arroz_7_graos.jpg') },
    { name: 'Proteína de soja texturizada', price: 'R$ 11,14', img: getImage(graosImages, 'proteina_de_soja_texturizada.webp') },
    { name: 'Milho 5 Kg', price: 'R$ 25,34', img: getImage(graosImages, 'milho5kg.jpg') },
    { name: 'Grãos de café arabica', price: 'R$ 87,40', img: getImage(graosImages, 'café_arabica.webp') },
  ],
  'Frutas': [
    { name: 'Maçã Fuji 1kg', price: 'R$ 12,50', img: getImage(frutasImages, 'maca_fuji.webp') },
    { name: 'Banana Prata 1kg', price: 'R$ 8,90', img: getImage(frutasImages, 'banana_prata.jpg') },
    { name: 'Abacaxi Pérola', price: 'R$ 15,00', img: getImage(frutasImages, 'abacaxi_perola.jpg') },
    { name: 'Tomate Italiano 1kg', price: 'R$ 9,80', img: getImage(frutasImages, 'tomate_italiano.jpg') },
  ],
  'Legumes': [
    { name: 'Cenoura 1kg', price: 'R$ 6,50', img: getImage(legumesImages, 'cenoura.jpg') },
    { name: 'Batata Inglesa 1kg', price: 'R$ 7,20', img: getImage(legumesImages, 'batata_inglesa.jpeg') },
    { name: 'Abobrinha Italiana 1kg', price: 'R$ 8,00', img: getImage(legumesImages, 'abobrinha_italiana.jpg') },
    { name: 'Berinjela 1kg', price: 'R$ 9,50', img: getImage(legumesImages, 'berinjela.jpg') },
    { name: 'Pimentão Verde 1kg', price: 'R$ 10,00', img: getImage(legumesImages, 'Pimentao_Verde.webp') },
    { name: 'Chuchu 1kg', price: 'R$ 5,80', img: getImage(legumesImages, 'chuchu.webp') },
    { name: 'Pepino Japonês 1kg', price: 'R$ 6,90', img: getImage(legumesImages, 'pepino_japones.jpg') },
    { name: 'Couve-Flor Unidade', price: 'R$ 12,00', img: getImage(legumesImages, 'couve_flor.webp') },  
    { name: 'Palmito Pupunha 300g', price: 'R$ 21,00', img: getImage(legumesImages, 'palmito.webp') },  
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
          {category === 'Grãos' && (
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
          )}

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