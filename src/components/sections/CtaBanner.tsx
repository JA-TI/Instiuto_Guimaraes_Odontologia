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

export default function CtaBanner() {
  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de saber mais sobre as condições e tratamentos da iGoodonto.'
  );

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-brand-50/70 relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-brand-800/40 overflow-hidden">
          
          {/* Background Decorative Rings */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight">
                Faça a escolha certa para o seu{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-brand-300 to-sky-200 bg-clip-text text-transparent">
                  sorriso!
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Agende sua consulta de avaliação e descubra o plano de tratamento ideal desenhado sob medida para você.
              </p>
            </div>

            {/* Destaques de Confiança e Preço Justo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left pt-2">
              <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/70 flex items-start space-x-4 hover:border-cyan-500/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg mb-1">
                    Tradição Sólida Desde 1991
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Mais de 30 anos construindo confiança e transformando milhares de sorrisos em Uberlândia com ética e responsabilidade.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/70 flex items-start space-x-4 hover:border-cyan-500/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <BadgePercent className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg mb-1">
                    Excelência com Preço Justo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Acesso à odontologia de alto padrão com condições facilitadas, transparência no orçamento e sem custos ocultos.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Agendar Consulta de Avaliação</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${clinicInfo.phone.replace(/\D/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-2xl border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Ligar: {clinicInfo.phone}</span>
              </a>
            </div>

            {/* Open Hours Note */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Horário de Atendimento: {clinicInfo.openingHours.weekdays}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
