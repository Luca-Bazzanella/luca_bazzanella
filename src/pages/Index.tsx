
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OutsourcedManagementSection from '@/components/OutsourcedManagementSection';
import PublicPolicySection from '@/components/PublicPolicySection';
import SocialImpactSection from '@/components/SocialImpactSection';
import ConferencesSection from '@/components/ConferencesSection';
import VideosSection from '@/components/VideosSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OutsourcedManagementSection />
      <PublicPolicySection />
      <SocialImpactSection />
      <ConferencesSection />
      <VideosSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Index;
