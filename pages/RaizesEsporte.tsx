import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, TrendingUp, Swords, MapPin, Activity, Heart, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import { INSTITUTION_DATA } from '../constants';
import HeroImage from '@/assets/raizes-esportes-2.webp';

const RaizesEsporte: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="pb-24 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src={HeroImage}
                    alt="Artes Marciais - Raízes de Esporte"
                    decoding="async"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover premium-image"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-acer-blue/90 via-acer-blue/80 to-acer-blue/60 dark:from-gray-950/90 dark:via-gray-950/70 dark:to-transparent backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-yellow-400 text-acer-dark text-xs font-black mb-6 uppercase tracking-widest shadow-lg">
                        Plano de Trabalho 2025/2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight uppercase drop-shadow-lg">
                        Raízes de Esporte
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
                        Esporte, Educação e Cidadania em Baguaçu e Ribeiro dos Santos
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                {/* Bento Grid Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-150 dark:border-gray-700/80 hover:-translate-y-1 transition-transform duration-300">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue dark:text-blue-450 mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-1">180</h3>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Alunos Beneficiados</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-150 dark:border-gray-700/80 hover:-translate-y-1 transition-transform duration-300">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue dark:text-blue-450 mb-4">
                            <Swords className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-display font-black text-acer-dark dark:text-white mb-1 leading-tight">Jiu-Jitsu & Muay Thai</h3>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Modalidades</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-150 dark:border-gray-700/80 hover:-translate-y-1 transition-transform duration-300">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue dark:text-blue-450 mb-4">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-1">12 Meses</h3>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">De Impacto Contínuo</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-150 dark:border-gray-700/80 hover:-translate-y-1 transition-transform duration-300">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue dark:text-blue-450 mb-4">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-1">R$ 289.500</h3>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Investimento Total</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 font-medium">
                        <span className="text-acer-blue dark:text-blue-400 font-black uppercase tracking-widest text-xs mb-4 block">Justificativa</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-6 tracking-tight uppercase">
                            Levando oportunidades onde elas são mais necessárias.
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Os distritos de Baguaçu e Ribeiro dos Santos enfrentam historicamente uma carência significativa de opções de lazer, cultura e esporte. Essa lacuna deixa crianças e adolescentes mais expostos à ociosidade e riscos sociais.
                        </p>
                        <p className="leading-relaxed">
                            O projeto <strong>Raízes de Esporte</strong> nasce para preencher esse vazio, descentralizando as ações da ACER e levando a estrutura, a disciplina e os valores das artes marciais para dentro dessas comunidades.
                        </p>
                    </div>

                    <div className="bg-acer-blue dark:bg-gray-800/85 p-10 md:p-14 rounded-[3rem] text-white relative overflow-hidden shadow-2xl border border-transparent dark:border-gray-700/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
                        <div className="relative z-10">
                            <blockquote className="text-2xl md:text-3xl font-display font-black italic leading-normal mb-8 text-blue-100">
                                "Com respeito e dignidade é que se constrói um mundo melhor"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
                                <span className="font-bold uppercase tracking-widest text-sm opacity-80">Lema ACER</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Polos Grid */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-4 uppercase">Mapa de Atuação</h2>
                        <div className="h-1.5 w-24 bg-acer-blue dark:bg-blue-400 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Baguaçu */}
                        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl border border-gray-150 dark:border-gray-700/80 shadow-lg hover:border-acer-blue/30 dark:hover:border-blue-400/30 transition-all duration-300 group">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-acer-blue dark:text-blue-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Distrito</span>
                                    <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white">Polo Baguaçu</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Centro Múltiplo Uso</p>
                                </div>
                                <div className="p-4 bg-acer-blue dark:bg-blue-900/40 text-white dark:text-blue-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 animate-pulse" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-900/40 p-4 rounded-xl border border-transparent dark:border-gray-800">
                                    <Calendar className="w-5 h-5 text-yellow-400" />
                                    <span>Segunda, Quarta e Sexta</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-900/40 p-4 rounded-xl border border-transparent dark:border-gray-800">
                                    <Activity className="w-5 h-5 text-yellow-400" />
                                    <span>17h às 21h</span>
                                </div>
                            </div>
                        </div>

                        {/* Ribeiro dos Santos */}
                        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl border border-gray-150 dark:border-gray-700/80 shadow-lg hover:border-acer-blue/30 dark:hover:border-blue-400/30 transition-all duration-300 group">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-acer-blue dark:text-blue-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Distrito</span>
                                    <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white">Polo Ribeiro dos Santos</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Quadra Coberta</p>
                                </div>
                                <div className="p-4 bg-acer-blue dark:bg-blue-900/40 text-white dark:text-blue-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 animate-pulse" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-900/40 p-4 rounded-xl border border-transparent dark:border-gray-800">
                                    <Calendar className="w-5 h-5 text-yellow-400" />
                                    <span>Terça e Quinta</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-900/40 p-4 rounded-xl border border-transparent dark:border-gray-800">
                                    <Activity className="w-5 h-5 text-yellow-400" />
                                    <span>17h às 21h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Methodology Details */}
                <section className="mb-24 bg-gray-50 dark:bg-gray-950 rounded-[3rem] p-10 md:p-16 border border-gray-100 dark:border-gray-800">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-4 uppercase">Metodologia e Resultados</h2>
                        <p className="text-gray-550 dark:text-gray-400 max-w-2xl mx-auto font-medium">Mais do que esporte, formamos cidadãos ativos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-acer-blue dark:text-blue-400 mb-6 border border-transparent dark:border-gray-700">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold mb-2 dark:text-white">Desenvolvimento Físico</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Melhora da saúde, coordenação motora e redução do sedentarismo.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-acer-blue dark:text-blue-400 mb-6 border border-transparent dark:border-gray-700">
                                <Smile className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold mb-2 dark:text-white">Socioemocional</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Fortalecimento da disciplina, respeito, autoconfiança e controle emocional.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-acer-blue dark:text-blue-400 mb-6 border border-transparent dark:border-gray-700">
                                <Users className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold mb-2 dark:text-white">Inclusão Social</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Sentimento de pertencimento, trabalho em equipe e cidadania ativa.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center pb-12">
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-acer-blue to-blue-450 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                        <Link
                            to="/contato"
                            className="relative bg-acer-blue dark:bg-yellow-400 dark:text-acer-dark dark:hover:bg-yellow-500 text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl hover:-translate-y-0.5"
                        >
                            <Heart className="w-6 h-6 fill-current" />
                            Seja um Apoiador
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default RaizesEsporte;
