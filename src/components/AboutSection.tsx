
import { useLanguage } from '@/hooks/useLanguage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Target, TrendingUp, Users, Lightbulb, Globe, Rocket, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AboutSection = () => {
  const { content } = useLanguage();

  const images = content.about.images.map((image, index) => {
    const keys = Object.keys(content.about.imageDescriptions);
    const descriptionKey = keys[index];
    const description = content.about.imageDescriptions[descriptionKey];
    
    return {
      src: image.src,
      alt: image.alt,
      title: description?.title || '',
      subtitle: description?.subtitle || '',
    };
  });

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

      <section id="about" className="py-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Carousel - 3 images per view */}
          <div className="hidden md:block mb-16">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={32}
              slidesPerView={3}
              speed={800}
              navigation={{
                nextEl: '.swiper-button-next-desktop',
                prevEl: '.swiper-button-prev-desktop',
              }}
              pagination={{
                type: "progressbar",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="relative"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group/image overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-64 object-cover rounded-2xl shadow-lg transition-all duration-700 ease-out group-hover/image:shadow-2xl group-hover/image:scale-105 object-[70%_20%] lg:object-[75%_25%]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-all duration-500 ease-out">
                      <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500 ease-out">
                        <p className="text-sm font-semibold mb-1">{image.title}</p>
                        <p className="text-xs opacity-90">{image.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              <div className="swiper-button-prev-desktop absolute -left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
                <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next-desktop absolute -right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
                <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Swiper>
          </div>

          {/* Mobile Carousel - 1 image per view */}
          <div className="md:hidden mb-16">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              speed={800}
              navigation={{
                nextEl: '.swiper-button-next-mobile',
                prevEl: '.swiper-button-prev-mobile',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="relative"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group/image overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-64 object-cover rounded-2xl shadow-lg transition-all duration-700 ease-out group-hover/image:shadow-2xl group-hover/image:scale-105 object-[70%_20%] lg:object-[75%_25%]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-all duration-500 ease-out">
                      <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500 ease-out">
                        <p className="text-sm font-semibold mb-1">{image.title}</p>
                        <p className="text-xs opacity-90">{image.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              <div className="swiper-button-prev-mobile absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
                <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next-mobile absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
                <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Swiper>
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

          {/* Outsourced Management Section */}
          <section id="outsourced-management" className="py-16 mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {content.about.outsourcedManagement}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Outsourced corporate management services for SMEs that need specialized managerial skills without incurring high fixed costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.about.outsourcedManagementProjects?.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800 flex-1 leading-tight">{project.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Learn more
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Process Digitalization Section */}
          <section id="process-digitalization" className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {content.about.processDigitalization}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Optimization and digitalization of business processes to improve operational efficiency and market competitiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.about.digitalizationProjects?.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 leading-tight">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Business Efficiency Section */}
          <section id="business-efficiency" className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {content.about.businessEfficiency}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {content.about.businessEfficiencyDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 lg:mb-12">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-6">{content.about.mozambiqueProject.title}</h4>
                <p className="text-slate-700 leading-relaxed font-light mb-4">{content.about.mozambiqueProject.description}</p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">{content.about.mozambiqueProject.details}</p>
                <p className="text-slate-600 leading-relaxed font-light mb-6">{content.about.mozambiqueProject.impact}</p>
                
                <div className="flex flex-wrap gap-3">
                  {content.about.mozambiqueProject.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <img 
                  src="./lovable-uploads/e952218f-9df4-4ad8-a897-cbe669097655.png" 
                  alt="Sustainable Development Event"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-medium">{content.about.sustainableEvent.title}</p>
                    <p className="text-sm opacity-90">{content.about.sustainableEvent.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {content.about.businessEfficiencyProjects?.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800 flex-1 leading-tight">{project.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Learn more
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Public Policy Section */}
          <section id="policy" className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {content.about.publicPolicy}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {content.about.publicPolicyDescription}
              </p>
            </div>
            
            {/* Video Embeds */}
            <div className="mb-12 space-y-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/hLtzAH29ti8"
                    title="Il Partenariato Pubblico Privato in Trentino: Luca Bazzanella"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-slate-800">Il Partenariato Pubblico Privato in Trentino</h3>
                  <p className="text-slate-600">Luca Bazzanella</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.about.publicPolicyProjects?.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800 flex-1 leading-tight">{project.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
