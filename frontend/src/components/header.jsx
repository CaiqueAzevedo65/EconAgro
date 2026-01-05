'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLeaf, faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { cart } = useCart();
  const { updateSearch } = useSearch();
  const router = useRouter();
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearchTerm.trim()) {
      updateSearch(localSearchTerm.trim());
      router.push('/');
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full shadow-md z-50 relative">
      {/* Navbar Superior: Logo, Search, Actions */}
      <nav className="bg-primary text-white py-4 px-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold text-white no-underline hover:text-gray-100 transition-colors">
            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
            EconAgro
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          {/* Desktop Search & Actions */}
          <div className="hidden lg:flex flex-1 items-center justify-between ml-8">
            {/* Barra de Pesquisa */}
            <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl mx-auto px-4">
              <div className="relative flex items-center w-full">
                <input
                  type="search"
                  placeholder="Pesquisar produtos..."
                  className="w-full py-2 px-4 pr-10 rounded-full text-dark bg-white focus:outline-none focus:ring-2 focus:ring-accent border-none"
                  value={localSearchTerm}
                  onChange={(e) => setLocalSearchTerm(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-4 text-primary hover:text-secondary transition-colors bg-transparent border-none cursor-pointer flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>

            {/* Links da Direita */}
            <div className="flex items-center space-x-6 ml-4">
              <Link href="/cadastro" className="text-white hover:text-gray-200 font-medium no-underline">
                Criar Conta
              </Link>
              <Link href="/login" className="text-white hover:text-gray-200 font-medium no-underline">
                Entrar
              </Link>
              <Link href="/carrinho" className="text-white hover:text-gray-200 relative no-underline flex items-center">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-error text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 w-full border-t border-primary-light pt-4">
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative flex items-center">
                <input
                  type="search"
                  placeholder="Pesquisar produtos..."
                  className="w-full py-2 px-4 rounded-full text-dark focus:outline-none focus:ring-2 focus:ring-accent border-none"
                  value={localSearchTerm}
                  onChange={(e) => setLocalSearchTerm(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-0 bottom-0 text-primary flex items-center justify-center bg-transparent border-none"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
            <div className="flex flex-col space-y-3">
              <Link href="/cadastro" className="text-white hover:text-gray-200 font-medium no-underline block py-2 border-b border-primary-light" onClick={() => setIsMenuOpen(false)}>
                Criar Conta
              </Link>
              <Link href="/login" className="text-white hover:text-gray-200 font-medium no-underline block py-2 border-b border-primary-light" onClick={() => setIsMenuOpen(false)}>
                Entrar
              </Link>
              <Link href="/carrinho" className="text-white hover:text-gray-200 flex items-center no-underline block py-2" onClick={() => setIsMenuOpen(false)}>
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                Carrinho ({itemCount})
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Navbar Inferior: Categorias/Navegação */}
      <div className="bg-secondary text-white py-2 shadow-inner">
        <div className="container mx-auto overflow-x-auto">
          <nav className={`flex flex-col lg:flex-row lg:justify-center items-start lg:items-center ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}>
            <Link href="/" className="px-4 py-2 hover:bg-primary rounded transition-colors font-medium no-underline text-white whitespace-nowrap block w-full lg:w-auto text-left lg:text-center">
              Início
            </Link>
            <Link href="/categoria/Grãos" className="px-4 py-2 hover:bg-primary rounded transition-colors font-medium no-underline text-white whitespace-nowrap block w-full lg:w-auto text-left lg:text-center">
              Grãos
            </Link>
            <Link href="/categoria/Frutas" className="px-4 py-2 hover:bg-primary rounded transition-colors font-medium no-underline text-white whitespace-nowrap block w-full lg:w-auto text-left lg:text-center">
              Frutas
            </Link>
            <Link href="/categoria/Legumes" className="px-4 py-2 hover:bg-primary rounded transition-colors font-medium no-underline text-white whitespace-nowrap block w-full lg:w-auto text-left lg:text-center">
              Legumes
            </Link>
            <Link href="/talktous" className="px-4 py-2 hover:bg-primary rounded transition-colors font-medium no-underline text-white whitespace-nowrap block w-full lg:w-auto text-left lg:text-center">
              Fale Conosco
            </Link>
            <Link href="/aboutus" className="px-4 py-2 hover:bg-primary rounded transition-colors font-medium no-underline text-white whitespace-nowrap block w-full lg:w-auto text-left lg:text-center">
              Sobre Nós
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
