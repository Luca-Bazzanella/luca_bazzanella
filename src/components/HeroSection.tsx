
import { Button } from '@/components/ui/button';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';
import { Linkedin, Instagram } from 'lucide-react';

const HeroSection = ({ content, locale }) => {

  return (
    <section id="home" className="relative min-h-screen flex items-right justify-right bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 mt-0 mb-auto lg:mt-[10rem] pb-5">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="animate-fade-in space-y-8 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-lg text-slate-700 leading-loose font-light max-w-2xl text-justify">
              {content?.description?.[locale] || ''}
            </p>
            
            <div className="flex gap-3 flex-wrap justify-start items-start" style={{ marginTop: '10px' }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 w-10 h-10 rounded-lg font-medium transition-all duration-200 flex items-center justify-center p-0"
                onClick={() => window.open('https://www.linkedin.com/in/luca-bazzanella-b08037b7/', '_blank')}
              >
                <span className="flex items-center justify-center w-full h-full">
                  <Linkedin className="w-6 h-6" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 w-10 h-10 rounded-lg font-medium transition-all duration-200 flex items-center justify-center p-0"
                onClick={() => window.open('https://x.com/LucaBazzanella', '_blank')}
                aria-label="X (Twitter)"
              >
                <span className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" width="24" height="24">
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                  </svg>
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 w-10 h-10 rounded-lg font-medium transition-all duration-200 flex items-center justify-center p-0"
                onClick={() => window.open('https://instagram.com/luca_bazzanella', '_blank')}
                aria-label="Instagram"
              >
                <span className="flex items-center justify-center w-full h-full">
                  <Instagram className="w-6 h-6" />
                </span>
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-full order-1 lg:order-2">
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src={getSanityImageUrl(content?.images?.[0])}
                alt={content?.images?.[0]?.alt}
                className="w-full max-w-lg h-[96%] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="bg-gradient-to-r from-luca-blue-600/20 to-luca-earth-600/20 rounded-3xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
