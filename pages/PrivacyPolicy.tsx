import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
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
                        Política de <span className="text-acer-blue">Privacidade</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A transparência é um dos nossos pilares. Entenda como cuidamos dos seus dados e respeitamos sua privacidade.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg prose-blue mx-auto text-gray-600 dark:text-gray-300">
                    <p className="lead">
                        Esta Política de Privacidade descreve como a Associação Cultural Esportiva Raízes (ACER) coleta, usa e protege as informações que você nos fornece.
                    </p>
                    <div className="space-y-12">
                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">Introdução</h3>
                            <p>
                                A Associação Cultural Esportiva Raízes (CNPJ 02.966.928/0001-50) está comprometida com a privacidade de seus alunos e parceiros.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">Coleta de Dados</h3>
                            <p>
                                Informamos que coletamos dados como Certidão de Nascimento, RG/CPF dos responsáveis, comprovante de residência e declaração de vacinação exclusivamente para fins de matrícula nos projetos <span className="font-semibold text-acer-blue">Olho no Futuro</span> e <span className="font-semibold text-acer-blue">Raízes de Esporte</span>.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">Proteção de Menores</h3>
                            <p>
                                Como atendemos crianças de 6 a 17 anos, o tratamento de dados é realizado com o consentimento expresso dos pais ou responsáveis, visando sempre o melhor interesse do menor, em conformidade com a LGPD.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">Uso de Imagens</h3>
                            <p>
                                Fotos e vídeos de atividades esportivas (Capoeira, Futebol, Jiu-Jitsu, etc.) são utilizados para divulgação institucional e prestação de contas aos órgãos públicos (como CONDECA e Secretarias de Esporte), mediante autorização prévia assinada no ato da matrícula.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">Segurança</h3>
                            <p>
                                Os dados são armazenados em ambiente seguro, fisico e digital, e não são compartilhados com terceiros para fins comerciais em nenhuma hipótese.
                            </p>
                        </section>

                        <section className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-acer-blue">
                            <h3 className="text-xl font-bold text-acer-dark dark:text-white mb-4">Contato</h3>
                            <p className="mb-0">
                                Para dúvidas sobre seus dados, atualizações ou solicitações de exclusão, entre em contato diretamente com nossa administração através do e-mail: <a href="mailto:aculturalesportiva@gmail.com" className="text-acer-blue font-bold hover:underline">aculturalesportiva@gmail.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
