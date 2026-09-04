'use client';

import React from 'react';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  Calendar, 
  Clock, 
  BadgePercent, 
  Phone, 
  ArrowRight
} from 'lucide-react';

import Button from '@/components/ui/Button';

export default function CtaBanner() {
  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de saber mais sobre as condições e tratamentos da iGoodonto.'
  );

  return (
    <section 
      id="contato" 
      className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white scroll-mt-20 lg:scroll-mt-24 [clip-path:inset(0)]"
    >
      {/* Fixed background layer for seamless mobile & desktop parallax without address bar resize jumps */}
      <div 
        className="fixed top-0 left-0 w-full h-[100lvh] min-h-screen pointer-events-none bg-cover bg-center bg-no-repeat will-change-transform [transform:translateZ(0)]"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      />
      {/* Overlays for depth and readability */}
      <div className="absolute inset-0 bg-slate-950/65 backdrop-brightness-90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none" />

      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight drop-shadow-md">
            Faça a escolha certa para o seu{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-white bg-clip-text text-transparent">
              sorriso!
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Agende sua consulta de avaliação e descubra o plano de tratamento ideal desenhado sob medida para você.
          </p>
        </div>

        {/* Destaques de Confiança e Preço Justo em Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto">
          <div className="bg-slate-900/75 backdrop-blur-md p-6 rounded-2xl border border-white/15 shadow-xl hover:border-cyan-400/50 hover:bg-slate-900/85 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 mb-4">
              <Clock className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-1">
              Tradição Sólida Desde 1991
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mais de 30 anos construindo confiança e transformando milhares de sorrisos em Uberlândia com ética e responsabilidade.
            </p>
          </div>

          <div className="bg-slate-900/75 backdrop-blur-md p-6 rounded-2xl border border-white/15 shadow-xl hover:border-cyan-400/50 hover:bg-slate-900/85 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 mb-4">
              <BadgePercent className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-1">
              Excelência com Preço Justo
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Acesso à odontologia de alto padrão com condições facilitadas, transparência no orçamento e sem custos ocultos.
            </p>
          </div>
        </div>

        {/* Actions CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href={whatsappUrl}
            target="_blank"
            variant="whatsapp"
            size="lg"
            shape="2xl"
            className="w-full sm:w-auto"
            leftIcon={<Calendar className="w-5 h-5 text-white" />}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Agendar Consulta de Avaliação
          </Button>

          <Button
            href={`tel:${clinicInfo.phone.replace(/\D/g, '')}`}
            variant="glass"
            size="lg"
            shape="2xl"
            className="w-full sm:w-auto"
            leftIcon={<Phone className="w-4 h-4 text-cyan-400" />}
          >
            Ligar: {clinicInfo.phone}
          </Button>
        </div>

        {/* Open Hours Note */}
        <div className="pt-2 text-xs text-slate-300 flex items-center justify-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Horário de Atendimento: {clinicInfo.openingHours.weekdays}</span>
        </div>

      </div>
    </section>
  );
}
