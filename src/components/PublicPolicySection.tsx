
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const PublicPolicySection = () => {
  const { content } = useLanguage();

  return (
    <section id="public-policy" className="py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content.publicPolicy.title}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 leading-relaxed mb-8">
                {content.publicPolicy.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {content.publicPolicy.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{project.title}</h4>
                    <p className="text-slate-600 text-sm mb-2">{project.description}</p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        {content.publicPolicy.learnMore}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              <Link 
                to="/public-policy" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {content.publicPolicy.learnMore}
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div>
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6">
                <img
                  src="./lovable-uploads/0b83ced8-5fdd-4d8a-956e-211fbcb1e621.png"
                  alt="Public policy digital solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicPolicySection;
