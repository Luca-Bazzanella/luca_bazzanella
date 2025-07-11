
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Target, Globe, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const SustainabilitySection = () => {
  const { content } = useLanguage();

  // Take only the first 4 projects
  const featuredProjects = content.sustainability.keyProjects.slice(0, 4);

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-4xl sm:text-3xl sm:text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content.sustainability.title}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">{content.sustainability.keyProjectsTitle}</h3>
              <div className="space-y-4 mb-8">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-4">
                    <div className="flex items-start mb-2">
                      <div className="p-2 bg-green-100 rounded-lg mr-3 flex-shrink-0">
                        {index % 4 === 0 && <Leaf className="h-4 w-4 text-green-600" />}
                        {index % 4 === 1 && <Target className="h-4 w-4 text-green-600" />}
                        {index % 4 === 2 && <Globe className="h-4 w-4 text-green-600" />}
                        {index % 4 === 3 && <Zap className="h-4 w-4 text-green-600" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">{project.title}</h4>
                        <p className="text-xs text-green-600 font-medium mb-2">{project.role}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
              <div>
                <Link 
                  to="/sustainability" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  {content.sustainability.learnMore}
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">{content.sustainability.sustainabilityFocus}</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                {content.sustainability.sustainabilityDescription}
              </p>
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-8">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/WTpy8q6fPdQ"
                  title="Sustainable Mobility in Trentino"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
