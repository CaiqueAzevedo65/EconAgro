import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Header from '../components/header';
import Footer from '../components/footer';
import Cadastro from '../pages/Cadastro';
import Carrinho from '../pages/Carrinho';
import Contato from '../components/Contato';
import Categorias from '../pages/Categorias';
import SobreNos from '../components/SobreNos';
function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main-content" style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Categorias />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/carrinho" element={<Carrinho />} />
                    <Route path="/talktous" element={<Contato />} />
                    <Route path="/aboutus" element={<SobreNos />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default Rotas;
