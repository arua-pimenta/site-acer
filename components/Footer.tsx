
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';
import { INSTITUTION_DATA } from '../constants';
import LogoAcer from '@/assets/logo-acer-preto-branco.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Logo */}
          <div className="col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={LogoAcer}
                alt="Logo ACER"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-2xl text-white tracking-tighter uppercase self-center mt-1">ACER</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Associação Cultural Esportiva Raízes. Desenvolvendo cidadania, cultura e esporte para um futuro mais justo desde {INSTITUTION_DATA.founded}.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/associacao_cultural_raizes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/profile.php?id=61585717772967" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Acesso Rápido</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-acer-blue transition">Início</Link></li>
              <li><Link to="/projetos" className="hover:text-acer-blue transition">Projetos</Link></li>
              <li><Link to="/sobre" className="hover:text-acer-blue transition">Sobre a ACER</Link></li>
              <li><Link to="/contato" className="hover:text-acer-blue transition">Contato</Link></li>
            </ul>
          </div>

          {/* Transparency & Certifications */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Transparência</h4>
            <ul className="space-y-4 text-sm font-medium mb-8">
              <li><Link to="/transparencia" className="hover:text-acer-blue transition">Relatórios Anuais</Link></li>
              <li><Link to="/transparencia" className="hover:text-acer-blue transition">Estatuto</Link></li>
              <li className="text-xs text-gray-500 mt-2 uppercase">CNPJ: {INSTITUTION_DATA.cnpj}</li>
            </ul>

            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest text-acer-blue/80">Certificações Oficiais</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• Utilidade Pública Municipal (1999)</li>
              <li>• Registro CMAS</li>
              <li>• Registro CMDCA</li>
              <li>• Certificado CRCE</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-acer-blue group-hover:text-blue-400 transition" />
                <span className="text-gray-400 group-hover:text-gray-200 transition">{INSTITUTION_DATA.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-acer-blue group-hover:text-blue-400 transition" />
                <a href={`mailto:${INSTITUTION_DATA.email}`} className="text-gray-400 group-hover:text-gray-200 transition">{INSTITUTION_DATA.email}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-acer-blue group-hover:text-blue-400 transition" />
                <span className="text-gray-400 group-hover:text-gray-200 transition">{INSTITUTION_DATA.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} {INSTITUTION_DATA.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-white transition">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-white transition">Termos de Uso</Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://wa.me/5517997521693"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors"
          >
            Site desenvolvido por Olpdesigner
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
