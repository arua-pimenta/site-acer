import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Users,
    Heart,
    Brain,
    Megaphone,
    FileText,
    CreditCard,
    Home,
    School,
    Syringe,
    AlertCircle,
    MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ProjectHeroImage from '@/assets/projeto-olho-no-futuro-1.webp';
import imgAcao1 from '@/assets/projeto-em-acao/projeto-em-acao-1.webp';
import imgAcao2 from '@/assets/projeto-em-acao/projeto-em-acao-2.webp';
import imgAcao3 from '@/assets/projeto-em-acao/projeto-em-acao-3.webp';
import imgAcao4 from '@/assets/projeto-em-acao/projeto-em-acao-4.webp';
import imgAcao5 from '@/assets/projeto-em-acao/projeto-em-acao-5.webp';
import imgAcao6 from '@/assets/projeto-em-acao/projeto-em-acao-6.webp';
import imgAcao7 from '@/assets/projeto-em-acao/projeto-em-acao-7.webp';
import imgAcao8 from '@/assets/projeto-em-acao/projeto-em-acao-8.webp';
import imgAcao9 from '@/assets/projeto-em-acao/projeto-em-acao-9.webp';
import imgAcao10 from '@/assets/projeto-em-acao/projeto-em-acao-10.webp';
import imgAcao11 from '@/assets/projeto-em-acao/projeto-em-acao-11.webp';

