import React, { useEffect } from 'react';

const TermsOfUse: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-in fade-in duration-500 bg-white min-h-screen pb-24">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-acer-blue text-xs font-black mb-6 uppercase tracking-widest">
                        Documentos Oficiais
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-acer-dark dark:text-white mb-6 uppercase tracking-tight">
                        Termos de <span className="text-acer-blue">Uso</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Regras e diretrizes para o uso do nosso portal e participação em nossas atividades.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg prose-blue mx-auto text-gray-600 dark:text-gray-300">
                    <p className="lead">
                        Ao acessar o site da Associação Cultural Esportiva Raízes (ACER), você concorda com os termos descritos abaixo.
                    </p>
                    <div className="space-y-12">
                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">1. Aceitação dos Termos</h3>
                            <p>
                                Ao acessar o site da Associação Cultural Esportiva Raízes (ACER), o usuário concorda em cumprir estes termos de serviço e todas as leis aplicáveis.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">2. Uso do Site</h3>
                            <p>
                                O conteúdo deste site, incluindo informações sobre os projetos <span className="font-semibold text-acer-blue">Olho no Futuro</span> e <span className="font-semibold text-acer-blue">Raízes de Esporte</span>, é destinado a fins informativos e de transparência institucional. É proibido o uso do site para atividades ilícitas ou que causem danos à imagem da associação.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">3. Propriedade Intelectual</h3>
                            <p>
                                Todos os materiais, logos (ACER, ABIU Capoeira) e fotografias de alunos e atividades são de propriedade exclusiva da ACER ou licenciados para ela. A reprodução não autorizada para fins comerciais é estritamente proibida.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">4. Inscrições e Matrículas</h3>
                            <p>
                                O preenchimento de formulários de interesse não garante a matrícula imediata. A efetivação depende da entrega da documentação física obrigatória (RG, CPF, Comprovante de Vacinação, etc.) e da disponibilidade de vagas nos polos de Olímpia ou Baguaçu.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">5. Limitação de Responsabilidade</h3>
                            <p>
                                A ACER não se responsabiliza por erros técnicos no acesso ao site ou por informações desatualizadas em sites de terceiros que linkem para o nosso portal.
                            </p>
                        </section>

                        <section className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-acer-blue">
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">6. Foro</h3>
                            <p className="mb-0">
                                Fica eleito o foro da Comarca de Olímpia/SP para dirimir quaisquer questões relativas a estes termos.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
