'use client';

import React from 'react';
import Image from 'next/image';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  Calendar, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

export default function Hero() {
  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de agendar uma consulta na iGoodonto.'
  );

  return (
    <section id="inicio" className="relative min-h-[100dvh] lg:min-h-screen pt-36 pb-24 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center justify-center bg-navy-950">
      {/* Background Image with Clean Overlay - Darker on Right Side for Text Legibility */}
      <div className="absolute inset-0 z-0 -translate-y-28 sm:translate-y-0">
        <Image
          src="/images/clinic/IGO-Frente.jpeg"
          alt="Fachada do Instituto Guimarães de Odontologia"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[15%_100%] sm:object-[20%_85%] lg:object-[15%_90%] scale-105 sm:scale-100 origin-[15%_100%]"
        />
        {/* Gradient that keeps the left facade visible while guaranteeing 100% legibility on the right */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-navy-950/95 via-navy-950/85 sm:via-navy-950/75 lg:to-navy-950/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end items-center">
        {/* Main Text Content Aligned to the Right Side */}
        <div className="w-full lg:max-w-xl xl:max-w-2xl space-y-6 sm:space-y-7 text-left">
          
          {/* Natural, Human Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-white tracking-tight leading-[1.14]">
            Cuidado de verdade para a saúde e a beleza do seu sorriso.
          </h1>

          {/* Natural Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
            Há mais de três décadas unindo atendimento acolhedor, profissionais experientes e tecnologia para cuidar de você e da sua família.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar uma consulta</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#espaco"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium text-base px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
            >
              <span>Conhecer a clínica</span>
            </a>
          </div>

          {/* Location & Heritage in place of stats */}
          <div className="pt-6 border-t border-white/15 flex items-center space-x-2.5 text-slate-300 text-sm font-medium">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Santa Mônica, Uberlândia • Desde 1991</span>
          </div>

        </div>
      </div>
    </section>
  );
}




