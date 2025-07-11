
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const ConferencesSection = () => {
  const { content } = useLanguage();

  // Sort conferences to prioritize those with videos
  const sortedConferences = [...content.conferences.featuredConferences].sort((a, b) => {
    if (a.videoId && !b.videoId) return -1;
    if (!a.videoId && b.videoId) return 1;
    return 0;
  });

  return (
    <section id="conferences" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-4xl sm:text-3xl sm:text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content.conferences.title} <span className="text-gradient">{content.conferences.subtitle}</span>
          </h3>
        </div>

        <Card className="glass-effect hover-scale border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-8">
              {sortedConferences.map((conference, index) => (
                <div key={index} className="border-b border-slate-200 last:border-b-0 pb-8 last:pb-0">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-serif font-semibold text-slate-900 mb-2">{conference.title}</h4>
                          <p className="text-blue-600 font-medium mb-3">{conference.subtitle}</p>
                          {conference.location && (
                            <p className="text-slate-600 text-sm mb-3">{conference.location}</p>
                          )}
                          
                          {/* Add conference descriptions */}
                          <div className="text-slate-700 text-sm mb-4 leading-relaxed">
                            {conference.title.toLowerCase().includes('electric') && (
                              <p>Conference exploring sustainable urban mobility solutions, comparing different electric transportation initiatives and their environmental impact on city development.</p>
                            )}
                            {conference.title.toLowerCase().includes('railway') && (
                              <p>Analysis of sustainable railway transport systems in mountainous regions, examining the potential for eco-friendly tourism and regional connectivity through the Dolomites train project.</p>
                            )}
                            {conference.title.toLowerCase().includes('green is not left') && (
                              <p>European Parliament press conference addressing environmental policies from a cross-party perspective, challenging political stereotypes in sustainability discourse.</p>
                            )}
                            {conference.title.toLowerCase().includes('futuro della mobilità') && (
                              <p>International conference at MUSE examining the future of sustainable mobility in Trentino, featuring expert presentations on innovative transportation solutions.</p>
                            )}
                            {conference.title.toLowerCase().includes('partenariato') && (
                              <p>Discussion on public-private partnerships as a strategic tool for sustainable development in Trentino, exploring collaboration models between institutions and businesses.</p>
                            )}
                          </div>
                          
                          {conference.links && conference.links.length > 0 && (
                            <div className="flex flex-wrap gap-4">
                              {conference.links.map((link, linkIndex) => (
                                <a 
                                  key={linkIndex}
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                                >
                                  {link.name}
                                  <ExternalLink className="h-4 w-4 ml-1" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
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
        
        <div className="text-center pt-6">
          <Link 
            to={content.conferences.allConferencesLink}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            View All Conferences
            <ExternalLink className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
