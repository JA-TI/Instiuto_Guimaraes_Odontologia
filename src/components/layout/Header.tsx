'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clinicInfo } from '@/data/clinicInfo';
import { formatWhatsAppUrl } from '@/lib/utils';
import { 
  Phone, 
  Menu, 
  X, 
  Calendar, 
  ChevronRight
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Profissionais', href: '#profissionais' },
    { name: 'O Espaço', href: '#espaco' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
      }
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  const whatsappUrl = formatWhatsAppUrl(
    clinicInfo.whatsappRaw,
    'Olá! Gostaria de agendar uma consulta na iGoodonto.'
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-3.5 sm:py-4 border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center group py-0.5" 
            aria-label="iGoodonto - Início"
          >
            <div className="relative h-12 sm:h-14 lg:h-16 w-auto flex items-center">
              <Image
                src="/images/logo/igo-logo.svg"
                alt="iGoodonto - Instituto Guimarães de Odontologia"
                width={170}
                height={80}
                priority
                quality={100}
                unoptimized
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </a>

          {/* Desktop Navigation Links - Proportional and Harmonious */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[15px] xl:text-base font-semibold text-slate-700 hover:text-brand-600 transition-colors duration-200 relative py-1.5 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-cyan-500 group-hover:w-full transition-all duration-200 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 hover:from-brand-800 hover:to-brand-600 text-white font-bold text-xs sm:text-[14px] xl:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-brand-600/25 hover:shadow-lg hover:shadow-brand-600/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-brand-700 hover:bg-brand-50 focus:outline-none transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-xl px-4 pt-3 pb-6 animate-fade-in">
            <div className="space-y-1 divide-y divide-slate-100/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-3.5 px-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-700 to-brand-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md shadow-brand-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Avaliação via WhatsApp</span>
              </a>

              <a
                href={`tel:${clinicInfo.phone.replace(/\D/g, '')}`}
                className="w-full flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm py-3 px-4 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-700" />
                <span>Ligar: {clinicInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
