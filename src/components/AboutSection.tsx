
import { useLanguage } from '@/hooks/useLanguage';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Target, TrendingUp, Users, Lightbulb, Globe, Rocket, ExternalLink } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

const AboutSection = () => {
  const { content } = useLanguage();

  const enhancedImages = [
    ...content.about.images.map((image, index) => {
      const keys = Object.keys(content.about.imageDescriptions);
      const descriptionKey = keys[index];
      const description = content.about.imageDescriptions[descriptionKey];
      
      return {
        src: image.src,
        alt: image.alt,
        title: description?.title || '',
        subtitle: description?.subtitle || '',
      };
    }),
    ...content.about.carouselImages
  ];

  const expertiseAreas = [
    { icon: Target, label: "Public Private Partnership", target: "european-management" },
    { icon: Globe, label: "Public Services Digitalization", target: "ermetes" },
    { icon: Rocket, label: "Sustainable Technologies", target: "sustainable-economy" },
    { icon: TrendingUp, label: "European Policies", target: "european-management" },
    { icon: Users, label: "Business Management", target: "ermetes" },
    { icon: Lightbulb, label: "Innovation and Sustainability", target: "sustainable-economy" }
  ];

  const scrollToOrganization = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      {/* Expertise Areas Section */}
      <section className="py-6 bg-sky-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-white group cursor-pointer hover:bg-sky-800/30 p-2 rounded-lg transition-colors duration-300"
                  onClick={() => scrollToOrganization(area.target)}
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-white leading-tight">{area.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-4 md:py-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-0 md:px-4 sm:px-6 lg:px-8">
          {/* Enhanced Carousel with navigation controls */}
          <div className="mb-8 md:mb-16 relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="relative"
            >
              <CarouselContent className="ml-0 md:-ml-4">
                {enhancedImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-0 md:pl-4 basis-full md:basis-1/3">
                    <div className="relative group/image overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 md:h-64 object-cover rounded-none md:rounded-2xl shadow-lg transition-all duration-700 ease-out group-hover/image:shadow-2xl group-hover/image:scale-105 object-[70%_20%] lg:object-[75%_25%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-none md:rounded-2xl opacity-0 group-hover/image:opacity-100 transition-all duration-500 ease-out">
                        <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500 ease-out">
                          <p className="text-sm font-semibold mb-1">{image.title}</p>
                          <p className="text-xs opacity-90">{image.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>

          {/* Key Activities Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Key Activities</h2>
          </div>

          {/* Organizations Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {content.about.organizations.map((org) => (
              <div key={org.id} id={org.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{org.title}</h3>
                  <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {org.role}
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {org.description}
                  </p>
                  
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    {org.approach}
                  </p>
                </div>
                
                <a 
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                >
                  Learn more
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
