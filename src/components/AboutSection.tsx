import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 text-balance">
            {content.about.title} <span className="text-gradient">{content.about.name}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                {content.about.description1}
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                {content.about.description2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-700 mb-2">8+</div>
                <div className="text-slate-600 font-medium">{content.about.stats.experience}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-700 mb-2">100+</div>
                <div className="text-slate-600 font-medium">{content.about.stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-700 mb-2">30+</div>
                <div className="text-slate-600 font-medium">{content.about.stats.conferences}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-700 mb-2">5+</div>
                <div className="text-slate-600 font-medium">{content.about.stats.countries}</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="glass-effect hover-scale border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">{content.about.currentRoles}</h3>
                <ul className="space-y-4 text-slate-700">
                  {content.about.roles.map((role, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-slate-700 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span className="font-light leading-relaxed">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-scale border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">{content.about.skills}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {content.about.skillsList.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-50/50 rounded-lg">
                      <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                      <span className="text-slate-700 font-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {content.about.externalLinks && (
              <Card className="glass-effect hover-scale border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Collegamenti Esterni</h3>
                  <div className="space-y-4">
                    {content.about.externalLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-100/50 rounded-lg transition-colors group"
                      >
                        <span className="text-slate-700 font-medium">{link.name}</span>
                        <ExternalLink className="h-4 w-4 text-slate-700 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Professional Photos Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/eb2e8793-572c-4b65-a042-7a8f863f0165.png" 
              alt="Venice Film Festival Event"
              className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">{content.about.imageDescriptions.veniceFilmFestival.title}</p>
                <p className="text-xs opacity-90">{content.about.imageDescriptions.veniceFilmFestival.subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/97abf5a8-c17f-4bd6-bc05-8bfeb2c3962f.png" 
              alt="Professional Portrait"
              className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow object-[50%_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">{content.about.imageDescriptions.professionalPortrait.title}</p>
                <p className="text-xs opacity-90">{content.about.imageDescriptions.professionalPortrait.subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/efd483a6-8573-4ab1-a16a-dc8e325e3ee1.png" 
              alt="Business Networking"
              className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">{content.about.imageDescriptions.businessNetworking.title}</p>
                <p className="text-xs opacity-90">{content.about.imageDescriptions.businessNetworking.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* European Parliament and Official Photos */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/0ff9547c-a290-4d02-9230-b56db457a5da.png" 
              alt="European Parliament"
              className="w-full h-80 object-cover object-[50%_25%] rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">{content.about.imageDescriptions.europeanParliament.title}</p>
                <p className="text-sm opacity-90">{content.about.imageDescriptions.europeanParliament.subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/3932719d-5527-45ed-b9a5-fa4418b6e9a3.png" 
              alt="High-level Meeting"
              className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">{content.about.imageDescriptions.institutionalMeeting.title}</p>
                <p className="text-sm opacity-90">{content.about.imageDescriptions.institutionalMeeting.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
