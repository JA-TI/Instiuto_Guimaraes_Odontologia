'use client';

import React from 'react';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  Calendar, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

import Button from '@/components/ui/Button';

export default function Hero() {
  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de agendar uma consulta na iGoodonto.'
  );

  return (
    <section id="inicio" className="relative min-h-[100dvh] lg:min-h-screen pt-24 pb-6 sm:pb-8 lg:pb-10 overflow-hidden flex flex-col justify-end bg-navy-950">
      {/* Background Video (Seamless Responsive Loop) with Clean Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-navy-950" aria-hidden="true">
        {/* Mobile Vertical Poster / Video */}
        <div className="block md:hidden absolute inset-0" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/hero_poster_mobile.webp"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          >
            <source src="/images/hero_animation_mobile_loop.webm" type="video/webm" />
            <source src="/images/hero_animation_mobile_loop.mp4" type="video/mp4" />
            <track kind="captions" srcLang="pt-BR" label="Sem áudio" />
          </video>
        </div>

        {/* Desktop / Tablet Widescreen Poster / Video */}
        <div className="hidden md:block absolute inset-0" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/hero_poster_desktop.webp"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_35%] scale-105 origin-center"
          >
            <source src="/images/hero_animation_loop.webm" type="video/webm" />
            <source src="/images/hero_animation_loop.mp4" type="video/mp4" />
            <track kind="captions" srcLang="pt-BR" label="Sem áudio" />
          </video>
        </div>

        {/* Focused gradient only at the lower area for text legibility, keeping the rest completely natural */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/45 via-25% to-transparent" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-end text-center mt-auto pb-2 sm:pb-0">
        {/* Hidden H1 for SEO semantics */}
        <h1 className="sr-only">
          Instituto Guimarães de Odontologia - Cuidado e excelência odontológica em Uberlândia
        </h1>

        <div className="w-full max-w-2xl space-y-4 sm:space-y-5 text-center flex flex-col items-center">
          {/* Subtitle placed below the logo animation */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-sm sm:max-w-xl leading-relaxed font-medium drop-shadow-md px-1 sm:px-0">
            Há mais de três décadas unindo atendimento acolhedor, profissionais experientes e tecnologia para cuidar de você e da sua família.
          </p>

          {/* Action Buttons - Stacked on mobile for great legibility & thumb tap targets, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 w-full max-w-xs sm:max-w-none">
            <Button
              href={whatsappUrl}
              target="_blank"
              variant="primary"
              size="md"
              leftIcon={<Calendar className="w-4 h-4 sm:w-4 sm:h-4" />}
              rightIcon={<ArrowRight className="w-4 h-4 hidden sm:inline" />}
              className="w-full sm:w-auto text-sm sm:text-base py-3 sm:py-3.5 px-6 font-bold shadow-lg shadow-cyan-500/20"
            >
              Agendar consulta
            </Button>

            <Button
              href="#espaco"
              variant="outlineWhite"
              size="md"
              className="w-full sm:w-auto text-sm sm:text-base py-3 sm:py-3.5 px-6 font-semibold"
            >
              Conhecer a clínica
            </Button>
          </div>

          {/* Location & Heritage */}
          <div className="pt-2 sm:pt-3 border-t border-white/20 flex items-center justify-center space-x-2 text-slate-300 text-xs sm:text-sm font-medium">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Santa Mônica, Uberlândia • Desde 1991</span>
          </div>
        </div>
      </div>
    </section>
  );
}




