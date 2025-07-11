
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const OutsourcedManagementSection = () => {
  const { content } = useLanguage();

  return (
    <section id="outsourced-management" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-4xl sm:text-3xl sm:text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content.outsourcedManagement.title}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 leading-relaxed mb-8">
                {content.outsourcedManagement.content.intro}
              </p>
              
              <div className="space-y-4 mb-8">
                {content.outsourcedManagement.content.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{project.title}</h4>
                    <p className="text-slate-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/outsourced-management" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {content.outsourcedManagement.learnMore}
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{content.outsourcedManagement.inAction}</h3>
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/1_0FOnf7V40"
                  title="Commissione di Vigilanza FESR / FSE Confcommercio Trentino"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {content.outsourcedManagement.videoDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcedManagementSection;
