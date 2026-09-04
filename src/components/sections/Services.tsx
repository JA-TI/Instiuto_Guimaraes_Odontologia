'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { servicesData, Service } from '@/data/services';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import ServiceModal from '@/components/ui/ServiceModal';
import { Calendar, ExternalLink } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="especialidades" className="py-24 bg-slate-50/80 relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 tracking-tight">
            Tratamentos completos para a sua{' '}
            <span className="bg-gradient-to-r from-brand-700 to-cyan-500 bg-clip-text text-transparent">
              saúde e estética bucal
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
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
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Optional gradient overlay on image */}
                    {service.simulationUrl && (
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    )}

                    {/* Simulation Button directly over image */}
                    {service.simulationUrl && (
                      <a
                        href={service.simulationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-teal-600/95 hover:bg-teal-500 text-white backdrop-blur-md border border-teal-400/40 text-xs font-bold shadow-lg hover:scale-[1.02] transition-all"
                      >
                        <span>{service.simulationLabel || "Simule seu sorriso Invisalign"}</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-90" />
                      </a>
                    )}
                  </div>

                  {/* Card Title */}
                  <div className="p-5 sm:p-6 text-center">
                    <h3 className="text-xl font-display font-extrabold text-navy-950 group-hover:text-brand-700 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Actions (Uniform 2 buttons for all cards) */}
                <div className="p-5 pt-0 space-y-2.5">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center py-2.5 px-3 rounded-xl bg-brand-50/70 hover:bg-brand-100/70 text-brand-900 hover:text-brand-950 text-xs font-bold border border-brand-200/80 hover:border-brand-300 transition-colors"
                  >
                    <span>Ver antes e depois do tratamento</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold shadow-sm shadow-brand-700/20 hover:scale-[1.02] transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar este Tratamento</span>
                  </a>
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
