import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';

import Login from '../pages/Login';
import Header from '../components/header';
import Footer from '../components/footer';
import Cadastro from '../pages/Register'; // Atualizado
import Cart from '../components/Cart';
import Contato from '../components/Contato';
import Categorias from '../pages/Categories'; // Atualizado
import SobreNos from '../components/SobreNos';
import Produtos from '../components/Produtos';

function Rotas() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <div className="main-content" style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Categorias />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/carrinho" element={<Cart />} />
                        <Route path="/talktous" element={<Contato />} />
                        <Route path="/aboutus" element={<SobreNos />} />
                        <Route path="/graos" element={<Categorias />} />
                        <Route path="/frutas" element={<Categorias />} />
                        <Route path="/legumes" element={<Categorias />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default Rotas;