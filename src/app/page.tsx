import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import AboutSpace from '@/components/sections/AboutSpace';
import Professionals from '@/components/sections/Professionals';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col w-full">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main High-Impact Hero Section */}
      <Hero />

      {/* Clinical Team / Specialists */}
      <Professionals />

      {/* Treatments & Specialties */}
      <Services />

      {/* Infrastructure & Clinic Space */}
      <AboutSpace />

      {/* High-Conversion Closing Banner */}
      <CtaBanner />

      {/* Social Proof / Google Reviews */}
      <Testimonials />

      {/* Comprehensive Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </main>
  );
}
