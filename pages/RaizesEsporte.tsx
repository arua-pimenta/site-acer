import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, TrendingUp, Swords, MapPin, Activity, Heart, Smile } from 'lucide-react';
import { INSTITUTION_DATA } from '../constants';
import HeroImage from '@/assets/raizes-esportes-2.jpg';

const RaizesEsporte: React.FC = () => {
    return (
        <div className="animate-in fade-in duration-500 pb-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src={HeroImage}
                    alt="Artes Marciais - Raízes de Esporte"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-acer-blue/90 via-acer-blue/80 to-acer-blue/60 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full bg-yellow-400 text-acer-dark text-xs font-black mb-6 uppercase tracking-widest shadow-lg">
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
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-1">180</h3>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Alunos Beneficiados</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue mb-4">
                            <Swords className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-display font-black text-acer-dark dark:text-white mb-1">Jiu-Jitsu & Muay Thai</h3>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Modalidades</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue mb-4">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-1">12 Meses</h3>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">De Impacto Contínuo</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                        <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center text-acer-blue mb-4">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-1">R$ 289.500</h3>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Investimento Total</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400">
                        <span className="text-acer-blue font-black uppercase tracking-widest text-xs mb-4 block">Justificativa</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-6 tracking-tight">
                            Levando oportunidades onde elas são mais necessárias.
                        </h2>
                        <p className="leading-relaxed">
                            Os distritos de Baguaçu e Ribeiro dos Santos enfrentam historicamente uma carência significativa de opções de lazer, cultura e esporte. Essa lacuna deixa crianças e adolescentes mais expostos à ociosidade e riscos sociais.
                        </p>
                        <p className="leading-relaxed">
                            O projeto <strong>Raízes de Esporte</strong> nasce para preencher esse vazio, descentralizando as ações da ACER e levando a estrutura, a disciplina e os valores das artes marciais para dentro dessas comunidades.
                        </p>
                    </div>

                    <div className="bg-acer-blue p-10 md:p-14 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
                        <div className="relative z-10">
                            <blockquote className="text-2xl md:text-3xl font-display font-black italic leading-normal mb-8">
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
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-4">Mapa de Atuação</h2>
                        <div className="h-1.5 w-24 bg-acer-blue rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Baguaçu */}
                        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:border-acer-blue/30 transition-all group">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-acer-blue px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Distrito</span>
                                    <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white">Polo Baguaçu</h3>
                                    <p className="text-gray-500 font-medium">Centro Múltiplo Uso</p>
                                </div>
                                <div className="p-4 bg-acer-blue text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                                    <Calendar className="w-5 h-5 text-yellow-400" />
                                    <span>Segunda, Quarta e Sexta</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                                    <Activity className="w-5 h-5 text-yellow-400" />
                                    <span>17h às 21h</span>
                                </div>
                            </div>
                        </div>

                        {/* Ribeiro dos Santos */}
                        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:border-acer-blue/30 transition-all group">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-acer-blue px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Distrito</span>
                                    <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white">Polo Ribeiro dos Santos</h3>
                                    <p className="text-gray-500 font-medium">Quadra Coberta</p>
                                </div>
                                <div className="p-4 bg-acer-blue text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                                    <Calendar className="w-5 h-5 text-yellow-400" />
                                    <span>Terça e Quinta</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                                    <Activity className="w-5 h-5 text-yellow-400" />
                                    <span>17h às 21h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Methodology */}
                <section className="mb-24 bg-gray-50 dark:bg-gray-800/50 rounded-[3rem] p-10 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-4">Metodologia e Resultados</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Mais do que esporte, formamos cidadãos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-acer-blue mb-6">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold mb-2">Desenvolvimento Físico</h4>
                            <p className="text-sm text-gray-500">Melhora da saúde, coordenação motora e redução do sedentarismo.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-acer-blue mb-6">
                                <Smile className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold mb-2">Socioemocional</h4>
                            <p className="text-sm text-gray-500">Fortalecimento da disciplina, respeito, autoconfiança e controle emocional.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-acer-blue mb-6">
                                <Users className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold mb-2">Inclusão Social</h4>
                            <p className="text-sm text-gray-500">Sentimento de pertencimento, trabalho em equipe e cidadania ativa.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center pb-12">
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-acer-blue to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                        <Link
                            to="/contato"
                            className="relative bg-acer-blue text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl"
                        >
                            <Heart className="w-6 h-6 fill-current" />
                            Seja um Apoiador
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RaizesEsporte;
