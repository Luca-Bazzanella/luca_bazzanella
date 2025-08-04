
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ConferencesSection = ({ content, locale }) => {
  // Sort conferences to prioritize those with videos
  const sortedConferences = [...(content?.featuredConferences ?? [])].sort((a, b) => {
    if (a.videoId && !b.videoId) return -1;
    if (!a.videoId && b.videoId) return 1;
    return 0;
  });

  return (
    <section id="conferences" className="py-12 md:py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content?.title?.[locale] || content?.title || 'Conferences'} <span className="text-gradient">{content?.subtitle?.[locale] || content?.subtitle || ''}</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="glass-effect hover-scale border-0 shadow-lg">
              <CardContent className="p-4 md:p-8">
                <div className="space-y-6 md:space-y-8">
                  {sortedConferences.map((conference, index) => (
                    <div key={index} className="border-b border-slate-200 last:border-b-0 pb-6 md:pb-8 last:pb-0">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg md:text-xl font-serif font-semibold text-slate-900 mb-2">{conference.title?.[locale] || conference.title || ''}</h4>
                          <p className="text-blue-600 font-medium mb-3">{conference.subtitle?.[locale] || conference.subtitle || ''}</p>
                          {conference.location && (
                            <p className="text-slate-600 text-sm mb-3">{conference.location?.[locale] || conference.location || ''}</p>
                          )}
                          
                          {conference.description && (
                            <div className="text-slate-700 text-sm mb-4 leading-relaxed">
                              <p>{conference.description?.[locale] || conference.description || ''}</p>
                            </div>
                          )}
                          
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
                  ))}
                </div>
                <Link 
                  href="/all-conferences"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {content?.viewAllText?.[locale] || 'View All'}
                  <ExternalLink className="h-5 w-5 ml-2" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
             <h4 className="text-lg md:text-xl font-serif font-semibold text-slate-900 mb-4">Follow Linkedin</h4>
            <div className="elfsight-app-4ffbb871-1dff-4847-a403-65d32a1735db" data-elfsight-app-lazy></div>
            <h4 className="text-lg md:text-xl font-serif font-semibold text-slate-900 mb-4">Follow X</h4>
            <div className="elfsight-app-603e351f-a287-44ac-8830-ece59d855b5b" data-elfsight-app-lazy></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
