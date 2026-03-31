
import React from 'react';
import { Link } from 'react-router-dom';
import { INSTITUTION_DATA } from '../constants';
import {
  ShieldCheck,
  Award,
  Users,
  Calendar,
  MapPin,
  FileText,
  DollarSign,
  Landmark,
  Swords,
  Dribbble,
  Activity,
  HandMetal,
  Trophy,
  Shirt,
  Target,
  ClipboardCheck,
  UserCheck,
  Briefcase,
  GraduationCap,
  Megaphone,
  HeartHandshake,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

// ─── Dados oficiais da Emenda ──────────────────────────────
const EMENDA_DATA = {
  termoFomento: '984811',
  proposta: '059986/2025',
  processoSEI: '71000.104026/2025-31',
  valorGlobal: 'R$ 979.999,00',
  valorGlobalCurto: 'R$ 979 mil',
  emendaNumero: '39550005',
  deputado: 'David Soares',
  situacao: 'Em Execução',
  propostaStatus: '100% Aprovada',
  beneficiarios: 360,
  periodo: '12 Meses',
  municipio: 'Olímpia/SP',
  modalidade: 'Termo de Fomento',
  orgao: 'Ministério da Gestão e da Inovação em Serviços Públicos',
};

const modalidades = [
  { nome: 'Capoeira', vagas: 360, icon: <HandMetal className="w-7 h-7" /> },
  { nome: 'Futebol', vagas: 360, icon: <Dribbble className="w-7 h-7" /> },
  { nome: 'Voleibol', vagas: 360, icon: <Activity className="w-7 h-7" /> },
  { nome: 'Muay Thai', vagas: 360, icon: <Swords className="w-7 h-7" /> },
  { nome: 'Handebol', vagas: 360, icon: <Trophy className="w-7 h-7" /> },
];

const equipe = [
  { cargo: 'Coordenador Geral', icon: <Briefcase className="w-5 h-5" /> },
  { cargo: 'Coordenador Pedagógico', icon: <GraduationCap className="w-5 h-5" /> },
  { cargo: 'Assessoria de Comunicação', icon: <Megaphone className="w-5 h-5" /> },
  { cargo: 'Assessoria Técnica', icon: <ClipboardCheck className="w-5 h-5" /> },
  { cargo: 'Auxiliar Administrativo', icon: <UserCheck className="w-5 h-5" /> },
  { cargo: '5 Monitores', icon: <Users className="w-5 h-5" /> },
  { cargo: 'Prof. Capoeira', icon: <HandMetal className="w-5 h-5" /> },
  { cargo: 'Prof. Futebol', icon: <Dribbble className="w-5 h-5" /> },
  { cargo: 'Prof. Muay Thai', icon: <Swords className="w-5 h-5" /> },
  { cargo: 'Prof. Vôlei e Handball', icon: <Activity className="w-5 h-5" /> },
];

const materiaisDestaques = [
  { item: 'Uniformes Esportivos', qtd: '360 kits', icon: <Shirt className="w-6 h-6" /> },
  { item: 'Equipamentos de Proteção', qtd: '1.080 itens', icon: <ShieldCheck className="w-6 h-6" /> },
  { item: 'Bolas Oficiais', qtd: '210 unid.', icon: <Target className="w-6 h-6" /> },
  { item: 'Tatames (Kits Eva)', qtd: '300 placas', icon: <Activity className="w-6 h-6" /> },
];

const EmendaParlamentar: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">

      {/* ━━━ HERO ━━━ */}
      <section className="bg-acer-blue py-20 md:py-28 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge Selo Oficial */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest mb-8 border border-white/20">
            <Landmark className="w-4 h-4" />
            Discricionárias e Legais • {EMENDA_DATA.orgao}
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">
            Apoio <span className="text-yellow-400">Governamental</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 font-medium mb-10">
            Recurso aprovado via Emenda Parlamentar para implementação e desenvolvimento do projeto esportivo no Município de Olímpia/SP.
          </p>

          {/* Badge de status */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white text-sm font-black uppercase tracking-widest shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="w-5 h-5" />
            {EMENDA_DATA.propostaStatus} • {EMENDA_DATA.situacao}
          </div>
        </div>
      </section>

      {/* ━━━ CARD DE DESTAQUE PRINCIPAL ━━━ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden border border-acer-blue/10 flex flex-col lg:flex-row">
            {/* Lado esquerdo - Valor */}
            <div className="bg-acer-blue lg:w-2/5 p-10 md:p-14 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <DollarSign className="w-40 h-40" />
              </div>
              <span className="text-blue-200 font-black text-sm mb-2 uppercase tracking-widest">Valor Global do Recurso</span>
              <span className="text-5xl md:text-6xl font-display font-black mb-2 tracking-tighter">{EMENDA_DATA.valorGlobal}</span>
              <span className="text-blue-200 text-sm font-medium">(novecentos e setenta e nove mil, novecentos e noventa e nove reais)</span>
              <div className="mt-6 flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  Emenda {EMENDA_DATA.emendaNumero}
                </div>
              </div>
            </div>

            {/* Lado direito - Deputado e dados */}
            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="w-6 h-6 text-acer-blue" />
                <span className="text-xs font-black text-acer-blue uppercase tracking-widest">Emenda Parlamentar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white mb-3 tracking-tight">
                Deputado <span className="text-acer-blue">{EMENDA_DATA.deputado}</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                Implementação e Desenvolvimento do Projeto Esportivo, no Município de Olímpia/SP, via {EMENDA_DATA.modalidade}.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Termo de Fomento Nº', value: EMENDA_DATA.termoFomento },
                  { label: 'Proposta Nº', value: EMENDA_DATA.proposta },
                  { label: 'Processo SEI', value: EMENDA_DATA.processoSEI },
                  { label: 'Emenda Nº', value: EMENDA_DATA.emendaNumero },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-600">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                    <p className="font-bold text-acer-dark dark:text-gray-200 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ STATS RÁPIDOS ━━━ */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-7 h-7" />, value: `${EMENDA_DATA.beneficiarios}`, label: 'Beneficiários Diretos' },
              { icon: <Calendar className="w-7 h-7" />, value: EMENDA_DATA.periodo, label: 'Período de Execução' },
              { icon: <MapPin className="w-7 h-7" />, value: EMENDA_DATA.municipio, label: 'Município' },
              { icon: <FileText className="w-7 h-7" />, value: '5', label: 'Modalidades Esportivas' },
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center group hover:-translate-y-2 transition-all">
                <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-acer-blue group-hover:bg-acer-blue group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <p className="text-2xl font-display font-black text-acer-dark dark:text-white">{stat.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ MODALIDADES ━━━ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-acer-blue font-black uppercase tracking-widest text-xs mb-4 block">O Projeto</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">
              Modalidades <span className="text-acer-blue">Esportivas</span>
            </h2>
            <div className="h-1.5 w-20 bg-acer-blue mx-auto mt-4 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mt-6 text-lg">
              Todos os {EMENDA_DATA.beneficiarios} beneficiários participam de todas as atividades, com professores especializados em cada modalidade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {modalidades.map((mod, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center group hover:-translate-y-2 transition-all hover:shadow-lg hover:border-acer-blue/30">
                <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-acer-blue group-hover:bg-acer-blue group-hover:text-white transition-colors">
                  {mod.icon}
                </div>
                <h3 className="text-base font-display font-black text-acer-dark dark:text-white uppercase tracking-tight mb-1">{mod.nome}</h3>
                <p className="text-xs font-bold text-acer-blue">{mod.vagas} vagas</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ EQUIPE TÉCNICA ━━━ */}
      <section className="bg-acer-blue py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
              Equipe <span className="text-yellow-400">Técnica</span>
            </h2>
            <div className="h-1.5 w-20 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {equipe.map((membro, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors text-center">
                <div className="text-yellow-400 mb-3 flex justify-center">{membro.icon}</div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ MATERIAIS ESPORTIVOS ━━━ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">
              Investimento em <span className="text-acer-blue">Materiais</span>
            </h2>
            <div className="h-1.5 w-20 bg-acer-blue mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {materiaisDestaques.map((mat, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center group hover:-translate-y-2 transition-all">
                <div className="bg-blue-50 dark:bg-blue-900/30 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-acer-blue group-hover:bg-acer-blue group-hover:text-white transition-colors">
                  {mat.icon}
                </div>
                <h3 className="text-sm font-display font-bold text-acer-dark dark:text-white mb-1">{mat.item}</h3>
                <p className="text-xs font-bold text-acer-blue">{mat.qtd}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PAINEL TRANSFEREGOV — REPRODUÇÃO GRÁFICA ━━━ */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest mb-6 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-4 h-4" />
              Comprovação Oficial
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-acer-dark dark:text-white uppercase tracking-tight">
              Portal <span className="text-acer-blue">Transferegov</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mt-4">
              Dados extraídos do sistema Discricionárias e Legais do Governo Federal, confirmando a aprovação e execução do instrumento.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden max-w-5xl mx-auto">
            {/* Header verde institucional */}
            <div className="bg-[#1F594A] p-6 md:p-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Landmark className="w-8 h-8 text-white" />
                <div>
                  <p className="text-yellow-400 font-display font-black text-lg italic">Discricionárias e Legais</p>
                  <p className="text-white/80 text-xs font-medium uppercase tracking-wider">{EMENDA_DATA.orgao}</p>
                </div>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-white/60 text-[10px] uppercase tracking-widest">Rede de Parcerias</p>
              </div>
            </div>

            <div className="p-8 md:p-10">

              {/* ── Propostas × Instrumentos com Donut Charts ── */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Propostas */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-sm font-black text-acer-dark dark:text-white uppercase tracking-wide mb-1">Propostas</h3>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Propostas Apresentadas</span>
                      <span className="text-3xl font-display font-black text-acer-dark dark:text-white">1</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">% de Propostas Aprovadas</span>
                      <span className="text-3xl font-display font-black text-emerald-600">100,0%</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Situação das Propostas · Agrupado</p>
                  <div className="flex items-center gap-6">
                    {/* SVG Donut — Aprovadas */}
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="48" fill="none" stroke="#E5E7EB" strokeWidth="18" />
                      <circle cx="60" cy="60" r="48" fill="none" stroke="#F59E0B" strokeWidth="18"
                        strokeDasharray={`${2 * Math.PI * 48}`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)" />
                      <text x="60" y="55" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300" style={{ fontSize: '11px', fontWeight: 800 }}>Aprovadas</text>
                      <text x="60" y="72" textAnchor="middle" className="fill-gray-500" style={{ fontSize: '13px', fontWeight: 700 }}>1</text>
                    </svg>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-amber-400 inline-block"></span>
                      <span className="text-xs font-bold text-gray-500">Aprovadas</span>
                    </div>
                  </div>
                </div>

                {/* Instrumentos Assinados */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-sm font-black text-acer-dark dark:text-white uppercase tracking-wide mb-1">Instrumentos Assinados</h3>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Instrumentos Assinados</span>
                      <span className="text-3xl font-display font-black text-acer-dark dark:text-white">1</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">% Assinatura de Instrumentos</span>
                      <span className="text-3xl font-display font-black text-emerald-600">100,00%</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Situação dos Instrumentos Assinados · Agrupado</p>
                  <div className="flex items-center gap-6">
                    {/* SVG Donut — Em Execução */}
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="48" fill="none" stroke="#E5E7EB" strokeWidth="18" />
                      <circle cx="60" cy="60" r="48" fill="none" stroke="#F59E0B" strokeWidth="18"
                        strokeDasharray={`${2 * Math.PI * 48}`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)" />
                      <text x="60" y="55" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300" style={{ fontSize: '10px', fontWeight: 800 }}>em Execução</text>
                      <text x="60" y="72" textAnchor="middle" className="fill-gray-500" style={{ fontSize: '13px', fontWeight: 700 }}>1</text>
                    </svg>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-amber-400 inline-block"></span>
                      <span className="text-xs font-bold text-gray-500">em Execução</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Visão Geral dos Instrumentos Assinados ── */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-10">
                <h3 className="text-sm font-black text-acer-dark dark:text-white uppercase tracking-wide mb-6">Visão Geral dos Instrumentos Assinados</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Valor Global</span>
                    <span className="text-2xl font-display font-black text-acer-blue">980 mil</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Valor Liberado</span>
                    <span className="text-2xl font-display font-black text-acer-dark dark:text-white">0</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Saldo em conta</span>
                    <span className="text-2xl font-display font-black text-acer-dark dark:text-white">0</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Valores Devolvidos</span>
                    <span className="text-2xl font-display font-black text-acer-dark dark:text-white">0</span>
                  </div>
                </div>
              </div>

              {/* ── Lista de Instrumentos Assinados (tabela) ── */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h3 className="text-sm font-black text-acer-dark dark:text-white uppercase tracking-wide mb-6">Lista de Instrumentos Assinados</h3>
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">Nº Instrumento</th>
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">UF</th>
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">Município</th>
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">CNPJ</th>
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">Nome Proponente</th>
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">Modalidade</th>
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">Emenda</th>
                        <th className="py-3 px-3 font-black text-gray-400 uppercase tracking-widest text-[10px]">Situação</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-4 px-3 font-bold text-acer-blue">{EMENDA_DATA.termoFomento}</td>
                        <td className="py-4 px-3 font-bold text-acer-dark dark:text-white">SP</td>
                        <td className="py-4 px-3 font-bold text-acer-dark dark:text-white">OLÍMPIA</td>
                        <td className="py-4 px-3 font-bold text-acer-dark dark:text-white">{INSTITUTION_DATA.cnpj}</td>
                        <td className="py-4 px-3 font-bold text-acer-dark dark:text-white">ASSOCIAÇÃO CULTURAL ESPORTIVA RAÍZES</td>
                        <td className="py-4 px-3 font-bold text-acer-dark dark:text-white">TERMO DE FOMENTO</td>
                        <td className="py-4 px-3 font-bold text-acer-dark dark:text-white">SIM</td>
                        <td className="py-4 px-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                            <CheckCircle2 className="w-3 h-3" /> Em execução
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-gray-400 mt-4 italic">
                  Objeto: Implementação e Desenvolvimento do Projeto esportivo, no Município de Olímpia/SP.
                </p>
              </div>

            </div>
          </div>

          {/* Link externo para o portal (escondido até definir URL final) */}
          <div className="text-center mt-8 hidden">
            <a
              href="https://discricionariaselegais.transferegov.sistema.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-acer-blue font-black uppercase text-xs tracking-widest hover:underline decoration-2 underline-offset-4"
            >
              <ExternalLink className="w-4 h-4" /> Consultar no Portal Transferegov (gov.br)
            </a>
          </div>
        </div>
      </section>

      {/* ━━━ DADOS CADASTRAIS ━━━ */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center text-acer-blue mb-6 mx-auto md:mx-0">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-2">Dados da Proponente</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Informações oficiais do instrumento para consulta e verificação.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { label: 'Razão Social', value: INSTITUTION_DATA.name },
                { label: 'CNPJ', value: INSTITUTION_DATA.cnpj },
                { label: 'Dirigente', value: INSTITUTION_DATA.president },
                { label: 'Município', value: 'Olímpia – SP' },
                { label: 'Contato', value: INSTITUTION_DATA.email },
                { label: 'Telefone', value: INSTITUTION_DATA.phone },
              ].map((info, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">{info.label}</span>
                  <p className="font-bold text-acer-dark dark:text-gray-200 text-sm">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmendaParlamentar;
