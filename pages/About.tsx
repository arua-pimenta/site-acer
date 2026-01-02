
import React from 'react';
import { INSTITUTION_DATA, STATS } from '../constants';
import { ShieldCheck, Target, Heart, Award, Quote } from 'lucide-react';
import SobreNos from '../assets/sobre-nos.jpg';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-acer-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">Nossa História</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 font-medium">
            Desde {INSTITUTION_DATA.founded}, transformando a realidade de crianças e jovens em Olímpia através das raízes culturais brasileiras.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={SobreNos}
              alt="Crianças em aula de capoeira"
              className="rounded-[3rem] shadow-2xl relative z-10 w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-400 rounded-full -z-0 opacity-20 blur-3xl"></div>
          </div>
          <div>
            <span className="text-acer-blue font-black uppercase tracking-widest text-xs mb-4 block">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-8 tracking-tight">
              A força das nossas <span className="text-acer-blue">raízes</span> construindo o amanhã.
            </h2>
            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400">
              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border-l-4 border-acer-blue mb-8">
                <Quote className="w-8 h-8 text-acer-blue mb-2 opacity-50" />
                <p className="text-xl font-display font-black text-acer-dark dark:text-blue-100 italic leading-snug">
                  "Com respeito e dignidade é que se constrói um mundo melhor"
                </p>
              </div>

              <p>
                Nossa história começa em <strong>1987</strong>, nascida da paixão de um grupo pela Capoeira. O que iniciou como rodas informais transformou-se em um movimento de impacto social.
              </p>
              <p>
                Em <strong>1998</strong>, formalizamos nossa atuação como <strong>Associação de Capoeira Raízes – ABIÚ BRASIL CAPOEIRA</strong>, estruturando nossa metodologia pedagógica.
              </p>
              <p>
                Hoje, evoluímos para o modelo atual como <strong>ACER</strong>, atendendo aproximadamente <strong>300 crianças e adolescentes</strong> em Olímpia, Baguaçu e Ribeiro dos Santos. Nossa expansão reflete o compromisso com o desenvolvimento integral e a cidadania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-black text-acer-dark dark:text-white uppercase">Nossos Pilares</h2>
            <div className="h-1.5 w-20 bg-acer-blue mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-10 h-10" />, title: "Missão", desc: "Promover o desenvolvimento integral (físico, cognitivo e emocional) e a inclusão social descentralizada em Olímpia e seus distritos." },
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Visão", desc: "Ser referência na transformação de vidas através da cultura e do esporte, ampliando horizontes para a juventude." },
              { icon: <Heart className="w-10 h-10" />, title: "Valores", desc: "Respeito, dignidade, excelência pedagógica e compromisso ético com a formação de cidadãos conscientes." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center group hover:-translate-y-2 transition-all">
                <div className="bg-blue-50 dark:bg-blue-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-acer-blue group-hover:bg-acer-blue group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-acer-blue rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-12 uppercase tracking-tight">Equipe Técnica Multidisciplinar</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <Award className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Coordenação & Apoio</h3>
                <ul className="space-y-2 text-blue-100 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Coordenação Pedagógica</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Psicologia</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Serviço Social</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <ShieldCheck className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
                <ul className="space-y-2 text-blue-100 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Reforço Escolar</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Acompanhamento Familiar</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <Target className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Instrutores Esportivos</h3>
                <ul className="space-y-2 text-blue-100 font-medium columns-1">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Capoeira & Jiu-Jitsu</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Muay Thai & Futebol</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Ginástica & Dança</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
