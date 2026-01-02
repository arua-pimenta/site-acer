
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Transparency from './pages/Transparency';
import Abada from './pages/Abada';
import OlhoNoFuturo from './pages/OlhoNoFuturo';
import RaizesEsporte from './pages/RaizesEsporte';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-acer-dark dark:text-gray-100 selection:bg-acer-blue selection:text-white">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/transparencia" element={<Transparency />} />
            <Route path="/abiu" element={<Abada />} />
            <Route path="/olho-no-futuro" element={<OlhoNoFuturo />} />
            <Route path="/raizes-esporte" element={<RaizesEsporte />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </HashRouter>
  );
};

export default App;
