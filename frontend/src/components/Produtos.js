import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import api from '../services/api';
import '../Styles/Produtos.css';

// Imagem de fallback
const FALLBACK_IMAGE = 'https://placehold.co/300x200?text=Imagem+não+encontrada';

function Produtos({ category }) {
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
        
        // Verificar se a resposta é válida
        let products = [];
        if (response.data) {
          // Se response.data é um array diretamente
          if (Array.isArray(response.data)) {
            products = response.data;
          }
          // Se response.data tem uma propriedade 'data' com o array
          else if (response.data.data && Array.isArray(response.data.data)) {
            products = response.data.data;
          }
          // Se response.data é um objeto, mas não tem estrutura esperada
          else {
            console.warn('Estrutura de dados inesperada:', response.data);
            products = [];
          }
        }
        
        console.log('Produtos extraídos:', products);
        
        // Adiciona a URL base para as imagens a partir do baseURL do cliente API
        const apiBase = api.defaults.baseURL.replace(/\/api\/?$/, '');
        const productsWithFullImageUrl = products.map(product => {
          const fullImg = product.img && product.img.startsWith('http')
            ? product.img
            : product.img
              ? `${apiBase}${product.img}`
              : FALLBACK_IMAGE;
          return { ...product, img: fullImg };
        });
        
        setProducts(productsWithFullImageUrl);
        setFilteredProducts(productsWithFullImageUrl);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Erro ao carregar produtos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // Efeito para filtrar produtos baseado no termo de pesquisa
  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  console.log('Renderizando Produtos. Estado atual:', { loading, error, productsCount: products.length });

  if (loading) return <div className="loading">Carregando produtos...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!products.length) return <div className="no-products">Nenhum produto encontrado.</div>;
  
  const productsToShow = filteredProducts;
  if (searchTerm && !productsToShow.length) {
    return (
      <div className="no-products">
        Nenhum produto encontrado para "{searchTerm}".
        <br />
        <small>Tente buscar por outros termos.</small>
      </div>
    );
  }

  return (
    <main>
      <section>
        <div className="pagcontent">
          {searchTerm && (
            <div className="search-info" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h3>Resultados para: "{searchTerm}"</h3>
              <p>{productsToShow.length} produto(s) encontrado(s)</p>
            </div>
          )}
          <div className="products">
            {productsToShow.map((product) => (
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