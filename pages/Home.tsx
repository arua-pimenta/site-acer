import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, STATS, SCHEDULES } from '../constants';
import { ArrowRight, Heart, Handshake, MapPin, ChevronLeft, ChevronRight, MessageCircle, Clock, Calendar, Quote, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImage1 from '@/assets/foto-projeto-1.webp';
import HeroImage2 from '@/assets/foto-projeto-2.webp';
import HeroImage3 from '@/assets/foto-abiu-capoeira-1.webp';
import BannerMatriculas from '@/assets/matriculas-abertas-banner.webp';

const slides = [
  {
    id: 'general',
    tag: 'Nossa Missão em Ação',
    title: 'Transformando Vidas Através do',
    highlight: 'Esporte e Cultura',
    description: 'Conheça as iniciativas da ACER que estão construindo um futuro melhor para nossas crianças e jovens em Olímpia.',
    image: HeroImage1,
    primaryBtn: { text: 'Ver Projetos', link: '/projetos' },
    secondaryBtn: { text: 'Sobre Nós', link: '/sobre' }
  },
  {
    id: 'olho-no-futuro',
    tag: 'Projeto de Destaque',
    title: 'Olho no',
    highlight: 'Futuro',
    description: 'A capoeira como ferramenta pedagógica central na formação de cidadãos conscientes e disciplinados.',
    image: HeroImage2,
    primaryBtn: { text: 'Conhecer Projeto', link: '/olho-no-futuro' },
    secondaryBtn: { text: 'Matricule-se Agora', link: '/olho-no-futuro#matricula' }
  },
  {
    id: 'abiu',
    tag: 'Cultura e Tradição',
    title: 'Grupo ABIU',
    highlight: 'Capoeira',
    description: 'Preservando as raízes da nossa arte através da Ordem e Progresso, levando a ginga de Olímpia para o mundo.',
    image: HeroImage3,
    primaryBtn: { text: 'Ver Horários', link: '/abiu' },
    secondaryBtn: { text: 'Falar Conosco', link: '/contato' }
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'districts' | 'headquarters'>('districts');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Carousel */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image with Zoom and Fade */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                initial={{ scale: 1.12 }}
                animate={{ scale: 1.02 }}
                transition={{ duration: 7, ease: 'easeOut' }}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover premium-image"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-acer-blue/90 via-acer-blue/40 to-transparent dark:from-gray-950/95 dark:via-gray-950/40"></div>
              <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl text-white">
                <motion.span
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block py-1.5 px-4 rounded-full bg-yellow-400 text-acer-dark text-[10px] font-black mb-6 uppercase tracking-widest shadow-lg shadow-yellow-400/20"
                >
                  {slides[currentSlide].tag}
                </motion.span>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight tracking-tight"
                >
                  {slides[currentSlide].title} <br />
                  <span className="text-yellow-400">{slides[currentSlide].highlight}</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl text-gray-100 dark:text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to={slides[currentSlide].primaryBtn.link}
                    className="bg-white text-acer-blue px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-yellow-400 hover:text-acer-dark dark:hover:bg-yellow-400 dark:hover:text-acer-dark transition-all text-center shadow-lg"
                  >
                    {slides[currentSlide].primaryBtn.text.toUpperCase()}
                  </Link>
                  <Link
                    to={slides[currentSlide].secondaryBtn.link}
                    className="bg-acer-blue/40 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-white hover:text-acer-blue transition-all text-center"
                  >
                    {slides[currentSlide].secondaryBtn.text.toUpperCase()}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-10 bg-yellow-400' : 'w-4 bg-white/40'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-acer-blue dark:bg-gray-800/80 py-16 relative z-30 -mt-10 mx-4 md:mx-10 rounded-[2rem] shadow-2xl transition-colors duration-300 border border-transparent dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-blue-400/20 dark:divide-gray-700">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center p-4 text-center transform hover:scale-105 transition duration-300"
              >
                <div className="text-white/60 dark:text-blue-400 mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 dark:text-gray-300 text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ Banner Destaque: Emenda Parlamentar ★ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/emenda-parlamentar"
            className="block group"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-acer-blue via-blue-700 to-blue-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 shadow-2xl hover:shadow-acer-blue/30 transition-all duration-500"
            >
              {/* Animated Orbs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 animate-float-slow"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl -ml-20 -mb-20 animate-float-slow-reverse"></div>
              
              {/* Shimmer overlay */}
              <div className="absolute inset-0 animate-shimmer rounded-[2.5rem] pointer-events-none"></div>

              {/* "NOVO" indicator */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400 text-acer-dark text-[10px] font-black uppercase tracking-widest shadow-lg shadow-yellow-400/30 animate-bounce">
                  ✦ NOVO
                </span>
              </div>

              <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left: Badge + Texto */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-5 border border-emerald-400/20 animate-pulse-badge">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Recurso Aprovado • Em Execução
                  </div>
                  <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-3 tracking-tight leading-tight">
                    Emenda Parlamentar<br />
                    <span className="text-yellow-400">Aprovada com Sucesso</span>
                  </h2>
                  <p className="text-blue-100 text-base md:text-lg font-medium max-w-lg">
                    Recurso de <strong className="text-white">R$ 979.999,00</strong> via Emenda do Dep. David Soares para implementação do projeto esportivo em Olímpia.
                  </p>
                </div>

                {/* Right: Valor grande + CTA */}
                <div className="flex flex-col items-center text-center flex-shrink-0">
                  <span className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">Valor Global</span>
                  <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-1">R$ 979 mil</span>
                  <span className="text-blue-200 text-xs font-medium mb-5">360 Beneficiários • 5 Modalidades</span>
                  <div className="bg-white text-acer-blue px-8 py-3.5 rounded-xl font-black text-xs tracking-widest group-hover:bg-yellow-400 group-hover:text-acer-dark transition-colors flex items-center gap-2 shadow-lg shadow-white/20">
                    VER DETALHES <ArrowRight className="w-4 h-4 animate-slide-arrow" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Projects Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-4 tracking-tight">Nossos Projetos</h2>
            <div className="h-2 w-24 bg-acer-blue rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Cada projeto é uma semente plantada. Explore nossas principais áreas de atuação e veja como estamos cultivando cidadania.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`${project.fullWidth ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'} group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500`}
            >
              {project.image ? (
                <div className="relative h-full min-h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 premium-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent dark:from-gray-950/95 dark:via-gray-950/40"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    {project.status && (
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-yellow-400 text-acer-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{project.status}</span>
                        {project.location && (
                          <span className="text-gray-300 text-xs font-bold flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {project.location}
                          </span>
                        )}
                      </div>
                    )}
                    <h3 className="text-3xl font-display font-extrabold text-white mb-4 group-hover:text-blue-300 transition-colors tracking-tight">{project.title}</h3>
                    <p className="text-gray-200 dark:text-gray-300 mb-8 max-w-2xl text-sm md:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <Link to={project.link} className="inline-flex items-center gap-2 text-white font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                      Saiba Mais <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-10 h-full flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900/40 border-2 border-dashed border-gray-200 dark:border-gray-700/60 rounded-3xl">
                  {project.categoryIcon && (
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all border border-transparent dark:border-gray-700">
                      <span className="material-icons text-4xl text-acer-blue dark:text-blue-400">{project.categoryIcon}</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <Link to={project.link} className="text-acer-blue dark:text-blue-400 font-black uppercase text-xs tracking-widest hover:underline decoration-2 underline-offset-4 transition">
                    Ver detalhes
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ★ Banner de Matrículas Abertas ★ */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700/80 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 transition-colors duration-300">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 text-xs font-black uppercase tracking-widest mb-6">
                ✦ Matrículas Abertas
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-6 tracking-tight uppercase leading-tight">
                Esporte e Cultura <br />
                <span className="text-acer-blue dark:text-blue-400">100% Gratuito</span>
              </h2>
              <p className="text-gray-650 dark:text-gray-300 text-lg font-medium mb-8 leading-relaxed max-w-xl">
                Oferecemos aulas gratuitas para crianças e adolescentes de <strong>06 a 18 anos</strong>. Uma iniciativa para promover a cidadania, disciplina e saúde através do esporte!
              </p>

              {/* Grid of modalities */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-left">
                {[
                  { name: "Capoeira", bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
                  { name: "Muay Thai", bg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20" },
                  { name: "Futebol", bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
                  { name: "Handebol", bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
                  { name: "Vôlei", bg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" }
                ].map((item, idx) => (
                  <div key={idx} className={`px-4 py-3 rounded-2xl border text-sm font-bold text-center ${item.bg}`}>
                    {item.name}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="https://wa.me/5517997033426?text=Olá!%20Gostaria%20de%20matricular%20meu%20filho%20nas%20aulas%20gratuitas%20da%20ACER."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-acer-blue hover:bg-blue-750 dark:bg-yellow-400 dark:text-acer-dark dark:hover:bg-yellow-500 text-white px-8 py-4.5 rounded-2xl font-black text-sm tracking-widest shadow-lg shadow-acer-blue/20 dark:shadow-yellow-400/10 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  INSCREVER VIA WHATSAPP
                </a>
                <Link
                  to="/olho-no-futuro#matricula"
                  className="bg-transparent text-acer-dark dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-4 rounded-2xl font-black text-sm tracking-widest transition transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  VER DOCUMENTAÇÃO
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="relative group mx-auto max-w-sm rounded-[2rem] overflow-hidden shadow-2xl transition duration-500 hover:scale-[1.02] border-4 border-white dark:border-gray-700">
                <img
                  src={BannerMatriculas}
                  alt="Cartaz Informativo Aulas Gratuitas ACER"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Schedules Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-4 tracking-tight">Nossos Horários</h2>
            <div className="h-2 w-24 bg-acer-blue rounded-full mx-auto mb-8"></div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 max-w-md mx-auto">
              <button
                onClick={() => setActiveTab('districts')}
                className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${activeTab === 'districts' ? 'bg-acer-blue text-white shadow-xl scale-105' : 'bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'}`}
              >
                Lutas nos Distritos
              </button>
              <button
                onClick={() => setActiveTab('headquarters')}
                className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${activeTab === 'headquarters' ? 'bg-acer-blue text-white shadow-xl scale-105' : 'bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'}`}
              >
                Capoeira em Olímpia
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {(activeTab === 'districts' ? SCHEDULES.districts : SCHEDULES.headquarters).length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(activeTab === 'districts' ? SCHEDULES.districts : SCHEDULES.headquarters).map((schedule, idx) => (
                      <div key={idx} className="flex flex-col justify-center h-full bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/80 hover:border-acer-blue/30 dark:hover:border-blue-400/30 transition-all group hover:-translate-y-1 shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-acer-blue dark:text-blue-400 shrink-0">
                            <MapPin className="w-6 h-6" />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-acer-dark dark:text-white text-sm uppercase tracking-tight leading-tight">{schedule.polo}</h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block mt-1">{schedule.location}</span>
                          </div>
                        </div>
                        <div className="space-y-4 text-left">
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                            <Calendar className="w-5 h-5 text-yellow-400 shrink-0" />
                            <span className="text-sm font-bold leading-tight">{schedule.days}</span>
                          </div>
                          {schedule.time && (
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                              <Clock className="w-5 h-5 text-yellow-400 shrink-0" />
                              <span className="text-sm font-bold">{schedule.time}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <ShieldCheck className="w-5 h-5 text-acer-blue dark:text-blue-400 shrink-0" />
                            <span className="text-sm font-black text-acer-blue dark:text-blue-400 uppercase tracking-widest leading-tight">{schedule.activity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">Nenhum horário disponível no momento.</p>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-blue-50 dark:bg-gray-800/60 p-8 rounded-[2rem] relative border border-transparent dark:border-gray-700/50">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-acer-blue dark:text-blue-400 opacity-20" />
                <p className="text-xl md:text-2xl font-display font-black text-acer-dark dark:text-blue-100 italic leading-snug relative z-10">
                  "Com respeito e dignidade é que se constrói um mundo melhor"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white dark:bg-gray-900 py-24 md:py-32 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/10 rounded-full blur-[100px] opacity-50"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-8 tracking-tight">Sua ajuda transforma realidades</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-medium">
            A ACER depende de parceiros e doadores para manter seus projetos vivos. Você pode contribuir financeiramente, com materiais ou dedicando seu tempo como voluntário.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contato" className="bg-acer-blue hover:bg-blue-700 dark:bg-yellow-400 dark:text-acer-dark dark:hover:bg-yellow-500 text-white px-10 py-5 rounded-2xl font-black shadow-2xl transition transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 fill-current" />
              QUERO DOAR
            </Link>
            <Link to="/contato" className="bg-white dark:bg-gray-800 text-acer-dark dark:text-white border-2 border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-10 py-5 rounded-2xl font-black shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <Handshake className="w-6 h-6" />
              SER VOLUNTÁRIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
