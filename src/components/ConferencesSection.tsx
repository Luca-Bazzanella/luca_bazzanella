
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ConferencesSection = () => {
  const { content } = useLanguage();

  const conferenceImages = [
    {
      src: content.conferences.images.smartCity,
      alt: "Smart City Conference",
      title: "Smart City Conference",
      subtitle: "Conference presentation"
    },
    {
      src: content.conferences.images.yunus,
      alt: "Mohammed Yunus Conference Brussels 2017",
      title: "Mohammed Yunus Conference",
      subtitle: "Brussels 2017"
    },
    {
      src: content.conferences.images.businessPresentation,
      alt: "Business Presentation",
      title: "Business Presentation",
      subtitle: "Corporate speaking"
    },
    {
      src: content.conferences.images.businessConference,
      alt: "Business Conference",
      title: "Business Conference",
      subtitle: "Panel discussion on public-private partnerships"
    },
    {
      src: content.conferences.images.virtualConference,
      alt: "Virtual Conference",
      title: "Virtual Conference",
      subtitle: "Online panel discussion"
    }
  ];

  return (
    <section id="conferences" className="py-8 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 text-balance">
            {content.conferences.title} <span className="text-gradient">{content.conferences.subtitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-light leading-relaxed text-balance">
            {content.conferences.description}
          </p>
        </div>

        {/* Desktop Carousel - 3 images per view */}
        <div className="hidden md:block mb-20">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={3}
            speed={800}
            navigation={{
              nextEl: '.swiper-button-next-desktop-conf',
              prevEl: '.swiper-button-prev-desktop-conf',
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
            {conferenceImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative group/image overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg transition-all duration-700 ease-out group-hover/image:shadow-2xl group-hover/image:scale-105"
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
            
            <div className="swiper-button-prev-desktop-conf absolute -left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-desktop-conf absolute -right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Swiper>
        </div>

        {/* Mobile Carousel - 1 image per view */}
        <div className="md:hidden mb-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            speed={800}
            navigation={{
              nextEl: '.swiper-button-next-mobile-conf',
              prevEl: '.swiper-button-prev-mobile-conf',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="relative"
          >
            {conferenceImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative group/image overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg transition-all duration-700 ease-out group-hover/image:shadow-2xl group-hover/image:scale-105"
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
            
            <div className="swiper-button-prev-mobile-conf absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-mobile-conf absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ease-out hover:scale-110">
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Swiper>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.conferences.conferences.map((conference, index) => (
            <Card key={index} className="glass-effect hover-scale border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-semibold text-slate-900 mb-3">{conference.title}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                        {conference.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                        {conference.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-slate-500" />
                        {conference.attendees} partecipanti
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-slate-700 font-light leading-relaxed">{conference.topic}</p>
                      {conference.speakers && (
                        <p className="text-slate-600 font-light leading-relaxed text-sm">{conference.speakers}</p>
                      )}
                    </div>
                  </div>
                  
                  {conference.link && (
                    <a 
                      href={conference.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
