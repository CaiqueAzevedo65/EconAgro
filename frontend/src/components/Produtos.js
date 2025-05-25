import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import api from '../services/api';
import '../Styles/Produtos.css';

// Imagem de fallback
const FALLBACK_IMAGE = 'https://placehold.co/300x200?text=Imagem+não+encontrada';

function Produtos({ category }) {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para lidar com erros de carregamento de imagem
  const handleImageError = (e) => {
    console.error('Erro ao carregar imagem:', e.target.src);
    e.target.src = FALLBACK_IMAGE;
    e.target.onerror = null; // Previne loops de erro
  };

  useEffect(() => {
    console.log('Categoria recebida no Produtos:', category);
    
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Buscando produtos...');
        
        let response;
        if (category) {
          console.log(`Buscando produtos da categoria: ${category}`);
          response = await api.get(`/products/category/${encodeURIComponent(category)}`);
        } else {
          console.log('Buscando todos os produtos');
          response = await api.get('/products');
        }
        
        console.log('Resposta da API:', response);
        
        // Adiciona a URL base para as imagens
        const productsWithFullImageUrl = response.data.map(product => ({
          ...product,
          img: product.img.startsWith('http') ? product.img : `http://localhost:3001${product.img}`
        }));
        
        setProducts(productsWithFullImageUrl);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Erro ao carregar produtos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  console.log('Renderizando Produtos. Estado atual:', { loading, error, productsCount: products.length });

  if (loading) return <div className="loading">Carregando produtos...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!products.length) return <div className="no-products">Nenhum produto encontrado.</div>;

  return (
    <main>
      <section>
        <div className="pagcontent">
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="image">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    onError={handleImageError}
                  />
                </div>
                <div className="card-body">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <button 
                    className="botaofaleco"
                    onClick={() => addToCart(product)}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Produtos;