
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ConferencesSection from '@/components/ConferencesSection';
import VideosSection from '@/components/VideosSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ConferencesSection />
      <VideosSection />
      <Footer />
    </div>
  );
};

export default Index;
