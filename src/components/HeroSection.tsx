
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { content } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="absolute inset-0 bg-[url('https://european-management-institute.github.io/luca_bazzanella/lovable-uploads/1b7e0beb-45ba-40b5-8a81-de8170b13551.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="animate-fade-in space-y-8 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-lg text-slate-700 leading-relaxed font-light max-w-2xl text-justify">
              {content.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-6">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {content.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 px-6 py-4 rounded-lg font-medium transition-all duration-200"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {content.hero.contact}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 px-6 py-4 rounded-lg font-medium transition-all duration-200"
                  onClick={() => window.open('https://www.linkedin.com/in/luca-bazzanella-b08037b7/', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  {content.hero.linkedin}
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-full order-1 lg:order-2">
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src="https://european-management-institute.github.io/luca_bazzanella/lovable-uploads/1b7e0beb-45ba-40b5-8a81-de8170b13551.png" 
                alt="Dott. Luca Bazzanella"
                className="w-full max-w-lg h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-6 bg-gradient-to-r from-luca-blue-600/20 to-luca-earth-600/20 rounded-3xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
