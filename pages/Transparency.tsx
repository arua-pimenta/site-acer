
import React from 'react';
import { TRANSPARENCY_REPORTS, INSTITUTION_DATA } from '../constants';
import { FileText, Download, ShieldCheck, PieChart, Archive, ArrowRight, FileCheck } from 'lucide-react';

const Transparency: React.FC = () => {
  const latestYear = 2024;

  return (
    <div className="animate-in fade-in duration-500 py-16 md:py-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Profissional */}
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-acer-blue dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 dark:border-blue-800">
            <ShieldCheck className="w-4 h-4" />
            Compromisso Ético
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-acer-dark dark:text-white mb-6 tracking-tight">
            Transparência <span className="text-acer-blue">Ativa</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            A ACER preza pela clareza na gestão de recursos. Aqui você acessa a prestação de contas detalhada de nossas atividades e balanços financeiros.
          </p>
        </header>

        {/* Destaque: Ano Atual */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-acer-blue rounded-full"></div>
            <h2 className="text-2xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">Relatório em Destaque</h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden border border-acer-blue/10 flex flex-col lg:flex-row group transition-all hover:shadow-acer-blue/5">
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
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                Este documento contém o balanço patrimonial detalhado e o demonstrativo de resultados do exercício atual, reafirmando nosso compromisso com a sociedade.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/documentos/balanco-patrimonial-2024.pdf"
                  target="_blank"
                  className="bg-acer-blue hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-xs tracking-widest flex items-center justify-between shadow-md hover:shadow-lg transition transform hover:-translate-y-1 w-full"
                >
                  <span className="flex items-center gap-3"><FileText className="w-5 h-5" /> BALANÇO PATRIMONIAL 2024</span>
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href="/documentos/demonstracao-de-resultado-do-periodo-2024.pdf"
                  target="_blank"
                  className="bg-acer-blue hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-xs tracking-widest flex items-center justify-between shadow-md hover:shadow-lg transition transform hover:-translate-y-1 w-full"
                >
                  <span className="flex items-center gap-3"><FileText className="w-5 h-5" /> DRE - DEMONSTRAÇÃO DE RESULTADO 2024</span>
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href="/documentos/balancete-de-verificacao-2024.pdf"
                  target="_blank"
                  className="bg-acer-blue hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-xs tracking-widest flex items-center justify-between shadow-md hover:shadow-lg transition transform hover:-translate-y-1 w-full"
                >
                  <span className="flex items-center gap-3"><FileText className="w-5 h-5" /> BALANCETE DE VERIFICAÇÃO 2024</span>
                  <Download className="w-4 h-4" />
                </a>
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
              0 Documentos
            </div>
          </div>

          <div className="col-span-12 py-10 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
              Novos documentos serão adicionados conforme o encerramento dos exercícios fiscais.
            </p>
          </div>
        </div>

        {/* Info da Instituição */}
        <div className="mt-24 p-8 md:p-12 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center text-acer-blue mb-6 mx-auto md:mx-0">
              <PieChart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-2">Dados Cadastrais</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
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
              <div key={i} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">{info.label}</span>
                <p className="font-bold text-acer-dark dark:text-gray-200 text-sm">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
