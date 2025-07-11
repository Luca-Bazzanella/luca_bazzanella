
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';

const SocialMediaSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* LinkedIn Profile */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                {language === 'it' ? 'Profilo LinkedIn' : 'LinkedIn Profile'}
                <ExternalLink className="h-5 w-5" />
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6 border">
                  <h4 className="font-semibold text-slate-900 mb-4">
                    {language === 'it' ? 'Connettiti su LinkedIn' : 'Connect on LinkedIn'}
                  </h4>
                  <p className="text-slate-600 mb-4">
                    {language === 'it' 
                      ? 'Seguimi per aggiornamenti professionali, insights sul management e progetti di digitalizzazione.' 
                      : 'Follow me for professional updates, management insights, and digitalization projects.'}
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/luca-bazzanella-b08037b7/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {language === 'it' ? 'Visita Profilo LinkedIn' : 'Visit LinkedIn Profile'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                
                {/* LinkedIn Profile Card */}
                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                        LB
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Luca Bazzanella</h3>
                        <p className="text-slate-600 text-sm">Management Consultant & Sustainability Expert</p>
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm mb-4">
                      {language === 'it' 
                        ? 'Esperto in gestione aziendale, digitalizzazione e sostenibilità. Consulente per partnership pubblico-private e sviluppo di politiche europee.'
                        : 'Expert in business management, digitalization and sustainability. Consultant for public-private partnerships and European policy development.'}
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 text-center text-sm text-slate-600">
                    {language === 'it' 
                      ? 'Visita il profilo LinkedIn per vedere i post più recenti' 
                      : 'Visit LinkedIn profile to see the latest posts'}
                  </div>
                </div>
              </div>
            </div>

            {/* Twitter/X Profile */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                {language === 'it' ? 'Profilo X (Twitter)' : 'X (Twitter) Profile'}
                <ExternalLink className="h-5 w-5" />
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6 border">
                  <h4 className="font-semibold text-slate-900 mb-4">
                    {language === 'it' ? 'Seguimi su X' : 'Follow me on X'}
                  </h4>
                  <p className="text-slate-600 mb-4">
                    {language === 'it' 
                      ? 'Condivido riflessioni rapide su innovazione, sostenibilità e management.' 
                      : 'I share quick thoughts on innovation, sustainability, and management.'}
                  </p>
                  <a 
                    href="https://x.com/LucaBazzanella" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {language === 'it' ? 'Visita Profilo X' : 'Visit X Profile'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* X Profile Card */}
                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                        X
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">@LucaBazzanella</h3>
                        <p className="text-slate-600 text-sm">Management & Sustainability</p>
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm mb-4">
                      {language === 'it' 
                        ? 'Tweets su innovazione, sostenibilità, digitalizzazione e partnership strategiche.'
                        : 'Tweets about innovation, sustainability, digitalization and strategic partnerships.'}
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 text-center text-sm text-slate-600">
                    {language === 'it' 
                      ? 'Visita il profilo X per vedere i tweet più recenti' 
                      : 'Visit X profile to see the latest tweets'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
