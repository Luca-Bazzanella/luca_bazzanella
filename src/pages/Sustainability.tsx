import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Leaf, Target, Globe, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Sustainability = () => {
  const { content } = useLanguage();
  const baseUrl = 'https://european-management-institute.github.io/luca_bazzanella';

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a 
              href={baseUrl}
              className="flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content.sustainability.title}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content.sustainability.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 text-left">Environmental Innovation</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Leading initiatives in environmental sustainability, circular economy and technological innovation for decarbonization. Focused on international projects with particular emphasis on North Africa and development cooperation.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Our approach combines strategic planning with practical implementation, fostering sustainable development through innovative technologies and cross-sector partnerships.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-green-600">
                    <Leaf className="h-5 w-5 mr-2" />
                    <span className="font-medium">Circular Economy</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Target className="h-5 w-5 mr-2" />
                    <span className="font-medium">Decarbonization</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Globe className="h-5 w-5 mr-2" />
                    <span className="font-medium">International Projects</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">Key Initiatives</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Sustainable Economy Association</h4>
                    <p className="text-slate-600 text-sm">President since 2016, leading international projects and advocacy for sustainable technologies.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Green Energy Innovation Hub</h4>
                    <p className="text-slate-600 text-sm">Co-designing energy innovation solutions in collaboration with Siram-Veolia SPA and Trentino Sviluppo.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Ship 24 Green & Carbontrack</h4>
                    <p className="text-slate-600 text-sm">Digital projects for measuring and reducing environmental impact in international logistics.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Sustainable Mobility Infrastructure</h4>
                    <p className="text-slate-600 text-sm">Development of sustainability plans for transportation projects including Rovereto-Folgaria cable car.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">Sustainability in Action</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
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
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/cfM3aVlyXCY"
                    title="Green is not Left - European Parliament"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">Featured Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Green Desert Project</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Local development project focused on sustainable practices in arid regions, implementing innovative water management and renewable energy solutions.
                  </p>
                  <a 
                    href="https://www.sustainableeconomy.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn more
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Shams Al Atlas - Morocco</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    International development project in Morocco focusing on sustainable energy solutions and local capacity building in renewable technologies.
                  </p>
                  <a 
                    href="https://www.sustainableeconomy.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn more
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Build a Sustainable Future?</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how our sustainability initiatives can support your organization's environmental goals.
              </p>
              <a 
                href="https://www.sustainableeconomy.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 font-medium px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Visit Sustainable Economy Association
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

export default Sustainability;
