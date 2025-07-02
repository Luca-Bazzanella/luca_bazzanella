
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ConferencesSection = () => {
  const { content } = useLanguage();

  return (
    <section id="conferences" className="py-24 bg-gradient-to-br from-white to-slate-50">
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

        {/* Conference Photos Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/b1a73995-544a-4b73-bd74-b646ce643574.png" 
              alt="Smart City Conference"
              className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Smart City Conference</p>
                <p className="text-xs opacity-90">Conference presentation</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/87e71afe-46ae-4a4c-8838-97af8a8d9357.png" 
              alt="Mohammed Yunus Conference Brussels 2017"
              className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Mohammed Yunus Conference</p>
                <p className="text-xs opacity-90">Brussels 2017</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/3c48d014-5dac-4244-a390-2011f5f4917f.png" 
              alt="Business Presentation"
              className="w-full h-64 object-cover object-[50%_25%] rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Business Presentation</p>
                <p className="text-xs opacity-90">Corporate speaking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-8">
              {content.conferences.organizedTitle}
            </h3>
            
            <div className="space-y-8">
              {content.conferences.conferences.map((conference, index) => (
                <Card key={index} className="glass-effect hover-scale border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">{conference.title}</h4>
                        <p className="text-slate-600 font-light mb-4">{conference.topic}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
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

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-8">
                {content.conferences.topicsTitle}
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {content.conferences.topics.map((topic, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-50/50 rounded-lg">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mr-4"></div>
                    <span className="text-slate-700 font-light">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-semibold text-slate-900">
                  {content.conferences.requestTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-light mb-6 leading-relaxed">
                  {content.conferences.requestDescription}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-slate-700 mb-2">{content.conferences.availableFor}</p>
                </div>
                
                <Button 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Richiedi Intervento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Conference Photos */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/06797e83-b04d-4211-a8ef-13b5a23fa472.png" 
              alt="Business Conference"
              className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Business Conference</p>
                <p className="text-sm opacity-90">Panel discussion on public-private partnerships</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/0b83ced8-5fdd-4d8a-956e-211fbcb1e621.png" 
              alt="Virtual Conference"
              className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Virtual Conference</p>
                <p className="text-sm opacity-90">Online panel discussion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
