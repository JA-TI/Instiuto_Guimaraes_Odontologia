'use client';

import React from 'react';
import Image from 'next/image';
import { reviewsData } from '@/data/reviews';
import { clinicInfo } from '@/data/clinicInfo';
import { ExternalLink } from 'lucide-react';

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.665-5.17 3.665-9.09z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1C3.28 21.43 7.37 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32s.13-1.6.38-2.32V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.28 2.57 1.25 6.58l4.03 3.1c.95-2.83 3.6-4.93 6.72-4.93z"
      />
    </svg>
  );
}

function GoldStar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20">
      <defs>
        <linearGradient id="starGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <path
        fill="url(#starGoldGradient)"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50/60 relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 tracking-tight">
            O que nossos pacientes dizem sobre a{' '}
            <span className="bg-gradient-to-r from-brand-700 to-cyan-500 bg-clip-text text-transparent">
              experiência IGO Odonto
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            A satisfação e o sorriso renovado de cada paciente é o nosso maior compromisso diário. Confira avaliações verificadas no Google.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Header: Avatar + Name on Left, Google Logo on Right */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center space-x-3.5 min-w-0">
                    {review.avatar ? (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-50 shadow-inner">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold text-base flex items-center justify-center shrink-0">
                        {review.name.charAt(0)}
                      </div>
                    )}

                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight leading-snug truncate">
                        {review.name}
                      </h3>
                      {review.reviewerStats && (
                        <p className="text-xs text-slate-500 truncate" title={review.reviewerStats}>
                          {review.reviewerStats}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <GoogleIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-0.5 pt-0.5" aria-label={`Avaliação de ${review.rating} de 5 estrelas`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <GoldStar key={i} className="w-4 h-4" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-[14px] text-slate-700 leading-relaxed font-normal pt-1">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Review on Google Link Card */}
        <div className="text-center">
          <a
            href={clinicInfo.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-700 hover:text-brand-900 bg-white hover:bg-slate-50 px-5 py-3 rounded-full border border-slate-200 shadow-sm transition-all"
          >
            <GoogleIcon className="w-4 h-4" />
            <span>Já é nosso paciente? Deixe sua avaliação no Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
