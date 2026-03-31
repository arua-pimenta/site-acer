
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { INSTITUTION_DATA } from '../constants';
import Logo from '@/assets/logo-acer.webp';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const whatsappUrl = `https://wa.me/${INSTITUTION_DATA.whatsapp}`;

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Apoios', href: '/emenda-parlamentar' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Transparência', href: '/transparencia' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Oficial ACER */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src={Logo}
              alt="Logo ACER"
              className="h-[60px] w-auto group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-2xl text-acer-blue dark:text-blue-400 tracking-tighter">ACER</span>
              <span className="text-[8px] font-bold text-acer-blue/70 dark:text-blue-400/70 uppercase tracking-tighter hidden sm:block">Associação Cultural Raízes</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `font-medium transition-colors ${isActive
                    ? 'text-acer-blue dark:text-blue-400 border-b-2 border-acer-blue'
                    : 'text-acer-dark dark:text-gray-300 hover:text-acer-blue dark:hover:text-blue-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}



            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-acer-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Seja um Apoiador
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-acer-blue focus:outline-none"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-semibold text-acer-dark dark:text-gray-300 border-b border-gray-50 dark:border-gray-800"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-acer-blue text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Seja um Apoiador (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
