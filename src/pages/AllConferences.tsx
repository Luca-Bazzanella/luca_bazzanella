
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollToTop from '@/hooks/ScrollToTop';

const AllConferences = () => {
  const navigate = useNavigate();
  const { content } = useLanguage();
  ScrollToTop();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {content.allConferences.backToHome}
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content.allConferences.title}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content.allConferences.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Conferences */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 mt-12">{content.allConferences.featuredTitle}</h2>
            
            <Card className="glass-effect border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {content.allConferences.featuredConferences.map((conference, index) => (
                    <div key={index} className="border-b border-slate-200 last:border-b-0 pb-8 last:pb-0">
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                          <h3 className="text-lg font-serif font-semibold text-slate-900 mb-2">{conference.title}</h3>
                          <p className="text-blue-600 font-medium mb-3">{conference.subtitle}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
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
                              {conference.attendees}
                            </div>
                          </div>
                          
                          <p className="text-slate-700 text-sm leading-relaxed mb-4">{conference.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {conference.links.map((link, linkIndex) => (
                              <a 
                                key={linkIndex}
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
                        
                        <div className="lg:col-span-1">
                          {conference.videoId && (
                            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${conference.videoId}`}
                                title={conference.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              ></iframe>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Conferences Grid */}
        <section className="bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 mt-12">{content.allConferences.allTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.allConferences.allConferences.map((conference, index) => (
                <Card key={index} className="glass-effect hover-scale border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">{conference.title}</h3>
                        
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
                            {conference.attendees} {content.allConferences.attendees}
                          </div>
                        </div>
                        
                        <p className="text-slate-700 font-light leading-relaxed mb-4">{conference.topic}</p>
                        
                        {/* Links */}
                        <div className="flex flex-wrap gap-2">
                          {conference.link && (
                            <a 
                              href={conference.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              {content.allConferences.learnMore}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          )}
                          {conference.links && conference.links.map((link, linkIndex) => (
                            <a 
                              key={linkIndex}
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllConferences;
