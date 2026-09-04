export interface BeforeAfterData {
  beforeImage: string;
  afterImage: string;
  patientCase: string;
  duration: string;
  resultSummary: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  iconName?: string;
  icon?: string;
  featured?: boolean;
  image: string;
  badge?: string;
  beforeAfter: BeforeAfterData;
  simulationUrl?: string;
  simulationLabel?: string;
}

export const servicesData: Service[] = [
  {
    id: "implantes-dentarios",
    title: "Implantes dentários",
    icon: "/images/treatments/implante.png",
    shortDescription: "Recupere a mastigação firme, a estética natural e a autoestima com próteses e implantes de titânio biocompatível.",
    fullDescription: "Soluções completas para a substituição definitiva de um ou múltiplos dentes ausentes. Realizado com planejamento cirúrgico guiado em 3D, materiais biocompatíveis de padrão internacional e próteses fixas em cerâmica/zircônia de alta durabilidade.",
    benefits: [
      "Recuperação total da função mastigatória",
      "Aparência e sensibilidade 100% naturais",
      "Preservação da estrutura óssea facial",
      "Opção de carga imediata com dentes fixos"
    ],
    beforeAfter: {
      beforeImage: "/images/treatments/implantes_dentarios/implantes_dentarios_antes.jpg",
      afterImage: "/images/treatments/implantes_dentarios/implantes_dentarios_depois.jpg",
      patientCase: "Reabilitação definitiva com implante guiado e coroa em cerâmica",
      duration: "Carga imediata e finalização estética",
      resultSummary: "Restauração completa da segurança mastigatória com estética idêntica aos dentes naturais."
    },
    iconName: "ShieldCheck",
    featured: true,
    image: "/images/treatments/implantes_dentarios/implantes_dentarios_img.jpg",
    badge: "Alta Tecnologia"
  },
  {
    id: "invisalign",
    title: "Invisalign",
    icon: "/images/treatments/invisalign.png",
    shortDescription: "Ortodontia digital de ponta com alinhadores transparentes, removíveis e imperceptíveis ao sorrir.",
    fullDescription: "Tratamento ortodôntico de padrão mundial conduzido por Invisalign Doctors certificados. Sem braquetes de metal, com escaneamento digital 3D (iTero) que permite visualizar a evolução e o resultado do seu novo sorriso antes mesmo de começar.",
    benefits: [
      "Praticamente invisível e discreto no dia a dia",
      "Removível para refeições e higienização completa",
      "Simulação 3D prévia do resultado final",
      "Consultas mais ágeis e menos desconforto"
    ],
    beforeAfter: {
      beforeImage: "/images/treatments/invisalign/invisalign_antes.jpg",
      afterImage: "/images/treatments/invisalign/invisalign_depois.jpg",
      patientCase: "Correção de apinhamento dentário com alinhadores invisíveis",
      duration: "Tratamento ortodôntico digital",
      resultSummary: "Sorriso perfeitamente alinhado, nivelado e discreto do início ao fim."
    },
    simulationUrl: "https://providerbio-latam.invisalign.com/sv/1334960#start",
    simulationLabel: "Simule seu sorriso Invisalign",
    iconName: "Sparkles",
    featured: true,
    image: "/images/treatments/invisalign/invisalign_img.jpg",
    badge: "Mais Procurado"
  },
  {
    id: "periodontia",
    title: "Periodontia",
    icon: "/images/treatments/periodontia.png",
    shortDescription: "Cuidado e tratamento especializado da gengiva e estruturas de suporte para dentes saudáveis e protegidos.",
    fullDescription: "Prevenção, diagnóstico e tratamento de gengivite, periodontite, sangramentos e retrações gengivais. Realizamos também plásticas e remodelagens gengivais estéticas para harmonizar o contorno do seu sorriso.",
    benefits: [
      "Prevenção eficaz de perdas dentárias e retrações",
      "Eliminação de sangramento gengival e mau hálito",
      "Plástica e correção de sorriso gengival",
      "Manutenção da saúde bucal e proteção sistêmica"
    ],
    beforeAfter: {
      beforeImage: "/images/treatments/periodontia/Periodontia_antes.jpg",
      afterImage: "/images/treatments/periodontia/Periodontia_depois.jpg",
      patientCase: "Tratamento periodontal especializado e plástica do contorno gengival",
      duration: "Tratamento personalizado",
      resultSummary: "Saúde gengival restabelecida, eliminação de sangramentos e contorno estético harmônico."
    },
    iconName: "HeartPulse",
    featured: false,
    image: "/images/treatments/periodontia/Periodontia_img.jpg"
  },
  {
    id: "clareamento-dental",
    title: "Clareamento dental",
    icon: "/images/treatments/clareamentodental.png",
    shortDescription: "Dentes mais brancos, radiantes e com brilho natural através de protocolos seguros e sem sensibilidade.",
    fullDescription: "Protocolo moderno de clareamento dental personalizado, combinando tecnologia a laser/LED em consultório com moldeiras anatômicas para uso supervisionado. Dentes visivelmente mais claros com preservação total do esmalte.",
    benefits: [
      "Resultados visíveis logo nas primeiras sessões",
      "Fórmula avançada com agentes dessensibilizantes",
      "Brilho natural, homogêneo e sem agressão ao esmalte",
      "Acompanhamento direto por especialista"
    ],
    beforeAfter: {
      beforeImage: "/images/treatments/Clareamento_dental/Clareamento_dental_antes.jpg",
      afterImage: "/images/treatments/Clareamento_dental/Clareamento_dental_depois.jpg",
      patientCase: "Clareamento supervisionado a laser para remoção de pigmentações",
      duration: "2 sessões em consultório + kit domiciliar",
      resultSummary: "Sorriso visivelmente mais claro, brilhante e radiante sem qualquer sensibilidade."
    },
    iconName: "Sun",
    featured: true,
    image: "/images/treatments/Clareamento_dental/Clareamento_dental_img.jpg",
    badge: "Resultado Rápido"
  },
  {
    id: "limpeza-bucal",
    title: "Limpeza bucal",
    icon: "/images/treatments/limpezabucal.png",
    shortDescription: "Profilaxia e higiene profissional profunda com remoção de placa bacteriana, tártaro e polimento dental.",
    fullDescription: "Remoção minuciosa de biofilme, tártaro e manchas superficiais através de ultrassom indolor e jato de bicarbonato/glicina. Essencial para manter a saúde bucal em dia e prevenir cáries e inflamações.",
    benefits: [
      "Remoção indolor e precisa de tártaro e placas",
      "Polimento dental e sensação de dentes lisos",
      "Prevenção ativa de cáries e gengivites",
      "Hálito fresco e gengivas saudáveis"
    ],
    beforeAfter: {
      beforeImage: "/images/treatments/limpeza_bucal/limpezaBucal_antes.jpg",
      afterImage: "/images/treatments/limpeza_bucal/limpezaBucal_depois.jpg",
      patientCase: "Profilaxia profunda com remoção de tártaro e manchas superficiais",
      duration: "Sessão única preventiva",
      resultSummary: "Eliminação total de biofilme e manchas, garantindo dentes limpos, lisos e saúde gengival."
    },
    iconName: "Activity",
    featured: false,
    image: "/images/treatments/limpeza_bucal/limpezaBucal_img.jpg"
  },
  {
    id: "aparelhos-ortodonticos",
    title: "Aparelhos ortodônticos",
    icon: "/images/treatments/aparelhos.png",
    shortDescription: "Alinhamento e correção de mordida com aparelhos modernos autoligados, estéticos em safira ou cerâmica.",
    fullDescription: "Ortodontia de precisão voltada para o alinhamento funcional e harmonia facial de crianças, jovens e adultos. Opções discretas e sistemas autoligados que proporcionam movimentações mais suaves e reduzem o tempo de tratamento.",
    benefits: [
      "Correção eficaz do alinhamento e mordida",
      "Braquetes estéticos discretos em safira e porcelana",
      "Tecnologia autoligada para maior rapidez e conforto",
      "Melhoria na mastigação, fala e harmonia do rosto"
    ],
    beforeAfter: {
      beforeImage: "/images/treatments/aparelho/aparelho_antes.jpg",
      afterImage: "/images/treatments/aparelho/aparelho_depois.jpg",
      patientCase: "Correção de apinhamento e alinhamento ortodôntico completo",
      duration: "Tratamento ortodôntico personalizado",
      resultSummary: "Oclusão restabelecida, nivelamento da arcada e sorriso perfeitamente alinhado e harmônico."
    },
    iconName: "Smile",
    featured: false,
    image: "/images/treatments/aparelho/aparelho_img.jpg"
  }
];
