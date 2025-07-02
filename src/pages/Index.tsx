
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ManagementSection from '@/components/ManagementSection';
import ConferencesSection from '@/components/ConferencesSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import VideosSection from '@/components/VideosSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ManagementSection />
      <ConferencesSection />
      <SustainabilitySection />
      <VideosSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
