import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../Styles/Header.css'; // Importação do CSS corrigida
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente FontAwesomeIcon
import { faCartShopping, faLeaf, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Importa ícones específicos do FontAwesome

// Componente Header que renderiza o cabeçalho da aplicação
function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cabeçalho container-fluid bg-green">
      {/* Navbar superior */}
      <div className="cabeçalho3 container-fluid">
        {/* Logo */}
        <a className="Nome_site text-light" href="/">
          <FontAwesomeIcon icon={faLeaf} /> EconAgro
        </a>
        
        {/* Barra de pesquisa */}
        <div className="container d-flex align-items-center">
          {/* Barra de pesquisa */}
          <div className="search">
            <input type="text" id="searchinput" placeholder="Pesquisar" />
            <label htmlFor="searchinput">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label> 
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          {/* Botões */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/cadastro" className="nav-link">Criar Conta</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Entrar</Link>
            </li>
            <li className="nav-item">
              <Link to="/carrinho" className="nav-link">
                <FontAwesomeIcon icon={faCartShopping} />
                {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navbar inferior */}
      <div className="cabeçalho2 container-fluid">
        <nav className="navbar navbar-expand-lg">
          {/* Botões */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Início</Link>
            </li>
            <li className="nav-item">
              <Link to="#conta" className="nav-link">Minha Conta</Link>
            </li>
            <li className="nav-item">
              <Link to="#favoritos" className="nav-link">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link to="#historico" className="nav-link">Histórico</Link>
            </li>
            <li className="nav-item">
              <Link to="/talktous" className="nav-link">Ajuda/Fale Conosco</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">Sobre Nós</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header; // Exporta o componente Header
