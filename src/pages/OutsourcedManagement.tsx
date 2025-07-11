import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Users, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const OutsourcedManagement = () => {
  const { content } = useLanguage();
  const baseUrl = 'https://european-management-institute.github.io/luca_bazzanella';

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
              Back to Home
            </a>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content.outsourcedManagement.title}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content.outsourcedManagement.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 text-left">Management Excellence</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {content.outsourcedManagement.content.intro}
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {content.outsourcedManagement.content.approach}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-blue-600">
                    <Target className="h-5 w-5 mr-2" />
                    <span className="font-medium">Outcome-based solutions</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="font-medium">Data-driven approach</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="font-medium">Executive training</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">Our Services</h3>
                <div className="space-y-4">
                  {content.outsourcedManagement.content.services.map((service, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">European Policy Monitoring</h4>
                    <p className="text-slate-600 text-sm">As Head of Europe Office, led comprehensive monitoring of European policies and provided strategic support to SMEs in understanding legislative impact. Focused on public procurement, funding opportunities, and regulatory compliance for small and medium enterprises.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">In Action</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${content.outsourcedManagement.videoId}`}
                    title="Outsourced Management Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hLtzAH29ti8"
                    title="European Policy Monitoring"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">Case Studies</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {content.outsourcedManagement.content.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{caseStudy.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {caseStudy.description}
                    </p>
                    <a 
                      href={caseStudy.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn more
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how our outsourced management solutions can help your organization achieve its goals.
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

export default OutsourcedManagement;
