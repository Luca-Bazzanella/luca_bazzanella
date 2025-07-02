
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ManagementSection = () => {
  const { content } = useLanguage();

  const iconMap = [Target, TrendingUp, Users, Lightbulb];

  return (
    <section id="management" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 text-balance">
            {content.management.title} <span className="text-gradient">{content.management.subtitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luca-blue-600 to-luca-earth-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-light leading-relaxed text-balance">
            {content.management.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {content.management.services.map((service, index) => {
            const IconComponent = iconMap[index];
            return (
              <Card key={index} className="glass-effect hover-scale border-0 shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-luca-blue-600 to-luca-earth-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif font-semibold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 text-center leading-relaxed font-light">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ferrari Conference Photo */}
        <div className="mb-20">
          <div className="relative group">
            <img 
              src="/luca_bazzanella/lovable-uploads/2eb21475-ef8c-4054-ab76-420edc702a76.png" 
              alt="PNRR Conference at Ferrari Wineries"
              className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">{content.management.ferrariConference.title}</p>
                <p className="text-sm opacity-90">{content.management.ferrariConference.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Positions Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-8">
              {content.management.currentPositions}
            </h3>
            
            {content.management.positions.map((position, index) => (
              <Card key={index} className="glass-effect border-0 shadow-lg mb-6">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">{position.title}</h4>
                  <p className="text-slate-700 leading-relaxed font-light mb-4">{position.description}</p>
                  {position.additionalInfo && (
                    <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">{position.additionalInfo}</p>
                  )}
                  {position.links && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {position.links.map((link, linkIndex) => (
                        <a 
                          key={linkIndex}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-luca-blue-600 hover:text-luca-blue-700 text-sm font-medium"
                        >
                          {link.name}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            {/* Presentation Slide */}
            <div className="relative group">
              <img 
                src="/luca_bazzanella/lovable-uploads/8753dece-6e38-48a2-bd4a-63e561d3b76d.png" 
                alt="Training Module Presentation"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{content.management.trainingModule.title}</p>
                  <p className="text-xs opacity-90">{content.management.trainingModule.subtitle}</p>
                </div>
              </div>
            </div>

            {/* PPP Advantages Diagram */}
            <div className="relative group">
              <img 
                src="/luca_bazzanella/lovable-uploads/b110177f-ef62-4148-98d1-7abe0ca70cea.png" 
                alt="PPP Advantages Analysis"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{content.management.pppAdvantages.title}</p>
                  <p className="text-xs opacity-90">{content.management.pppAdvantages.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Training Projects */}
        <Card className="glass-effect border-0 shadow-2xl mb-20">
          <div className="p-12">
            <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-8 text-center">
              {content.management.executiveTraining}
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-6">{content.management.mozambiqueProject.title}</h4>
                <p className="text-slate-700 leading-relaxed font-light mb-4">{content.management.mozambiqueProject.description}</p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">{content.management.mozambiqueProject.details}</p>
                <p className="text-slate-600 leading-relaxed font-light mb-6">{content.management.mozambiqueProject.impact}</p>
                
                <div className="flex flex-wrap gap-3">
                  {content.management.mozambiqueProject.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-luca-blue-600 hover:text-luca-blue-700 text-sm font-medium"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <img 
                  src="/luca_bazzanella/lovable-uploads/e952218f-9df4-4ad8-a897-cbe669097655.png" 
                  alt="Sustainable Development Event"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-medium">{content.management.sustainableEvent.title}</p>
                    <p className="text-sm opacity-90">{content.management.sustainableEvent.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Training Programs */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">{content.management.constructionAutomation.title}</h4>
                  <p className="text-slate-700 leading-relaxed font-light mb-4">{content.management.constructionAutomation.description}</p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {content.management.constructionAutomation.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-luca-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">{content.management.decarbonization.title}</h4>
                  <p className="text-slate-700 leading-relaxed font-light mb-4">{content.management.decarbonization.description}</p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {content.management.decarbonization.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-luca-earth-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Card>

        {/* Recent Projects */}
        <Card className="glass-effect border-0 shadow-2xl">
          <div className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-8">
                  {content.management.recentProjects}
                </h3>
                <div className="space-y-6">
                  {content.management.projects.map((project, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start mb-2">
                            <div className="w-2 h-2 bg-luca-blue-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1">{project.title}</h4>
                              <p className="text-slate-600 font-light text-sm mb-2">{project.description}</p>
                              <span className="text-xs text-luca-blue-600 font-medium">{project.year}</span>
                            </div>
                          </div>
                        </div>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-4 text-luca-blue-600 hover:text-luca-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="/luca_bazzanella/lovable-uploads/23c7b670-139e-412c-a1d4-9e6a3bc94767.png"
                  alt="International development project"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ManagementSection;
