'use client';

import React, { useState } from 'react';
import { clinicPhotos, spaceHighlights } from '@/data/gallery';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Snowflake,
  Calendar,
  ArrowRight,
  Maximize2,
  X,
  Navigation,
  ExternalLink
} from 'lucide-react';
import Button from '@/components/ui/Button';
import SpotlightCarousel from '@/components/ui/SpotlightCarousel';

export default function AboutSpace() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de agendar uma visita para conhecer o espaço da iGoodonto.'
  );

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-brand-600" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-brand-600" />;
      case 'Snowflake':
        return <Snowflake className="w-5 h-5 text-brand-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="espaco" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 tracking-tight">
            Um espaço projetado para o seu{' '}
            <span className="bg-gradient-to-r from-brand-700 to-cyan-500 bg-clip-text text-transparent">
              conforto e segurança
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Localizada no bairro Santa Mônica em Uberlândia, a iGoodonto oferece uma estrutura moderna, acolhedora e equipada para proporcionar a melhor experiência odontológica para você e sua família.
          </p>
        </div>

        {/* Spotlight Carousel */}
        <div className="mb-16">
          <SpotlightCarousel items={clinicPhotos} />
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {spaceHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center border border-brand-100 mb-3">
                  {getHighlightIcon(highlight.icon)}
                </div>
                <h3 className="font-display font-bold text-base text-navy-900 leading-snug">
                  {highlight.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}

          {/* Google Maps Card */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Clickable Map Preview to open Modal */}
            <div 
              onClick={() => setIsMapModalOpen(true)}
              className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-slate-200/80 mb-2.5 cursor-pointer group/map"
              title="Clique para ver o mapa ampliado"
            >
              <iframe
                src={clinicInfo.address.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                title="Mapa de localização Instituto Guimarães de Odontologia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/10 hover:bg-navy-950/30 flex items-center justify-center transition-all">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 shadow-md group-hover/map:scale-105 transition-transform">
                  <Maximize2 className="w-3 h-3" />
                  <span>Ampliar Mapa</span>
                </span>
              </div>
            </div>
            
            <Button
              href={clinicInfo.address.googleMapsUrl}
              target="_blank"
              variant="outline"
              size="sm"
              fullWidth
              leftIcon={<Navigation className="w-3.5 h-3.5" />}
              rightIcon={<ExternalLink className="w-3 h-3 opacity-70" />}
            >
              Ver no Google Maps
            </Button>
          </div>
        </div>

        {/* CTA Banner inside Space */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-navy-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              Quer conhecer nossa clínica pessoalmente?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Venha tomar um café conosco no bairro Santa Mônica e faça uma avaliação digital completa do seu sorriso.
            </p>
          </div>

          <Button
            href={whatsappUrl}
            target="_blank"
            variant="teal"
            size="md"
            className="shrink-0"
            leftIcon={<Calendar className="w-4 h-4" />}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Agendar Visita & Consulta
          </Button>
        </div>

      </div>

      {/* Large Map Modal */}
      {isMapModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsMapModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center border border-brand-100">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-navy-900 leading-snug">
                    {clinicInfo.fullName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {clinicInfo.address.full}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsMapModalOpen(false)}
                className="p-2.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors"
                aria-label="Fechar mapa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Map Frame */}
            <div className="relative w-full h-[360px] sm:h-[480px] bg-slate-100">
              <iframe
                src={clinicInfo.address.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização ampliado Instituto Guimarães de Odontologia"
                className="w-full h-full"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-600 text-center sm:text-left">
                Fácil estacionamento no local • Bairro Santa Mônica, Uberlândia - MG
              </p>
              
              <Button
                href={clinicInfo.address.googleMapsUrl}
                target="_blank"
                variant="primary"
                size="sm"
                leftIcon={<Navigation className="w-4 h-4" />}
                rightIcon={<ExternalLink className="w-3.5 h-3.5 opacity-80" />}
              >
                Abrir Rota no Google Maps
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

