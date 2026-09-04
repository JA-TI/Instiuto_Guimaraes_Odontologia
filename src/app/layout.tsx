import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { clinicInfo } from '@/data/clinicInfo';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#01578c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'IGO Odonto | Instituto Guimarães de Odontologia - Desde 1991 em Uberlândia',
  description: 'Clínica odontológica de alto padrão em Uberlândia. Especialistas em Invisalign, Implantes Dentários, Ortodontia e Estética do Sorriso. Dra. Ana Lúcia Guimarães (CRO-MG 15381) e Dr. Fernando Guimarães (CRO-MG 16129).',
  keywords: [
    'IGO Odonto',
    'iGoodonto',
    'Instituto Guimarães de Odontologia',
    'Dentista em Uberlândia',
    'Invisalign Uberlândia',
    'Implantes Dentários Uberlândia',
    'Ortodontia Santa Mônica Uberlândia',
    'Clínica odontológica Uberlândia',
    'Dr Fernando Guimarães dentista',
    'Dra Ana Lúcia Guimarães dentista',
    'Clareamento Dental Uberlândia'
  ],
  authors: [{ name: 'Instituto Guimarães de Odontologia', url: 'https://igoodonto.com.br' }],
  creator: 'IGO Odonto',
  publisher: 'IGO Odonto',
  metadataBase: new URL('https://igoodonto.com.br'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'IGO Odonto | Instituto Guimarães de Odontologia',
    description: 'Transformando sorrisos com tecnologia 3D, conforto e mais de 30 anos de tradição em Uberlândia.',
    url: 'https://igoodonto.com.br',
    siteName: 'IGO Odonto',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/clinic/IGO-Frente.jpeg',
        width: 1200,
        height: 630,
        alt: 'Instituto Guimarães de Odontologia - Fachada e Clínica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGO Odonto | Instituto Guimarães de Odontologia',
    description: 'Transformando sorrisos com tecnologia 3D, conforto e mais de 30 anos de tradição em Uberlândia.',
    images: ['/images/clinic/IGO-Frente.jpeg'],
  },
  icons: {
    icon: '/images/logo/igo-logo.svg',
    apple: '/images/logo/igo-logo.svg',
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: `${clinicInfo.name} - ${clinicInfo.fullName}`,
  alternateName: clinicInfo.fullName,
  image: 'https://igoodonto.com.br/images/clinic/IGO-Frente.jpeg',
  logo: 'https://igoodonto.com.br/images/logo/igo-logo.svg',
  url: 'https://igoodonto.com.br',
  telephone: `+55${clinicInfo.phone.replace(/\D/g, '')}`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinicInfo.address.street,
    addressLocality: clinicInfo.address.city,
    addressRegion: clinicInfo.address.state,
    postalCode: clinicInfo.address.zip,
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -18.9186,
    longitude: -48.2772,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    clinicInfo.social.instagram,
    clinicInfo.social.facebook,
    clinicInfo.social.doctoralia,
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Dr. Fernando César Guimarães',
      jobTitle: 'Cirurgião Dentista - Especialista em Ortodontia',
      identifier: 'CRO-MG 16129',
    },
    {
      '@type': 'Person',
      name: 'Dra. Ana Lúcia Guimarães',
      jobTitle: 'Cirurgiã Dentista - Especialista em Prótese e Estética',
      identifier: 'CRO-MG 15381',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamentos Odontológicos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Invisalign e Ortodontia Digital',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Implantes Dentários e Reabilitação Oral',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lentes de Contato Dental e Facetas de Porcelana',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Clareamento Dental a Laser',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
