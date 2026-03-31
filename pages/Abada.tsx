
import React from 'react';
import { CAPOEIRA_SCHEDULE, INSTITUTION_DATA } from '../constants';
import { Clock, Info, Users, Globe, Music, MapPin, Phone, Quote } from 'lucide-react';
import AbiuImage from '@/assets/foto-abiu-capoeira-1.webp';

const Abada: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={AbiuImage}
          alt="Capoeira ABIU"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-block bg-yellow-400 text-acer-dark px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-xl">
            Ordem e Progresso
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase">ABIU Capoeira – A Raiz da ACER</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">Associação de Capoeira Raízes – ABIÚ BRASIL CAPOEIRA</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* History & Info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-acer-blue p-2 rounded-xl text-white"><Globe className="w-6 h-6" /></div>
                <h2 className="text-3xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">Nosso Grupo</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border-l-4 border-acer-blue mb-8">
                  <Quote className="w-8 h-8 text-acer-blue mb-2 opacity-50" />
                  <p className="text-xl font-display font-black text-acer-dark dark:text-blue-100 italic leading-snug">
                    "Com respeito e dignidade é que se constrói um mundo melhor"
                  </p>
                </div>
                <p>
                  O grupo teve origem em <strong>1987</strong>, sendo o pilar fundador da associação. Foi formalizado em <strong>1998</strong> como <strong>'Associação de Capoeira Raízes – ABIÚ BRASIL CAPOEIRA'</strong>.
                </p>
                <p>
                  Focamos na preservação das tradições, musicalidade e técnica da capoeira como ferramenta de inclusão social e cidadania.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <Music className="w-8 h-8 text-acer-blue mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">Tradição e Técnica</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Preservação da musicalidade e dos fundamentos da capoeira como patrimônio cultural.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <Globe className="w-8 h-8 text-acer-blue mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">Presença Nacional</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Participação ativa em eventos e campeonatos em estados como Minas Gerais e Bahia, fortalecendo vínculos.</p>
              </div>
            </div>

            <div className="bg-yellow-400 p-8 rounded-[2rem] text-acer-dark">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-8 h-8" />
                <h3 className="text-2xl font-black uppercase tracking-tighter">Mais Informações</h3>
              </div>
              <p className="text-sm font-bold opacity-80 mb-4 italic">Para matrículas e dúvidas sobre as aulas, entre em contato:</p>
              <span className="text-3xl font-display font-black">{INSTITUTION_DATA.whatsappDisplay}</span>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 sticky top-32">
            <div className="bg-acer-blue p-10 text-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-display font-black uppercase tracking-tighter">Agenda de Aulas</h2>
                <Clock className="w-10 h-10 text-blue-200/50" />
              </div>
              <p className="text-blue-100 font-medium opacity-90 italic">Confira os polos e horários da ABIU em Olímpia e região.</p>
            </div>
            <div className="p-10 space-y-6">
              {CAPOEIRA_SCHEDULE.map((item, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 group hover:border-acer-blue transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-acer-blue" />
                      <span className="text-xs font-black text-acer-blue dark:text-blue-400 uppercase tracking-widest">{item.level}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <h4 className="text-lg font-bold text-acer-dark dark:text-white">{item.day}</h4>
                      {item.time && (
                        <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-lg text-xs font-black text-gray-500 shadow-sm border border-gray-100 dark:border-gray-700">
                          {item.time}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-8">
                  <Info className="w-5 h-5 text-acer-blue" />
                  <span>Polos distribuídos por toda a cidade de Olímpia.</span>
                </div>
                <a
                  href="#/contato"
                  className="block w-full text-center bg-acer-blue text-white py-5 rounded-2xl font-black shadow-xl hover:bg-blue-700 transition transform hover:scale-[1.02]"
                >
                  QUERO PARTICIPAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abada;
