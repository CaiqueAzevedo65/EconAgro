import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import productService from '../services/productService';
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
  const [addingId, setAddingId] = useState(null); // Estado para feedback visual

  // Função para lidar com erros de carregamento de imagem
  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
    e.target.onerror = null; // Previne loops de erro
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddingId(product.id || product._id || product.name); // Usa ID ou nome como chave
    
    // Remove o feedback após 1 segundo
    setTimeout(() => {
      setAddingId(null);
    }, 1000);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await productService.getProducts(category);
        setProducts(data);
        setFilteredProducts(data);
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
      const lowerTerm = searchTerm.toLowerCase();
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(lowerTerm) ||
        (product.description && product.description.toLowerCase().includes(lowerTerm))
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

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
              <div key={product.id || product._id || product.name} className="card">
                <div className="image">
                  <img 
                    src={product.img || FALLBACK_IMAGE} 
                    alt={product.name}
                    onError={handleImageError}
                  />
                </div>
                <div className="card-body">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <button 
                    className={`botaofaleco ${addingId === (product.id || product._id || product.name) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={addingId === (product.id || product._id || product.name)}
                  >
                    {addingId === (product.id || product._id || product.name) ? 'Adicionado!' : 'Adicionar ao Carrinho'}
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