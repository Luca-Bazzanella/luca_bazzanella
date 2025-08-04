
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Leaf, Target, Globe, Zap } from 'lucide-react';
import { GetStaticProps } from 'next';
import ScrollToTop from '@/hooks/ScrollToTop';
import { client } from '@/sanity/client';
import { navigationQuery, socialImpactQuery } from '@/sanity/queries';


type SocialImpactProps = {
  content: any;
  locale: string;
};

const SocialImpact = ({ content, locale }: SocialImpactProps) => {
  const baseUrl = 'https://european-management-institute.github.io/luca_bazzanella';
  ScrollToTop();
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a 
              href={baseUrl}
              className="flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {content?.socialImpact?.backToHome?.[locale] || content?.socialImpact?.backToHome || 'Back to Home'}
            </a>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content?.socialImpact?.title?.[locale] || content?.socialImpact?.title || 'Social Impact'}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content?.socialImpact?.heroDescription?.[locale] || content?.socialImpact?.heroDescription || ''}
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
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 text-left">{content?.socialImpact?.ourImpact?.[locale] || content?.socialImpact?.ourImpact || ''}</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {content?.socialImpact?.impact?.[locale] || content?.socialImpact?.impact || ''}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-green-600">
                      <Leaf className="h-5 w-5 mr-2" />
                      <span className="font-medium">{content?.socialImpact?.environmentalSustainability?.[locale] || content?.socialImpact?.environmentalSustainability || ''}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <Globe className="h-5 w-5 mr-2" />
                      <span className="font-medium">{content?.socialImpact?.internationalProjects?.[locale] || content?.socialImpact?.internationalProjects || ''}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <Target className="h-5 w-5 mr-2" />
                      <span className="font-medium">{content?.socialImpact?.communityDevelopment?.[locale] || content?.socialImpact?.communityDevelopment || ''}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">{content?.socialImpact?.organizations?.[locale] || content?.socialImpact?.organizations || ''}</h3>
                  <div className="space-y-4">
                    {(content?.socialImpact?.organizationsList ?? []).map((org: any, index: number) => (
                      <div key={index} className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{org.title?.[locale] || org.title || ''}</h4>
                    <p className="text-slate-600 text-sm">{org.description?.[locale] || org.description || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Key Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">{content?.socialImpact?.keyProjectsTitle?.[locale] || content?.socialImpact?.keyProjectsTitle || ''}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {(content?.socialImpact?.projects ?? []).map((project: any, index: number) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-green-100 rounded-lg mr-3 flex-shrink-0">
                        {index % 4 === 0 && <Leaf className="h-4 w-4 text-green-600" />}
                        {index % 4 === 1 && <Target className="h-4 w-4 text-green-600" />}
                        {index % 4 === 2 && <Globe className="h-4 w-4 text-green-600" />}
                        {index % 4 === 3 && <Zap className="h-4 w-4 text-green-600" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title?.[locale] || project.title || ''}</h4>
                        <p className="text-sm text-green-600 font-medium mb-2">{project.role?.[locale] || project.role || ''}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                    {project.description?.[locale] || project.description || ''}
                    </p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
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
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">{content?.socialImpact?.joinOurMission?.[locale] || content?.socialImpact?.joinOurMission || ''}</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                {content?.socialImpact?.joinOurMissionDescription?.[locale] || content?.socialImpact?.joinOurMissionDescription || ''}
              </p>
              <a 
                href="https://www.sustainableeconomy.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 font-medium px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                {content?.socialImpact?.visitSEA?.[locale] || content?.socialImpact?.visitSEA || ''}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const usedLocale = locale || 'it';
  let content;
  let navigation;
  try {
    content = await client.fetch(socialImpactQuery, { locale: usedLocale });
    navigation = await client.fetch(navigationQuery, { locale: usedLocale });
  } catch (e) {
    content = {};
  }
  return {
    props: {
      content: content || {},
      locale: usedLocale,
      navigation
    },
  };
};

export default SocialImpact;
