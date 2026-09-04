'use client';

import React from 'react';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Layers, 
  Clock, 
  BadgePercent, 
  Calendar, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import Button from '@/components/ui/Button';

export default function WhyChooseUs() {
  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de saber mais sobre as condições e tratamentos da iGoodonto.'
  );

  const differentials = [
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: "Tradição Sólida Desde 1991",
      description: "Mais de 30 anos construindo confiança e transformando milhares de sorrisos em Uberlândia com ética e responsabilidade."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: "Invisalign Doctors & Tecnologia 3D",
      description: "Planejamento computadorizado avançado que permite visualizar o resultado final do seu sorriso antes mesmo de começar."
    },
    {
      icon: <BadgePercent className="w-6 h-6 text-cyan-400" />,
      title: "Excelência com Preço Justo",
      description: "Acesso à odontologia de alto padrão com condições facilitadas, transparência no orçamento e sem custos ocultos."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-cyan-400" />,
      title: "Cuidado Humanizado & Sem Dor",
      description: "Protocolos modernos com foco em conforto total, ambiente acolhedor e técnicas de anestesia suave."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Biomateriais de Alta Durabilidade",
      description: "Utilização exclusiva de resinas, porcelanas e titânio de grau médico internacional com alta longevidade."
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Corpo Clínico Integrado",
      description: "Ortodontistas e cirurgiões no mesmo local, viabilizando tratamentos integrados e resolutivos sem perda de tempo."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Spheres */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Consiga um sorriso deslumbrante através de um{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-brand-400 to-sky-300 bg-clip-text text-transparent">
              cuidado de excelência e preço justo
            </span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Cirurgiões-dentistas especializados, preparados para te atender com o respeito, a atenção e a dedicação que a sua saúde bucal merece.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-slate-900 to-navy-900/90 p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                {item.icon}
              </div>

              <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fast Action CTA Box */}
        <div className="bg-gradient-to-r from-brand-800 via-brand-700 to-cyan-700 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Faça a escolha certa para o seu sorriso!
            </h3>
            <p className="text-sm text-cyan-100 max-w-xl">
              Agende sua consulta de avaliação e descubra o plano de tratamento ideal desenhado sob medida para você.
            </p>
          </div>

          <Button
            href={whatsappUrl}
            target="_blank"
            variant="white"
            size="lg"
            shape="2xl"
            className="shrink-0"
            leftIcon={<Calendar className="w-5 h-5 text-brand-700" />}
            rightIcon={<ArrowRight className="w-4 h-4 text-brand-700" />}
          >
            Agendar Consulta de Avaliação
          </Button>
        </div>

      </div>
    </section>
  );
}
