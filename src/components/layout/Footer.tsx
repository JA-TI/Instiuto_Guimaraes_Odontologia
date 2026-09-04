'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Calendar, 
  ArrowUpRight, 
  ShieldCheck, 
  Heart,
  Navigation,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de agendar uma consulta na iGoodonto.'
  );

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Clinic Presentation (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center">
              <div className="relative h-20 sm:h-24 w-auto flex items-center">
                <Image
                  src="/images/logo/igo-logo.svg"
                  alt="Instituto Guimarães de Odontologia"
                  width={170}
                  height={100}
                  unoptimized
                  className="h-20 sm:h-24 w-auto object-contain drop-shadow-md"
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Tradição, excelência e tecnologia de ponta dedicadas a criar sorrisos saudáveis e harmônicos desde 1991 em Uberlândia. Atendimento humanizado e especialistas em Ortodontia, Implantes e Estética.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Responsabilidade Técnica CRO-MG</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={clinicInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da iGoodonto"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-pink-600 hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={clinicInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da iGoodonto"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-all duration-300 hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={clinicInfo.social.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doctoralia do Dr. Fernando Guimarães"
                className="px-3 h-10 rounded-xl bg-slate-900 hover:bg-emerald-700 text-slate-300 hover:text-white flex items-center space-x-1.5 text-xs font-semibold border border-slate-800 transition-all duration-300 hover:scale-105"
              >
                <span>Doctoralia</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-display font-semibold text-base flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              <span>Tratamentos & Acesso</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#especialidades" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Invisalign & Ortodontia Digital</span>
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Implantes Dentários & Carga Rápida</span>
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Lentes de Contato & Facetas</span>
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Clareamento a Laser Supervisionado</span>
                </a>
              </li>
              <li>
                <a href="#espaco" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Conhecer o Espaço Clínico</span>
                </a>
              </li>
              <li>
                <a href="#profissionais" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Corpo Clínico & Especialistas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-display font-semibold text-base flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              <span>Contato & Horários</span>
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${clinicInfo.phone.replace(/\D/g, '')}`} className="block text-slate-300 hover:text-cyan-300 font-medium">
                    {clinicInfo.phone}
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block text-emerald-400 hover:text-emerald-300 font-medium">
                    {clinicInfo.whatsapp} (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-400 space-y-1">
                  <p className="text-slate-300 font-medium">Segunda a Sexta:</p>
                  <p>07:00 às 18:00</p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar Horário Exclusivo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Embedded Map (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-display font-semibold text-base flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              <span>Como Chegar</span>
            </h3>

            <div className="flex items-start space-x-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <p className="text-xs leading-relaxed">
                {clinicInfo.address.full}
              </p>
            </div>

            {/* Map Frame */}
            <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-800 shadow-inner relative group">
              <iframe
                src={clinicInfo.address.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização Instituto Guimarães de Odontologia"
                className="w-full h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent p-2 text-center">
                <a
                  href={clinicInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] font-semibold text-cyan-300 hover:text-white transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Instituto Guimarães de Odontologia (iGoodonto). Todos os direitos reservados.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p>Dra. Ana Lúcia (CRO-MG 15381) | Dr. Fernando César (CRO-MG 16129)</p>
          </div>

          <div className="flex items-center space-x-1 text-slate-400">
            <span>Cuidado de alto padrão para o seu sorriso</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
