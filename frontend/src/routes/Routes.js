import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { SearchProvider } from '../context/SearchContext';

import Login from '../pages/Login';
import Header from '../components/header';
import Footer from '../components/footer';
import Cadastro from '../pages/Register';
import Cart from '../components/Cart';
import Contato from '../components/Contato';
import Home from '../pages/Categories'; 
import SobreNos from '../components/SobreNos';
import CategoryPage from '../pages/CategoryPage';

function Rotas() {
    return (
        <SearchProvider>
            <CartProvider>
                <BrowserRouter>
                <Header />
                <div className="main-content" style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/carrinho" element={<Cart />} />
                        <Route path="/talktous" element={<Contato />} />
                        <Route path="/aboutus" element={<SobreNos />} />
                        
                        {/* Rota dinâmica para categorias */}
                        <Route path="/categoria/:categoryName" element={<CategoryPage />} />
                        
                        {/* Redirecionamentos para rotas antigas/específicas para manter compatibilidade */}
                        <Route path="/graos" element={<Navigate to="/categoria/Grãos" replace />} />
                        <Route path="/frutas" element={<Navigate to="/categoria/Frutas" replace />} />
                        <Route path="/legumes" element={<Navigate to="/categoria/Legumes" replace />} />
                        
                        {/* Fallback para rota desconhecida */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
                <Footer />
                </BrowserRouter>
            </CartProvider>
        </SearchProvider>
    );
}

export default Rotas;