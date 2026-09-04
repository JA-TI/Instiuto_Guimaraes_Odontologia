import React from 'react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Página não encontrada</h2>
      <p className="text-slate-600 mb-6 max-w-md">
        A página que você procura não existe ou foi movida.
      </p>
      <Button
        href="/"
        variant="primary"
        size="md"
      >
        Voltar para a página inicial
      </Button>
    </div>
  );
}
