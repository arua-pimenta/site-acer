import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Users,
    GraduationCap,
    Heart,
    Music,
    Dumbbell,
    Brain,
    Sparkles,
    BookOpen,
    Smile,
    Megaphone,
    MapPin,
    FileText,
    CreditCard,
    Home,
    School,
    Syringe,
    AlertCircle,
    MessageCircle
} from 'lucide-react';
import ProjectHeroImage from '@/assets/projeto-olho-no-futuro-1.jpg';
import imgAcao1 from '@/assets/projeto-em-acao/projeto-em-acao-1.jpg';
import imgAcao2 from '@/assets/projeto-em-acao/projeto-em-acao-2.jpg';
import imgAcao3 from '@/assets/projeto-em-acao/projeto-em-acao-3.jpg';
import imgAcao4 from '@/assets/projeto-em-acao/projeto-em-acao-4.jpg';
import imgAcao5 from '@/assets/projeto-em-acao/projeto-em-acao-5.jpg';
import imgAcao6 from '@/assets/projeto-em-acao/projeto-em-acao-6.jpg';
import imgAcao7 from '@/assets/projeto-em-acao/projeto-em-acao-7.jpg';
import imgAcao8 from '@/assets/projeto-em-acao/projeto-em-acao-8.jpg';
import imgAcao9 from '@/assets/projeto-em-acao/projeto-em-acao-9.jpg';
import imgAcao10 from '@/assets/projeto-em-acao/projeto-em-acao-10.jpg';
import imgAcao11 from '@/assets/projeto-em-acao/projeto-em-acao-11.jpg';

