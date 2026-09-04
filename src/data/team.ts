export interface Doctor {
  id: string;
  name: string;
  role: string;
  cro: string;
  specialties: string[];
  bio: string;
  highlights: string[];
  image: string;
  doctoraliaUrl?: string;
  whatsappMessage: string;
}

export const teamData: Doctor[] = [
  {
    id: "dra-ana-lucia",
    name: "Dra. Ana Lúcia O. Guimarães",
    role: "Cirurgiã-Dentista",
    cro: "CRO-MG 15.381",
    specialties: [
      "Ortodontia & Ortopedia Facial",
      "Invisalign Doctor Certificada",
      "Estética do Sorriso",
      "Reabilitação Oral Humanizada"
    ],
    bio: "Com mais de 3 décadas dedicadas à odontologia de alta precisão, a Dra. Ana Lúcia alia sensibilidade estética a rigor científico. Especialista em conduzir tratamentos ortodônticos que transformam o perfil e a harmonia facial de forma sutil, confortável e duradoura.",
    highlights: [
      "Mais de 30 anos de experiência clínica",
      "Especialista em Ortodontia e Alinhadores Invisíveis",
      "Foco em atendimento acolhedor e escuta atenta",
      "Centenas de casos de sucesso em Uberlândia e região"
    ],
    image: "/images/doctors/analucia.jpg",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta com a Dra. Ana Lúcia Guimarães."
  },
  {
    id: "dr-fernando-cesar",
    name: "Dr. Fernando César Guimarães",
    role: "Cirurgião-Dentista",
    cro: "CRO-MG 16.129",
    specialties: [
      "Implantodontia & Cirurgia Avançada",
      "Ortodontia & Invisalign Doctor",
      "Prótese Dentária & Carga Imediata",
      "Diagnóstico Digital 3D"
    ],
    bio: "Pioneiro na aplicação de técnicas modernas de implantodontia e alinhadores em Uberlândia. O Dr. Fernando combina maestria cirúrgica com planejamento digital avançado para restabelecer a segurança ao sorrir e mastigar.",
    highlights: [
      "Referência em Implantes e Carga Imediata",
      "Invisalign Doctor com certificação internacional",
      "Avaliação de alta precisão com suporte tecnológico",
      "Membro ativo da comunidade odontológica de Minas Gerais"
    ],
    image: "/images/doctors/fernando.jpg",
    doctoraliaUrl: "https://www.doctoralia.com.br/fernando-cesar-guimaraes/dentista/uberlandia",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação com o Dr. Fernando César Guimarães."
  },
  {
    id: "dra-ana-julia",
    name: "Dra. Ana Júlia de Oliveira Guimarães",
    role: "Cirurgiã-Dentista",
    cro: "CRO-MG 79.420",
    specialties: [
      "Clínica Geral & Prevenção",
      "Dentística & Estética Dental",
      "Odontologia Integrada",
      "Atendimento Humanizado"
    ],
    bio: "Dedicada ao cuidado preventivo, restaurador e estético, a Dra. Ana Júlia atua com uma visão clínica integrada e moderna, priorizando a saúde bucal completa, o conforto e a autoestima de cada paciente.",
    highlights: [
      "Atendimento cuidadoso e personalizado",
      "Foco em restaurações estéticas e saúde preventiva",
      "Tecnologia e planejamento integrado aos especialistas",
      "Compromisso com o bem-estar de toda a família"
    ],
    image: "/images/doctors/anajulia.jpg",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta com a Dra. Ana Júlia Guimarães."
  }
];

