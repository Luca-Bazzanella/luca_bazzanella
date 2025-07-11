
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Code, Database, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollToTop from '@/hooks/ScrollToTop';

const PublicPolicy = () => {
  const { content } = useLanguage();
  const baseUrl = 'https://european-management-institute.github.io/luca_bazzanella';
  ScrollToTop();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a 
              href={baseUrl}
              className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {content.publicPolicy.backToHome}
            </a>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content.publicPolicy.heroTitle}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content.publicPolicy.heroDescription}
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
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 text-left">{content.publicPolicy.policyInnovation}</h3>
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
              </div>
            </div>

            {/* Key Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">{content.publicPolicy.keyProjects}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {content.publicPolicy.projects.map((project, index) => (
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
                        {content.publicPolicy.learnMore}
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">{content.publicPolicy.readyToTransform}</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {content.publicPolicy.readyToTransformDescription}
              </p>
              <a 
                href="https://www.europeanmanagement.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {content.publicPolicy.visitEMI}
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

export default PublicPolicy;
