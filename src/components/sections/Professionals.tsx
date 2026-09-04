'use client';

import React from 'react';
import Image from 'next/image';
import { teamData } from '@/data/team';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  Calendar, 
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';

export default function Professionals() {
  return (
    <section id="profissionais" className="py-24 bg-white relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 tracking-tight">
            Experiência, dedicação e{' '}
            <span className="bg-gradient-to-r from-brand-700 to-cyan-500 bg-clip-text text-transparent">
              cuidado com o seu sorriso
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Profissionais preparados para oferecer tratamentos modernos e completos, com o acolhimento e a atenção que você e sua família merecem.
          </p>
        </div>

        {/* Doctors Grid - Clean & Minimalist 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((doctor) => {
            const docWhatsAppUrl = formatWhatsAppUrl(
              clinicInfo.whatsappRaw,
              doctor.whatsappMessage
            );

            return (
              <div
                key={doctor.id}
                className="bg-gradient-to-b from-white to-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Doctor Portrait */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      quality={85}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{doctor.cro}</span>
                    </div>

                    <h3 className="text-xl font-display font-extrabold text-navy-950 leading-snug">
                      {doctor.name}
                    </h3>

                    <p className="text-sm font-semibold text-brand-700">
                      {doctor.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="pt-5 mt-5 border-t border-slate-200/80 flex flex-col gap-2">
                  <a
                    href={docWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar com {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}</span>
                  </a>

                  {doctor.doctoraliaUrl && (
                    <a
                      href={doctor.doctoraliaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-200 transition-colors"
                    >
                      <span>Ver Perfil Doctoralia</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
