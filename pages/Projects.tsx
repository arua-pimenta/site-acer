
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowRight, CheckCircle2, MapPin, Users, Calendar } from 'lucide-react';

import HeaderImage from '@/assets/foto-projeto-2.webp';

const Projects: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      {/* Flagship Project Highlight */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeaderImage}
            className="w-full h-full object-cover"
            alt="Capoeira background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1 bg-yellow-400 text-acer-dark text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
              Projeto Principal
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter uppercase leading-none">
              Olho no <br /><span className="text-yellow-400">Futuro</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
              Utilizando a Capoeira como ferramenta pedagógica central, transformamos a disciplina marcial em lições de vida para crianças de 6 a 17 anos.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-3">
                <Users className="text-yellow-400 w-6 h-6" />
                <span className="font-bold">250+ Alunos Ativos</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400 w-6 h-6" />
                <span className="font-bold">Olímpia e Região</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/olho-no-futuro" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-white hover:text-acer-blue transition-all inline-block">
                SAIBA MAIS
              </Link>
              <Link to="/olho-no-futuro#matricula" className="bg-yellow-400 text-acer-dark px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-white hover:text-acer-blue transition-all inline-block shadow-xl">
                MATRICULAR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-black text-acer-dark dark:text-white uppercase mb-8">Nossa Metodologia</h2>
            <div className="space-y-6">
              {[
                "Aulas práticas de Capoeira (técnica, música e história).",
                "Acompanhamento escolar obrigatório para permanência no projeto.",
                "Palestras sobre cidadania, higiene e prevenção às drogas.",
                "Apoio psicossocial para as famílias dos alunos.",
                "Integração com a comunidade através de rodas públicas."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-acer-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-10 rounded-[3rem] border border-blue-100 dark:border-gray-700">
            <h3 className="text-2xl font-display font-black text-acer-blue dark:text-blue-400 mb-6">Impacto Comprovado</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 font-medium">
              O projeto Olho no Futuro tem reduzido a evasão escolar e melhorado o comportamento disciplinar dos alunos em 85% segundo feedbacks das escolas parceiras.
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl flex justify-between items-center shadow-sm">
                <span className="font-bold text-acer-dark dark:text-gray-200">Aumento no rendimento escolar</span>
                <span className="text-acer-blue font-black">+40%</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl flex justify-between items-center shadow-sm">
                <span className="font-bold text-acer-dark dark:text-gray-200">Participação da família</span>
                <span className="text-acer-blue font-black">90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Projects Grid */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-black text-center uppercase mb-16 dark:text-white">Outras Iniciativas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.filter(p => p.id !== 'olho-no-futuro').map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image || "https://picsum.photos/id/100/800/600"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={project.title} />
                  <div className="absolute top-4 left-4 bg-acer-blue text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                    Iniciativa ACER
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-black mb-4 dark:text-white">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <Link to={project.link} className="inline-flex items-center gap-2 text-acer-blue dark:text-blue-400 font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                    SABER MAIS <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
