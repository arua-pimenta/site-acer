
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, STATS, SCHEDULES } from '../constants';
import { ArrowRight, Heart, Handshake, MapPin, ChevronLeft, ChevronRight, MessageCircle, Clock, Calendar, Quote, ShieldCheck } from 'lucide-react';
import HeroImage1 from '@/assets/foto-projeto-1.jpg';
import HeroImage2 from '@/assets/foto-projeto-2.jpg';
import HeroImage3 from '@/assets/foto-abiu-capoeira-1.jpg';

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
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Carousel */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-acer-blue/90 via-acer-blue/40 to-transparent"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl text-white">
                <span className={`inline-block py-1 px-4 rounded-full bg-yellow-400 text-acer-dark text-[10px] font-black mb-6 uppercase tracking-widest transition-all duration-700 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {slide.tag}
                </span>
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight tracking-tight transition-all duration-700 delay-100 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {slide.title} <br />
                  <span className="text-yellow-400">{slide.highlight}</span>
                </h1>
                <p className={`text-lg md:text-xl text-gray-100 mb-10 max-w-2xl font-medium leading-relaxed transition-all duration-700 delay-200 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {slide.description}
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <Link
                    to={slide.primaryBtn.link}
                    className="bg-white text-acer-blue px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-yellow-400 hover:text-acer-dark transition-all text-center"
                  >
                    {slide.primaryBtn.text.toUpperCase()}
                  </Link>
                  <Link
                    to={slide.secondaryBtn.link}
                    className="bg-acer-blue/40 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-white hover:text-acer-blue transition-all text-center"
                  >
                    {slide.secondaryBtn.text.toUpperCase()}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

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
      <section className="bg-acer-blue py-16 relative z-30 -mt-10 mx-4 md:mx-10 rounded-[2rem] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-blue-400/20">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 text-center transform hover:scale-105 transition">
                <div className="text-white/60 mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-4 tracking-tight">Nossos Projetos</h2>
            <div className="h-2 w-24 bg-acer-blue rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Cada projeto é uma semente plantada. Explore nossas principais áreas de atuação e veja como estamos cultivando cidadania.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`${project.fullWidth ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'} group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500`}
            >
              {project.image ? (
                <div className="relative h-full min-h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
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
                    <p className="text-gray-200 mb-8 max-w-2xl text-sm md:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <Link to={project.link} className="inline-flex items-center gap-2 text-white font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                      Saiba Mais <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-10 h-full flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900 border-2 border-dashed border-gray-200 dark:border-gray-700">
                  <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <span className="material-icons text-4xl text-acer-blue">{project.categoryIcon}</span>
                  </div>
                  <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <Link to={project.link} className="text-acer-blue dark:text-blue-400 font-black uppercase text-xs tracking-widest hover:underline decoration-2 underline-offset-4 transition">
                    Ver detalhes
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-4 tracking-tight">Nossos Horários</h2>
            <div className="h-2 w-24 bg-acer-blue rounded-full mx-auto mb-8"></div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <button
                onClick={() => setActiveTab('districts')}
                className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${activeTab === 'districts' ? 'bg-acer-blue text-white shadow-xl scale-105' : 'bg-gray-100 dark:bg-gray-700 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                Lutas nos Distritos
              </button>
              <button
                onClick={() => setActiveTab('headquarters')}
                className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${activeTab === 'headquarters' ? 'bg-acer-blue text-white shadow-xl scale-105' : 'bg-gray-100 dark:bg-gray-700 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                Capoeira em Olímpia
              </button>
            </div>

            {(activeTab === 'districts' ? SCHEDULES.districts : SCHEDULES.headquarters).length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in duration-300">
                {(activeTab === 'districts' ? SCHEDULES.districts : SCHEDULES.headquarters).map((schedule, idx) => (
                  <div key={idx} className="flex flex-col justify-center h-full bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-acer-blue/30 transition-all group hover:-translate-y-1 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-acer-blue shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-acer-dark dark:text-white text-sm uppercase tracking-tight leading-tight">{schedule.polo}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block mt-1">{schedule.location}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
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
                        <ShieldCheck className="w-5 h-5 text-acer-blue shrink-0" />
                        <span className="text-sm font-black text-acer-blue uppercase tracking-widest leading-tight">{schedule.activity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Nenhum horário disponível no momento.</p>
            )}

            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-[2rem] relative">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-acer-blue opacity-20" />
                <p className="text-xl md:text-2xl font-display font-black text-acer-dark dark:text-blue-100 italic leading-snug relative z-10">
                  "Com respeito e dignidade é que se constrói um mundo melhor"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 dark:bg-gray-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-[100px] opacity-50"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-8 tracking-tight">Sua ajuda transforma realidades</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            A ACER depende de parceiros e doadores para manter seus projetos vivos. Você pode contribuir financeiramente, com materiais ou dedicando seu tempo como voluntário.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contato" className="bg-acer-blue hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black shadow-2xl hover:shadow-blue-500/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-3">
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
