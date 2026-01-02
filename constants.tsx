
import React from 'react';
import {
  Heart,
  School,
  Music,
  Calendar,
  Rocket,
  MapPin,
  Clock,
  History,
  Users,
  Target
} from 'lucide-react';
import { Project, TransparencyReport, ClassSchedule } from './types';
import ProjectOlhoImage from '@/assets/projeto-olho-no-futuro-1.jpg';
import ProjectAbiuImage from '@/assets/foto-abiu-capoeira-1.jpg';
import ProjectEducacaoImage from '@/assets/educacao-complementar.jpg';
import ProjectRaizesImage from '@/assets/raizes-esportes-1.jpg';

export const INSTITUTION_DATA = {
  name: "Associação Cultural Esportiva Raízes (ACER)",
  cnpj: "02.966.928/0001-50",
  address: "Rua Henrique Riquena, 248 - Jardim Paulista, Olímpia - SP, CEP 15406-043",
  email: "aculturalesportiva@gmail.com",
  president: "Marco Aurélio Cotrim de Carvalho",
  phone: "(17) 3281-1727",
  whatsapp: "551732811727",
  whatsappDisplay: "(17) 99208-1128",
  founded: 1999
};

export const STATS = [
  { label: "ANOS DE HISTÓRIA", value: "35+", icon: <History className="w-6 h-6" /> },
  { label: "JOVENS IMPACTADOS", value: "300+", icon: <Users className="w-6 h-6" /> },
  { label: "POLOS ATIVOS", value: "5", icon: <MapPin className="w-6 h-6" /> },
  { label: "DEDICAÇÃO", value: "100%", icon: <Target className="w-6 h-6" /> },
];

export const PROJECTS: Project[] = [
  {
    id: "olho-no-futuro",
    title: "Olho no Futuro",
    description: "Atendimento integral: Capoeira, Futebol, Ginástica, Dança, Reforço Escolar e Apoio Psicossocial para crianças e adolescentes em situação de vulnerabilidade.",
    image: ProjectOlhoImage,
    status: "EM ANDAMENTO",
    location: "Olímpia, SP",
    categoryIcon: "favorite",
    link: "/olho-no-futuro",
    fullWidth: false
  },
  {
    id: "abiu-capoeira",
    title: "ABIU Capoeira",
    description: "Apoiando e difundindo a arte da capoeira através de eventos, rodas culturais e preservação das tradições com o selo ABIU - Ordem e Progresso.",
    image: ProjectAbiuImage,
    categoryIcon: "music_note",
    link: "/abiu"
  },
  {
    id: "educacao-complementar",
    title: "Educação Complementar",
    description: "Oficinas de reforço escolar, leitura e inclusão digital para garantir que nossos atletas também sejam campeões na escola.",
    image: ProjectEducacaoImage,
    categoryIcon: "school",
    link: "/projetos"
  },
  {
    id: "raizes-esporte",
    title: "Raízes de Esporte",
    description: "Promoção do desenvolvimento integral e inclusão social para 180 jovens através do Jiu-Jitsu e Muay Thai nos distritos de Baguaçu e Ribeiro dos Santos.",
    image: ProjectRaizesImage,
    status: "ESPORTE E INCLUSÃO",
    location: "Baguaçu e R. Santos • 180 Alunos",
    categoryIcon: "sports_kabaddi",
    link: "/raizes-esporte",
    fullWidth: false
  },
  {
    id: "futuros-projetos",
    title: "Futuros Projetos",
    description: "Estamos sempre planejando o próximo passo. Veja o que vem por aí e nos ajude a tirar do papel.",
    image: "",
    categoryIcon: "rocket_launch",
    link: "/contato"
  }
];

export const TRANSPARENCY_REPORTS: TransparencyReport[] = [
  { year: 2024, label: "Balanço Patrimonial 2024 (Previsto)", fileUrl: "#" },
  { year: 2023, label: "Balanço Financeiro Anual 2023", fileUrl: "#" },
  { year: 2022, label: "Balanço Financeiro Anual 2022", fileUrl: "#" },
  { year: 2021, label: "Relatório de Atividades 2021", fileUrl: "#" },
  { year: 2020, label: "Balanço Consolidado 2020", fileUrl: "#" }
];

export const SCHEDULES = {
  districts: [
    {
      polo: "Polo Baguaçu",
      location: "Centro Múltiplo Uso",
      days: "Segunda, Quarta e Sexta",
      time: "17:00 - 21:00",
      activity: "Jiu-Jitsu e Muay Thai"
    },
    {
      polo: "Polo Ribeiro dos Santos",
      location: "Quadra Coberta",
      days: "Terça e Quinta",
      time: "17:00 - 21:00",
      activity: "Jiu-Jitsu e Muay Thai"
    }
  ],
  headquarters: [
    {
      polo: "Complexo Esportivo",
      location: "Olímpia",
      days: "Terça e Quinta (18h às 20h) e Sábado (14h30)",
      time: "",
      activity: "Capoeira"
    },
    {
      polo: "Cras (São José)",
      location: "Olímpia",
      days: "Quarta e Sexta",
      time: "19:00 - 20:00",
      activity: "Capoeira"
    },
    {
      polo: "Centro Comunitário",
      location: "Cohab IV",
      days: "Segunda e Quarta",
      time: "19:00 - 20:00",
      activity: "Capoeira"
    }
  ]
};

export const CAPOEIRA_SCHEDULE: ClassSchedule[] = [
  { day: "Segunda-feira", time: "19:00 - 20:00", level: "Polo Baguaçu" },
  { day: "Terça e Quinta (18h às 20h) e Sábado (14h30)", time: "", level: "Complexo Esportivo" },
  { day: "Quarta e Sexta", time: "19:00 - 20:00", level: "Cras (São José)" },
  { day: "Segunda e Quarta", time: "19:00 - 20:00", level: "Centro Comunitário (Cohab IV)" },
];
