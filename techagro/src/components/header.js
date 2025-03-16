import React from 'react';
import '../Styles/Header.css'; // Importação do CSS corrigida
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente FontAwesomeIcon
import { faCartShopping, faLeaf, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Importa ícones específicos do FontAwesome

// Componente Header que renderiza o cabeçalho da aplicação
function Header() {
  return (
    <div className="cabeçalho container-fluid bg-green">
      {/* Navbar superior */}
      <div className="cabeçalho3 container-fluid">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/cadastro">Criar Conta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Entrar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/carrinho">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Nome do site e barra de pesquisa */}
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center">
          <a className="Nome_site navbar-brand text-light" href="#">
            <FontAwesomeIcon icon={faLeaf} /> EconAgro
          </a>
          <div className="search">
            <input type="text" id="searchinput" placeholder="Pesquisar" />
            <label htmlFor="searchinput">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label> 
          </div>
        </div>
      </nav>

      {/* Navbar inferior */}
      <div className="cabeçalho2 container-fluid">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#conta">Minha Conta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#favoritos">Favoritos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#historico">Histórico</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/talktous">Ajuda/Fale Conosco</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">Sobre Nós</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header; // Exporta o componente Header
