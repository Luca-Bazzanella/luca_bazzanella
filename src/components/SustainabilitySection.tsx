
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Globe, Recycle, Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const SustainabilitySection = () => {
  const { content } = useLanguage();

  const iconMap = [Leaf, Globe, Recycle, Heart];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-luca-earth-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
            {content.sustainability.title} <span className="text-gradient">{content.sustainability.subtitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luca-blue-600 to-luca-earth-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {content.sustainability.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {content.sustainability.initiatives.map((initiative, index) => {
            const IconComponent = iconMap[index];
            return (
              <Card key={index} className="hover-scale bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-luca-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                {content.sustainability.approachTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {content.sustainability.approachDescription}
              </p>
              
              <div className="space-y-4">
                {content.sustainability.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">{project.title}</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-luca-earth-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                <div className="text-gray-600 text-sm">{content.sustainability.stats.commitment}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-luca-blue-50 to-green-50 rounded-lg">
                <div className="text-3xl font-bold text-luca-blue-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">{content.sustainability.stats.projects}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-luca-earth-50 to-luca-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-luca-earth-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">{content.sustainability.stats.organizations}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
