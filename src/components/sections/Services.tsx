'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { servicesData, Service } from '@/data/services';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import ServiceModal from '@/components/ui/ServiceModal';
import { Calendar, ExternalLink } from 'lucide-react';

import Button from '@/components/ui/Button';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section 
      id="especialidades" 
      className="relative py-24 overflow-hidden scroll-mt-20 lg:scroll-mt-24 [clip-path:inset(0)]"
    >
      {/* Fixed background layer for seamless mobile & desktop parallax without address bar resize jumps */}
      <div 
        className="fixed top-0 left-0 w-full h-[100lvh] min-h-screen pointer-events-none bg-cover bg-center bg-no-repeat will-change-transform [transform:translateZ(0)]"
        style={{ backgroundImage: "url('/images/services-bg.webp')" }}
      />

      {/* Parallax Overlay to keep photo visible while ensuring optimal contrast */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight drop-shadow-md">
            Tratamentos completos para a sua{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-white bg-clip-text text-transparent">
              saúde e estética bucal
            </span>
          </h2>

          <p className="text-base text-slate-200 leading-relaxed drop-shadow">
            Procedimentos odontológicos modernos, executados com materiais biocompatíveis de padrão internacional e planejamento digital 3D.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const whatsappUrl = formatWhatsAppUrl(
              clinicInfo.whatsappRaw,
              `Olá! Gostaria de agendar uma consulta sobre ${service.title} na iGoodonto.`
            );

            return (
              <div
                key={service.id}
                className="relative bg-slate-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image with smooth bottom gradient fade */}
                  <div className="relative h-48 sm:h-52 w-full bg-slate-950/40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 360px, (max-width: 1024px) 480px, 380px"
                      quality={75}
                      className="object-cover object-center"
                    />
                    
                    {/* Seamless translucent fade to card body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

                    {/* Simulation Button directly over image */}
                    {service.simulationUrl && (
                      <div className="absolute bottom-3 inset-x-3 z-10">
                        <Button
                          href={service.simulationUrl}
                          target="_blank"
                          variant="teal"
                          size="xs"
                          fullWidth
                          rightIcon={<ExternalLink className="w-3.5 h-3.5 opacity-90" />}
                        >
                          {service.simulationLabel || "Simule seu sorriso Invisalign"}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <div className="p-5 sm:p-6 text-center">
                    <h3 className="text-xl font-display font-bold text-white leading-snug drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 space-y-2.5">
                  <Button
                    onClick={() => setSelectedService(service)}
                    variant="outlineWhite"
                    size="sm"
                    fullWidth
                    className="bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white font-medium shadow-sm backdrop-blur-md"
                  >
                    Ver antes e depois do tratamento
                  </Button>

                  <Button
                    href={whatsappUrl}
                    target="_blank"
                    variant="primary"
                    size="sm"
                    fullWidth
                    leftIcon={<Calendar className="w-3.5 h-3.5" />}
                    className="shadow-lg shadow-brand-500/25 font-bold"
                  >
                    Agendar este Tratamento
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Dynamic Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
