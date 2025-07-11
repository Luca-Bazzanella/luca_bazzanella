
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalizationSection = () => {
  const { content } = useLanguage();

  return (
    <section id="digitalization" className="py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-4xl sm:text-3xl sm:text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content.digitalization.title}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 leading-relaxed mb-8">
                {content.digitalization.content.intro}
              </p>
              
              <div className="space-y-4 mb-8">
                {content.digitalization.content.projects.slice(0, 3).map((project, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{project.title}</h4>
                    <p className="text-slate-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/digitalization" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn more about digitalization
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h3>
              <div className="space-y-4 mb-8">
                {content.digitalization.content.services.map((service, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nVIz903jFKY"
                  title="Digital Innovation"
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

export default DigitalizationSection;
