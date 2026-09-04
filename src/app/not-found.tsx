import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Página não encontrada</h2>
      <p className="text-slate-600 mb-6 max-w-md">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors shadow-md"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
