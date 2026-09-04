'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Service } from '@/data/services';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  X, 
  Calendar, 
  ArrowRight, 
  MoveHorizontal,
  ExternalLink
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  if (!service) return null;

  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    `Olá! Vi o antes e depois de ${service.title} no site da iGoodonto e gostaria de agendar uma avaliação.`
  );

  const beforeImg = service.beforeAfter?.beforeImage || service.image;
  const afterImg = service.beforeAfter?.afterImage || service.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/75 backdrop-blur-md animate-fade-in">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 animate-fade-up flex flex-col">
        
        {/* Modern & Refined Header */}
        <div className="relative bg-gradient-to-b from-slate-50/90 to-white px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-0.5">
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-100/60 px-2.5 py-0.5 rounded-full">
                Antes & Depois
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-navy-950 tracking-tight leading-tight">
              {service.title}
            </h3>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy-950 flex items-center justify-center transition-all duration-200 active:scale-95 shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Slider Stage */}
        <div className="p-4 sm:p-6 bg-slate-100/70 flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[60vh] rounded-2xl overflow-hidden shadow-lg select-none bg-slate-900 border border-slate-200/90">
            
            {/* After Image & Badge (Clipped to sliderPosition -> 100%) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
            >
              <Image
                src={afterImg}
                alt={`Depois - ${service.title}`}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Depois Badge */}
              <span 
                className="absolute top-3.5 right-3.5 bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg border border-emerald-400/50 backdrop-blur-md transition-opacity duration-150"
                style={{ opacity: sliderPosition > 88 ? 0 : 1 }}
              >
                Depois
              </span>
            </div>

            {/* Before Image & Badge (Clipped to 0 -> sliderPosition%) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src={beforeImg}
                alt={`Antes - ${service.title}`}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Antes Badge */}
              <span 
                className="absolute top-3.5 left-3.5 bg-navy-950/90 text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg border border-white/20 backdrop-blur-md transition-opacity duration-150"
                style={{ opacity: sliderPosition < 12 ? 0 : 1 }}
              >
                Antes
              </span>
            </div>

            {/* Slider Divider Line & Custom Handle */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-700 font-bold border-2 border-brand-500 hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-brand-600" />
              </div>
            </div>

            {/* Interactive Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
              aria-label="Controle de comparação antes e depois"
            />
          </div>
        </div>

        {/* Modal Bottom Bar / Action */}
        <div className="px-6 py-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
            <MoveHorizontal className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Arraste horizontalmente para comparar o resultado</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {service.simulationUrl && (
              <Button
                href={service.simulationUrl}
                target="_blank"
                variant="teal"
                size="sm"
                className="w-full sm:w-auto"
                rightIcon={<ExternalLink className="w-3.5 h-3.5 opacity-80" />}
              >
                {service.simulationLabel || "Simule seu sorriso Invisalign"}
              </Button>
            )}

            <Button
              href={whatsappUrl}
              target="_blank"
              variant="primary"
              size="sm"
              className="w-full sm:w-auto"
              leftIcon={<Calendar className="w-4 h-4" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Quero este resultado
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