const OlhoNoFuturo: React.FC = () => {
    const { hash } = useLocation();
    const [imagensExibidas, setImagensExibidas] = useState<string[]>([]);

    const todasImagensAcao = [
        imgAcao1, imgAcao2, imgAcao3, imgAcao4, imgAcao5,
        imgAcao6, imgAcao7, imgAcao8, imgAcao9, imgAcao10, imgAcao11
    ];

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        // Fisher-Yates Shuffle for Gallery
        const embaralharImagens = () => {
            const shuffled = [...todasImagensAcao];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            setImagensExibidas(shuffled.slice(0, 5));
        };

        embaralharImagens();
    }, [hash]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="pb-24 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <img
                    src={ProjectHeroImage}
                    alt="Projeto Olho no Futuro"
                    decoding="async"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover premium-image"
                />
                <div className="absolute inset-0 bg-acer-blue/90 mix-blend-multiply dark:bg-gray-950/80 dark:mix-blend-normal"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-yellow-400 text-acer-dark text-xs font-black mb-6 uppercase tracking-widest shadow-lg">
                        Execução ACER 2025/2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tight uppercase drop-shadow-lg leading-tight">
                        Projeto <br className="md:hidden" />Olho no Futuro
                    </h1>
                    <div className="relative inline-block">
                        <blockquote className="text-2xl md:text-3xl font-display font-bold italic leading-relaxed max-w-3xl mx-auto text-blue-100">
                            "Com respeito e dignidade é que se constrói um mundo melhor"
                        </blockquote>
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 border-yellow-400 border border-gray-100 dark:border-gray-700/80">
                        <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-2 uppercase tracking-tight">Capoeira Pedagógica</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                            Aulas que ensinam disciplina, respeito, ritmo e tradição, servindo como base na formação educacional.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 border-acer-blue border border-gray-100 dark:border-gray-700/80">
                        <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-2 uppercase tracking-tight">Reforço e Educação</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                            Oficinas de leitura, reforço de matérias escolares e auxílio especializado para impulsionar o desempenho nas salas de aula.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 border-emerald-500 border border-gray-100 dark:border-gray-700/80">
                        <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-2 uppercase tracking-tight">Apoio Psicossocial</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                            Assistência psicológica e social especializada para auxiliar os alunos e aproximar a família das atividades.
                        </p>
                    </div>
                </div>

                {/* Methodology Grid */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <span className="text-acer-blue dark:text-blue-400 font-black uppercase tracking-widest text-xs mb-4 block">Metodologia</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-6 tracking-tight uppercase">
                            Desenvolvimento Integral
                        </h2>
                        <p className="text-gray-655 dark:text-gray-400 font-medium leading-relaxed mb-8">
                            A atuação é centrada na intersecção do esporte com o acompanhamento social diário. Nossos instrutores e assistentes trabalham integrados.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-150 dark:border-gray-700 font-semibold text-gray-600 dark:text-gray-300">
                                Frequência escolar alta e rendimento escolar são requisitos obrigatórios de permanência.
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-150 dark:border-gray-700 font-semibold text-gray-600 dark:text-gray-300">
                                Rodas culturais públicas para conectar a juventude com a comunidade local.
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Reforço Escolar Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-[2.5rem] border border-blue-100 dark:border-gray-700 relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-acer-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 dark:shadow-none">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-3">Reforço Escolar</h3>
                                <h4 className="text-lg font-bold text-acer-blue mb-4">Educação e Foco</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Oficinas para tirar dúvidas, apoio em tarefas de casa e incentivo à leitura.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Acompanhamento de notas</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Auxílio em tarefas</li>
                                </ul>
                            </div>
                        </div>

                        {/* Saúde & Bem-estar */}
                        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-[2.5rem] border border-blue-100 dark:border-gray-700 relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-acer-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 dark:shadow-none">
                                    <Brain className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-3">Saúde & Bem-estar</h3>
                                <h4 className="text-lg font-bold text-acer-blue mb-4">Apoio Psicossocial</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Equipe completa com Psicólogo e Assistente Social para suporte emocional aos alunos e suas famílias.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Visitas domiciliares</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Orientação familiar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsible Area */}
                <div id="matricula" className="bg-blue-50/50 dark:bg-gray-800/50 rounded-[3rem] p-8 md:p-16 mb-24 border border-blue-100 dark:border-gray-750 relative overflow-hidden transition-colors duration-300">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-4">Área do Responsável</h2>
                        <p className="text-xl text-acer-blue dark:text-blue-400 font-bold tracking-wide">Matrículas e Inscrições</p>
                        <p className="text-gray-500 dark:text-gray-450 mt-4 max-w-2xl mx-auto">
                            Tudo o que você precisa saber para garantir a vaga do seu filho no projeto.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="flex items-center gap-2 font-bold text-lg mb-6 text-acer-dark dark:text-white">
                                <FileText className="w-5 h-5 text-acer-blue" />
                                Documentação Obrigatória
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/80">
                                    <FileText className="w-5 h-5 text-acer-blue shrink-0 animate-pulse" /> Cópia da Certidão de Nascimento
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/80">
                                    <CreditCard className="w-5 h-5 text-acer-blue shrink-0" /> RG/CPF dos pais
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/80">
                                    <Home className="w-5 h-5 text-acer-blue shrink-0" /> Comprovante de Residência
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/80">
                                    <School className="w-5 h-5 text-acer-blue shrink-0" /> Declaração de Matrícula Escolar
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/80">
                                    <Syringe className="w-5 h-5 text-acer-blue shrink-0" /> Declaração de Vacinação
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-2xl border border-yellow-250 dark:border-yellow-700/25">
                                <div className="flex gap-4">
                                    <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-acer-dark dark:text-white mb-1">Importante</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Público-alvo: Jovens de 6 a 17 anos residentes em Olímpia ou Baguaçu</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://wa.me/551732811727?text=Olá,%20tudo%20bem?%20Como%20faço%20para%20inscrever%20meu%20filho%20no%20projeto?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fae53] text-white px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5 group"
                                >
                                    <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    Quero inscrever meu filho
                                </a>
                                <p className="text-center text-xs text-gray-400 mt-2">
                                    Fale diretamente com nossa equipe no WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Gallery */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-4">O Projeto em Ação</h2>
                        <div className="h-1.5 w-24 bg-acer-blue dark:bg-blue-400 rounded-full mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                        {imagensExibidas.map((img, index) => (
                            <div key={index} className={`rounded-3xl overflow-hidden relative group shadow-lg ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                                <LazyLoadImage
                                    src={img}
                                    alt={`Galeria do projeto ${index + 1}`}
                                    effect="blur"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 premium-image"
                                    decoding="async"
                                    wrapperClassName="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Novidades Futuras Block */}
                <div className="mt-8 mb-24">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-dashed border-gray-300 dark:border-gray-700">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-sm text-acer-blue dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 border border-transparent dark:border-gray-700">
                                <Megaphone className="w-4 h-4 animate-pulse" /> Novidades & Agenda
                            </div>
                            <h3 className="text-2xl font-display font-black text-gray-500 dark:text-gray-400">Próximos Passos</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <span className="text-xs font-bold text-acer-blue dark:text-blue-400 uppercase tracking-widest block mb-2">Em Breve</span>
                                <h4 className="font-bold text-acer-dark dark:text-white mb-2">Calendário Anual de Eventos</h4>
                                <p className="text-sm text-gray-400">Novas datas para rodas de capoeira e festivais culturais.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <span className="text-xs font-bold text-acer-blue dark:text-blue-400 uppercase tracking-widest block mb-2">Em Breve</span>
                                <h4 className="font-bold text-acer-dark dark:text-white mb-2">Expansão das Aulas</h4>
                                <p className="text-sm text-gray-400">Novos horários para as turmas de Futebol e Dança.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default OlhoNoFuturo;
