
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Target, TrendingUp, Users, Lightbulb, Globe, Rocket, ExternalLink } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';
import OutsourcedManagementBlock from '@/components/OutsourcedManagementBlock';
import PublicPolicyBlock from '@/components/PublicPolicyBlock';

const AboutSection = ({ content, locale, outsourcedManagement, publicPolicy, contact }) => {
  // Use allConferences for carousel images, titles, and links
  const enhancedImages = (content?.carouselImages ?? [])
    .filter(conf => conf.image && conf.title && conf.link)
    .map((conf) => {
      // Support locale-aware title and topic (object or string)
      const title = typeof conf.title === 'object' ? (conf.title[locale] || conf.title.en || conf.title.it || '') : conf.title;
      const topic = typeof conf.topic === 'object' ? (conf.topic[locale] || conf.topic.en || conf.topic.it || '') : (conf.topic || '');
      // Handle both Sanity asset object and string URL for image
      let src = '';
      if (typeof conf.image === 'string') {
        src = conf.image;
      } else if (conf.image && conf.image.asset && conf.image.asset._ref) {
        // Use getSanityImageUrl if available, otherwise fallback
        src = getSanityImageUrl ? getSanityImageUrl(conf.image) : '';
      } else if (conf.image && conf.image.src) {
        src = conf.image.src;
      }
      return {
        src,
        alt: title,
        title,
        subtitle: topic,
        link: conf.link
      };
    });
  return (
    <>
      <section id="about" className="py-4 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-0 md:px-4 sm:px-6 lg:px-8">
          {/* Key Activities Header */}
          <div className="md:mb-6">
            <h2 className="text-3xl font-bold text-slate-800 pl-4 md:pl-8 lg:pl-2">{content?.navigation?.activity?.[locale] || content?.navigation?.activity || 'Activity'}</h2>
          </div>
          {/* Enhanced Carousel with navigation controls */}
          <div className="relative" id="conferences">
            <a href="/luca_bazzanella/all-conferences" target="_blank" rel="noopener noreferrer" className="group">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 pl-4 lg:pl-0 transition-colors duration-200 underline">
                {content?.navigation?.conferences?.[locale] || content?.navigation?.conferences || 'Conferences'}
              </h2>
            </a>
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
              className="relative h-88 md:h-88"
            >
              <CarouselContent className="ml-0 md:-ml-4">
                {enhancedImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-0 md:pl-4 basis-full md:basis-1/3">
                    <a href={image.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="relative group/image overflow-hidden h-full min-h-full">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full min-h-full object-cover rounded-none md:rounded-2xl shadow-lg transition-all duration-700 ease-out group-hover/image:shadow-2xl group-hover/image:scale-105 object-[35%_65%]"
                        />
                        <div
                          className={
                            "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-none md:rounded-2xl transition-all duration-500 ease-out" +
                            " " +
                            "opacity-100 md:opacity-0 md:group-hover/image:opacity-100"
                          }
                        >
                          <div className="absolute bottom-4 left-4 text-white transform translate-y-0 md:translate-y-4 md:group-hover/image:translate-y-0 transition-transform duration-500 ease-out">
                            <p className="text-sm font-semibold mb-1">{image.title}</p>
                            {/* <p className="text-xs opacity-90">{image.subtitle}</p> */}
                          </div>
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>
          {/* Organizations Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-12 pt-8" id="activity">
            {(content?.organizations ?? []).map((org) => (
              <div key={org.id} id={org.id} className="bg-white p-4 lg:p-6 pt-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div>
                  <div className="text-sm mb-1 font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block" style={{marginLeft: '-10px'}}>
                    {org.role?.[locale] || org.role || ''}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{org.title?.[locale] || org.title || ''}</h3>
                </div>
                <div className="space-y-4 mb-2 md:mb-0 flex-grow">
                  <p className=" text-slate-700 leading-relaxed font-light text-justify [word-spacing: -2px] text-justify [word-spacing: -2px] md:mb-1">
                    {typeof org.description === 'object'
                      ? org.description?.[locale] || org.description?.en || org.description?.it || ''
                      : org.description || ''}
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

          {/* Two-column blocks for Outsourced Management and Public Policy */}
          <div className="w-full px-4 md:px-0 py-16 py-4 pb-0" id="specialization">
            <div className="max-w-7xl mx-auto px-0">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 mt-4">
                {content?.navigation?.specialization?.[locale] || content?.navigation?.specialization || 'Specialization'}
              </h2>
              <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
                <OutsourcedManagementBlock content={outsourcedManagement} locale={locale} contact={contact} />
                <PublicPolicyBlock content={publicPolicy} locale={locale} contact={contact} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
