import React from 'react';
import { TRANSPARENCY_REPORTS, INSTITUTION_DATA } from '../constants';
import { FileText, Download, ShieldCheck, PieChart, Archive, ArrowRight, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Transparency: React.FC = () => {
  const latestYear = 2025;
  const historyDocuments = [
    {
      year: 2024,
      files: [
        { name: "Balanço Patrimonial 2024", url: "/documentos/balanco-patrimonial-2024.pdf" },
        { name: "DRE 2024", url: "/documentos/demonstracao-de-resultado-do-periodo-2024.pdf" },
        { name: "Balancete 2024", url: "/documentos/balancete-de-verificacao-2024.pdf" }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-955 min-h-screen transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Profissional */}
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-acer-blue dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 dark:border-blue-800">
            <ShieldCheck className="w-4 h-4" />
            Compromisso Ético
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-acer-dark dark:text-white mb-6 tracking-tight">
            Transparência <span className="text-acer-blue dark:text-blue-400">Ativa</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            A ACER preza pela clareza na gestão de recursos. Aqui você acessa a prestação de contas detalhada de nossas atividades e balanços financeiros.
          </p>
        </header>

        {/* Destaque: Ano Atual */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-acer-blue dark:bg-blue-400 rounded-full"></div>
            <h2 className="text-2xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">Relatório em Destaque</h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-lg overflow-hidden border border-acer-blue/10 dark:border-gray-700/80 flex flex-col lg:flex-row group transition-all duration-300">
            <div className="bg-acer-blue lg:w-1/3 p-10 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileCheck className="w-32 h-32" />
              </div>
              <span className="text-blue-200 font-black text-xl mb-2 tracking-tighter uppercase">Exercício</span>
              <span className="text-7xl font-display font-black mb-4 tracking-tighter">{latestYear}</span>
              <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Atualizado</div>
            </div>
            <div className="lg:w-2/3 p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-display font-black text-acer-dark dark:text-white mb-4 leading-tight">
                Relatórios Financeiros {latestYear}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg leading-relaxed font-medium">
                Este documento contém o balanço patrimonial detalhado e o demonstrativo de resultados do exercício atual, reafirmando nosso compromisso com a sociedade.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { name: `BALANÇO PATRIMONIAL ${latestYear}`, url: `/documentos/balanco-patrimonial-${latestYear}.pdf` },
                  { name: `DRE - DEMONSTRAÇÃO DE RESULTADO ${latestYear}`, url: `/documentos/demonstracao-de-resultado-do-periodo-${latestYear}.pdf` },
                  { name: `BALANCETE DE VERIFICAÇÃO ${latestYear}`, url: `/documentos/balancete-de-verificacao-${latestYear}.pdf` }
                ].map((doc, idx) => (
                  <motion.a
                    key={idx}
                    href={doc.url}
                    target="_blank"
                    whileHover={{ scale: 1.005, y: -1 }}
                    whileTap={{ scale: 0.995 }}
                    className="bg-acer-blue hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-xs tracking-widest flex items-center justify-between shadow-sm hover:shadow-md transition-all w-full"
                  >
                    <span className="flex items-center gap-3"><FileText className="w-5 h-5" /> {doc.name}</span>
                    <Download className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Seção: Cotações Prévias de Preços e Editais */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-acer-blue dark:bg-blue-400 rounded-full"></div>
            <h2 className="text-2xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">Editais e Cotações Prévias</h2>
          </div>

          {/* Card 1: Termo de Referência original */}
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 border border-gray-150 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-amber-100 dark:border-amber-800/30">
                    Processo Ativo
                  </span>
                  <span className="text-gray-400 text-xs font-semibold">Publicado em: 01/07/2026</span>
                </div>
                <h3 className="text-xl font-display font-black text-acer-dark dark:text-white mb-2">
                  Cotação Prévia de Preços Nº 001/2026
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 font-medium">
                  <strong>Objeto:</strong> Contratação de empresa especializada para prestação de serviços técnicos na área de Recursos Humanos, visando atender às demandas de gestão de pessoal inerentes à execução de "Implementação e Desenvolvimento do Projeto esportivo, no Município de Olímpia/SP".
                </p>
                <div className="mb-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 font-medium">
                  <strong className="text-acer-dark dark:text-white text-xs block mb-2 font-black">Documentos de Regularidade Exigidos:</strong>
                  <ul className="list-disc pl-5 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <li>Cartão do CNPJ ativo com CNAE compatível;</li>
                    <li>Certidão Negativa relativa aos Tributos Federais e à Dívida Ativa da União;</li>
                    <li>Certidão de Regularidade do FGTS;</li>
                    <li>Certidão Negativa de Débitos Trabalhistas (CNDT).</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-500 dark:text-gray-400 font-bold">
                  <div>
                    <strong>Prazo de envio das propostas:</strong> Até 08/07/2026
                  </div>
                  <div>
                    <strong>E-mail para envio:</strong> <a href="mailto:aculturalesportiva@gmail.com" className="text-acer-blue dark:text-blue-400 hover:underline">aculturalesportiva@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <motion.a
                  href="/documentos/cotacao-previa-001-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-acer-blue hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all text-center whitespace-nowrap"
                >
                  <FileText className="w-4 h-4" />
                  VER TERMO DE REFERÊNCIA
                </motion.a>
              </div>
            </div>
          </div>

          {/* Card 2: Retificação Nº 001/2026 */}
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 border border-gray-150 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-yellow-250/30">
                    Retificação de Edital
                  </span>
                  <span className="text-gray-400 text-xs font-semibold">Publicado em: 02/07/2026</span>
                </div>
                <h3 className="text-xl font-display font-black text-acer-dark dark:text-white mb-2">
                  Retificação Nº 001/2026 da Cotação Prévia Nº 001/2026
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 font-medium">
                  <strong>Correção:</strong> Ajuste na quantidade de profissionais (cargos) a serem contratados no Termo de Referência. Onde se lia a contratação de 1 Professor de Educação Física, passa-se a ler a contratação de <strong>2 Professores de Educação Física</strong> para a execução das atividades esportivas do projeto.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-500 dark:text-gray-400 font-bold">
                  <div>
                    <strong>Edital de Referência:</strong> Cotação Prévia Nº 001/2026
                  </div>
                  <div>
                    <strong>Prazo de envio das propostas:</strong> Inalterado (Até 08/07/2026)
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <motion.a
                  href="/documentos/retificacao-cotacao-001-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all text-center whitespace-nowrap"
                >
                  <FileText className="w-4 h-4" />
                  VER TERMO DE RETIFICAÇÃO
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Arquivo Histórico */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              <h2 className="text-2xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">Arquivo Histórico</h2>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
              <Archive className="w-4 h-4" />
              {historyDocuments.length} Ano(s)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historyDocuments.map((history, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-150 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-display font-black text-acer-dark dark:text-white">{history.year}</span>
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-400">
                    <Archive className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-3">
                  {history.files.map((file, fIdx) => (
                    <a
                      key={fIdx}
                      href={file.url}
                      target="_blank"
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-600 dark:text-gray-400 hover:text-acer-blue dark:hover:text-blue-400 transition-colors group font-bold"
                    >
                      <span className="text-[10px] uppercase tracking-tight flex items-center gap-2">
                        <FileText className="w-3 h-3" /> {file.name}
                      </span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info da Instituição */}
        <div className="mt-24 p-8 md:p-12 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-150 dark:border-gray-700/80 shadow-lg flex flex-col md:flex-row items-center gap-10 transition-colors duration-300">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center text-acer-blue dark:text-blue-400 mb-6 mx-auto md:mx-0">
              <PieChart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-2">Dados Cadastrais</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
              Informações oficiais para verificação e integridade da nossa organização.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {[
              { label: "Razão Social", value: INSTITUTION_DATA.name },
              { label: "CNPJ", value: INSTITUTION_DATA.cnpj },
              { label: "Presidente", value: INSTITUTION_DATA.president },
              { label: "Sede Operacional", value: "Olímpia - SP" }
            ].map((info, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 font-medium">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">{info.label}</span>
                <p className="font-bold text-acer-dark dark:text-gray-200 text-sm">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Transparency;
