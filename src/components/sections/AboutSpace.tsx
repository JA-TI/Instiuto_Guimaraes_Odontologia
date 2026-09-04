'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { clinicPhotos, spaceHighlights } from '@/data/gallery';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Snowflake,
  ChevronLeft, 
  ChevronRight,
  Calendar,
  ArrowRight,
  Maximize2,
  X,
  Navigation,
  ExternalLink
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AboutSpace() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de agendar uma visita para conhecer o espaço da iGoodonto.'
  );

  const totalPhotos = clinicPhotos.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalPhotos : 0));
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalPhotos) % totalPhotos : 0));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalPhotos : 0));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalPhotos) % totalPhotos : 0));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, totalPhotos]);

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

  const currentPhoto = clinicPhotos[currentIndex];

  return (
    <section id="espaco" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
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

        {/* Carousel Showcase Container */}
        <div 
          className="relative max-w-5xl mx-auto mb-16"
          ref={carouselRef}
        >
          {/* Main Slide Card - Full Photo Display - Clickable to open Modal */}
          <div 
            onClick={() => setLightboxIndex(currentIndex)}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-navy-950 border border-slate-200/80 h-[400px] sm:h-[500px] lg:h-[580px] w-full flex items-center justify-center group cursor-pointer"
            title="Clique para ampliar a foto"
          >
            {/* Ambient Blurred Background to Fill the Frame Elegantly */}
            <div className="absolute inset-0 overflow-hidden opacity-30 blur-2xl scale-110 pointer-events-none">
              <Image
                src={currentPhoto.image}
                alt=""
                fill
                sizes="100vw"
                quality={75}
                className="object-cover"
              />
            </div>

            {/* Crisp Uncropped Foreground Photo */}
            <div className="relative w-full h-full p-2 sm:p-4 z-10 flex items-center justify-center">
              <Image
                src={currentPhoto.image}
                alt={currentPhoto.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                quality={85}
                className="object-contain"
              />
            </div>

            {/* Nav Arrows inside slide */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-950/70 hover:bg-brand-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-950/70 hover:bg-brand-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {clinicPhotos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-brand-600' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>
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
                <h4 className="font-display font-bold text-base text-navy-900 leading-snug">
                  {highlight.title}
                </h4>
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

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && clinicPhotos[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-6 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar with Counter & Close Button */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between text-white p-2 sm:p-4 z-20 absolute top-0 left-0 right-0 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm font-semibold text-slate-300 bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {lightboxIndex + 1} / {totalPhotos}
            </span>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-white/20 active:bg-white/30 text-white border border-white/20 transition-all hover:scale-105 backdrop-blur-md"
              aria-label="Fechar tela cheia"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Main Photo Area (Full Height) */}
          <div 
            className="relative w-full flex-1 max-w-6xl max-h-[88vh] sm:max-h-[90vh] flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav Arrows inside Modal */}
            <button
              onClick={prevLightbox}
              className="absolute left-2 sm:left-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-brand-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-xl"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-2 sm:right-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-brand-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-xl"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={clinicPhotos[lightboxIndex].image}
                alt={clinicPhotos[lightboxIndex].title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}

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

