
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Target, TrendingUp, Users, Lightbulb, Globe, Rocket, ExternalLink } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';

const AboutSection = ({ content, locale }) => {
  const enhancedImages = (content?.carouselImages ?? []).map((image) => ({
    ...image,
    src: getSanityImageUrl(image)
  }));
  return (
    <>
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
            {(content?.organizations ?? []).map((org) => (
              <div key={org.id} id={org.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{org.title?.[locale] || org.title || ''}</h3>
                  <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {org.role?.[locale] || org.role || ''}
                  </div>
                </div>
                <div className="space-y-4 mb-6 flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {org.description?.[locale] || org.description || ''}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    {org.approach?.[locale] || org.approach || ''}
                  </p>
                </div>
                <a 
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 mt-auto"
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