const OlhoNoFuturo: React.FC = () => {
    const { hash } = useLocation();
    const [imagensExibidas, setImagensExibidas] = useState<string[]>([]);

    const todasImagensAcao = [
        imgAcao1, imgAcao2, imgAcao3, imgAcao4, imgAcao5,
        imgAcao6, imgAcao7, imgAcao8, imgAcao9, imgAcao10, imgAcao11
    ];

    useEffect(() => {
        // Lógica de Smooth Scroll
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        // Algoritmo Fisher-Yates Shuffle para a Galeria
        const embaralharImagens = () => {
            const shuffled = [...todasImagensAcao];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            setImagensExibidas(shuffled.slice(0, 5));
        };

        embaralharImagens();
    }, [hash]); // Mantendo hash aqui pois o efeito original dependia dele, mas idealmente separaríamos. 

    return (
        <div className="animate-in fade-in duration-500 pb-24">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <img
                    src={ProjectHeroImage}
                    alt="Projeto Olho no Futuro"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-acer-blue/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
                    <span className="inline-block py-1 px-4 rounded-full bg-yellow-400 text-acer-dark text-xs font-black mb-6 uppercase tracking-widest shadow-lg">
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
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 border-yellow-400">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-acer-blue">
                                <Users className="w-8 h-8" />
                            </div>
                            <div>
                                <span className="block text-xs font-black uppercase tracking-widest text-gray-400">Público Alvo</span>
                                <span className="text-xl font-black text-acer-dark dark:text-white">6 a 17 Anos</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Atendimento especializado para crianças e adolescentes em vulnerabilidade social.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 border-acer-blue">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-acer-blue">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <span className="block text-xs font-black uppercase tracking-widest text-gray-400">Localização</span>
                                <span className="text-xl font-black text-acer-dark dark:text-white">Sede & Polos</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Ações descentralizadas cobrindo Olímpia e região.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 border-yellow-400">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-acer-blue">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <div>
                                <span className="block text-xs font-black uppercase tracking-widest text-gray-400">Impacto</span>
                                <span className="text-xl font-black text-acer-dark dark:text-white">Transformação</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Desenvolvimento integral: corpo, mente e caráter.
                        </p>
                    </div>
                </div>

                {/* Modalities Grid (The Heart) */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-4">Atuação Multidisciplinar</h2>
                        <div className="h-1.5 w-24 bg-acer-blue rounded-full mx-auto mb-6"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            O projeto Olho no Futuro integra esporte, educação e apoio psicossocial para formar cidadãos completos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Esporte & Cultura */}
                        <div className="col-span-1 lg:col-span-3 pb-4">
                            <h3 className="flex items-center gap-3 text-xl font-black text-acer-dark dark:text-white mb-6">
                                <Dumbbell className="text-yellow-400" /> Esporte & Cultura
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:border-acer-blue/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 text-3xl">🤸</div>
                                    <h4 className="font-bold text-lg mb-2">Capoeira</h4>
                                    <p className="text-sm text-gray-500">Resgate cultural, musicalidade e disciplina física.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:border-acer-blue/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 text-3xl">⚽</div>
                                    <h4 className="font-bold text-lg mb-2">Futebol</h4>
                                    <p className="text-sm text-gray-500">Trabalho em equipe, estratégia e coordenação.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:border-acer-blue/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 text-3xl">🧘‍♀️</div>
                                    <h4 className="font-bold text-lg mb-2">Ginástica</h4>
                                    <p className="text-sm text-gray-500">Flexibilidade, força e consciência corporal.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:border-acer-blue/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 text-3xl">💃</div>
                                    <h4 className="font-bold text-lg mb-2">Dança</h4>
                                    <p className="text-sm text-gray-500">Expressão artística e ritmos brasileiros.</p>
                                </div>
                            </div>
                        </div>

                        {/* Educação */}
                        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-[2.5rem] border border-blue-100 dark:border-gray-700 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <BookOpen className="w-32 h-32 text-acer-blue" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-acer-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 dark:shadow-none">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-3">Educação</h3>
                                <h4 className="text-lg font-bold text-acer-blue mb-4">Reforço Escolar</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Professores dedicados para garantir que o desempenho em sala de aula acompanhe a evolução no esporte.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Acompanhamento de notas</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Auxílio em tarefas</li>
                                </ul>
                            </div>
                        </div>

                        {/* Saúde & Bem-estar */}
                        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-[2.5rem] border border-blue-100 dark:border-gray-700 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Heart className="w-32 h-32 text-red-500" />
                            </div>
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

                {/* Responsible Area (New) */}
                <div id="matricula" className="bg-blue-50/50 dark:bg-gray-800/50 rounded-[3rem] p-8 md:p-16 mb-24 border border-blue-100 dark:border-gray-700 relative overflow-hidden">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-4">Área do Responsável</h2>
                        <p className="text-xl text-acer-blue font-bold tracking-wide">Matrículas e Inscrições</p>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
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
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <FileText className="w-5 h-5 text-acer-blue shrink-0" /> Cópia da Certidão de Nascimento
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <CreditCard className="w-5 h-5 text-acer-blue shrink-0" /> RG/CPF dos pais
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <Home className="w-5 h-5 text-acer-blue shrink-0" /> Comprovante de Residência
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <School className="w-5 h-5 text-acer-blue shrink-0" /> Declaração de Matrícula Escolar
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <Syringe className="w-5 h-5 text-acer-blue shrink-0" /> Declaração de Vacinação
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700/30">
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
                                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fae53] text-white px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1 group"
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
                        <div className="h-1.5 w-24 bg-acer-blue rounded-full mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                        {imagensExibidas.map((img, index) => (
                            <div key={index} className={`rounded-3xl overflow-hidden relative group shadow-lg ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                                <img
                                    src={img}
                                    alt={`Galeria do projeto ${index + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                            <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-sm text-acer-blue font-bold text-sm uppercase tracking-widest mb-4">
                                <Megaphone className="w-4 h-4" /> Novidades & Agenda
                            </div>
                            <h3 className="text-2xl font-display font-black text-gray-500 dark:text-gray-400">Próximos Passos</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <span className="text-xs font-bold text-acer-blue uppercase tracking-widest block mb-2">Em Breve</span>
                                <h4 className="font-bold text-acer-dark dark:text-white mb-2">Calendário Anual de Eventos</h4>
                                <p className="text-sm text-gray-400">Novas datas para rodas de capoeira e festivais culturais.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <span className="text-xs font-bold text-acer-blue uppercase tracking-widest block mb-2">Em Breve</span>
                                <h4 className="font-bold text-acer-dark dark:text-white mb-2">Expansão das Aulas</h4>
                                <p className="text-sm text-gray-400">Novos horários para as turmas de Futebol e Dança.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OlhoNoFuturo;
