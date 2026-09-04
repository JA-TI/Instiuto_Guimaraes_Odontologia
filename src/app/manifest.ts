import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IGO Odonto - Instituto Guimarães de Odontologia',
    short_name: 'IGO Odonto',
    description: 'Clínica odontológica de alto padrão em Uberlândia desde 1991. Especialistas em Invisalign, Implantes e Estética Dental.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#01578c',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
