import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLeaf, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Header.css';

function Header() {
  const { cart } = useCart();
  const { updateSearch } = useSearch();
  const navigate = useNavigate();
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearchTerm.trim()) {
      updateSearch(localSearchTerm.trim());
      navigate('/');
    }
  };

  return (
    <header className="cabeçalho">
      {/* Navbar Superior: Logo, Search, Actions */}
      <Navbar expand="lg" className="bg-green py-3" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="Nome_site d-flex align-items-center">
            <FontAwesomeIcon icon={faLeaf} className="me-2" /> EconAgro
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Barra de Pesquisa Centralizada */}
            <div className="mx-auto my-2 my-lg-0 w-100 search-container">
              <Form onSubmit={handleSearchSubmit} className="d-flex w-100">
                <InputGroup>
                  <Form.Control
                    type="search"
                    placeholder="Pesquisar produtos..."
                    className="search-input"
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                    aria-label="Search"
                  />
                  <button className="btn-search" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </InputGroup>
              </Form>
            </div>

            {/* Links da Direita */}
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/cadastro" className="text-light">Criar Conta</Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-light">Entrar</Nav.Link>
              <Nav.Link as={Link} to="/carrinho" className="text-light position-relative">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
                {itemCount > 0 && (
                  <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {itemCount}
                  </span>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar Inferior: Categorias/Navegação */}
      <div className="cabeçalho2 bg-green-dark">
        <Container fluid>
          <Nav className="justify-content-center flex-wrap">
            <Nav.Link as={Link} to="/" className="text-light nav-item-custom">Início</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Grãos" className="text-light nav-item-custom">Grãos</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Frutas" className="text-light nav-item-custom">Frutas</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Legumes" className="text-light nav-item-custom">Legumes</Nav.Link>
            <Nav.Link as={Link} to="/talktous" className="text-light nav-item-custom">Fale Conosco</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="text-light nav-item-custom">Sobre Nós</Nav.Link>
          </Nav>
        </Container>
      </div>
    </header>
  );
}

export default Header;
