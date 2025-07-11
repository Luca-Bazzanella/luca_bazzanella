
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Code, Database, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const Digitalization = () => {
  const navigate = useNavigate();
  const { content } = useLanguage();

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
              Back to Home
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content.digitalization.title}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content.digitalization.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 text-left">Digital Innovation</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {content.digitalization.content.intro}
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {content.digitalization.content.approach}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-blue-600">
                      <Code className="h-5 w-5 mr-2" />
                      <span className="font-medium">Process Automation</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Database className="h-5 w-5 mr-2" />
                      <span className="font-medium">Data Integration</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Zap className="h-5 w-5 mr-2" />
                      <span className="font-medium">Digital Transformation</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">Our Services</h3>
                  <div className="space-y-4">
                    {content.digitalization.content.services.map((service, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                        <p className="text-slate-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">Key Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {content.digitalization.content.projects.map((project, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Learn more
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Digitalize Your Business?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how our digitalization solutions can transform your organization's processes and efficiency.
              </p>
              <a 
                href="https://www.europeanmanagement.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Visit European Management Institute
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Digitalization;
