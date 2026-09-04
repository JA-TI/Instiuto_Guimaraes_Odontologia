export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  treatment?: string;
  reviewerStats?: string;
  comment: string;
  verified: boolean;
  googleReviewUrl?: string;
}

export const reviewsData: Review[] = [
  {
    id: "review-pedro",
    name: "Pedro Ferreira",
    rating: 5,
    date: "6 meses atrás",
    reviewerStats: "4 avaliações",
    treatment: "Invisalign",
    comment: "Sou cliente do Instituto Guimarães de Odontologia a anos e atualmente faço tratamento com Invisalign. Minha experiência tem sido excelente desde o início. O atendimento é sempre muito atencioso, a equipe é extremamente profissional e acolhedora, e tudo é explicado com clareza e cuidado. Dá pra perceber o comprometimento e o carinho com cada paciente. Estou muito satisfeito com o tratamento e recomendo demais!",
    verified: true,
    avatar: "/images/testimonials/pedro_ferreira.png"
  },
  {
    id: "review-marcelia",
    name: "Marcelia R. Caudill",
    rating: 5,
    date: "2 anos atrás",
    reviewerStats: "11 avaliações",
    treatment: "Tratamento Personalizado",
    comment: "Profissionais dedicados que vão acima do esperado para oferecer o melhor serviço. Tenho plena confiança nos diagnósticos e planos individualizados de tratamento, pois estão se atualizando constantemente e procuram sempre o que é melhor para o cliente.",
    verified: true,
    avatar: "/images/testimonials/marcelia_r_caudill.png"
  },
  {
    id: "review-renata",
    name: "Renata Guimarães",
    rating: 5,
    date: "4 anos atrás",
    reviewerStats: "Local Guide · 60 avaliações · 207 fotos",
    treatment: "Paciente Fidelizada",
    comment: "O melhor consultório odontológico de Uberlândia! O Doutor Fernando e a Doutora Ana Lúcia são profissionais muito experientes e transparentes sobre os melhores tratamentos para cada caso. Por isso, indico bastante o serviço deles. Eu sou cliente dos dois desde sempre e não troco de dentistas de forma alguma. Confio de olho fechado!! Além disso, o valor cobrado é justo, chegando até a ser barato tendo em vista a qualidade que entegam. Enfim, sugiro virar paciente do IGO. Você não irá se arrepender.",
    verified: true,
    avatar: "/images/testimonials/renata_guimaraes.png"
  },
  {
    id: "review-aline",
    name: "Aline F",
    rating: 5,
    date: "3 anos atrás",
    reviewerStats: "1 avaliação",
    treatment: "Atendimento Familiar",
    comment: "Ótima clinica, tratamento perfeito, profissionais atenciosos, gentis e acolhedor. DR Fernando e DRA Ana Lúcia são maravilhoso, só agradeço o carinho e atenção comigo e no tratamento do meu filho.",
    verified: true,
    avatar: "/images/testimonials/aline_f.png"
  },
  {
    id: "review-sarah",
    name: "Sarah Reimann Oliveira",
    rating: 5,
    date: "3 anos atrás",
    reviewerStats: "3 avaliações",
    treatment: "Atendimento & Equipe",
    comment: "O atendimento é excelente. A Dra Ana Lúcia e o Dr Fernando são muito profissionais. Além disso, a recepção pela Ricelli é rápida e atenciosa.",
    verified: true,
    avatar: "/images/testimonials/sarah_reimann_oliveira.png"
  },
  {
    id: "review-gustavo",
    name: "Gustavo Oliveira",
    rating: 5,
    date: "1 ano atrás",
    reviewerStats: "8 avaliações · 1 foto",
    treatment: "Atendimento Familiar",
    comment: "Toda a equipe extremamente capacitada. Saio da minha cidade para ser atendido por eles. Aliás, não só eu, mas toda a minha família.",
    verified: true,
    avatar: "/images/testimonials/gustavo_oliveira.png"
  }
];
