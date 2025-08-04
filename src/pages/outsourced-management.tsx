
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Users, TrendingUp, Target } from 'lucide-react';
import { GetStaticProps } from 'next';
import ScrollToTop from '@/hooks/ScrollToTop';
import { client } from '@/sanity/client';
import { navigationQuery, outsourcedManagementQuery } from '@/sanity/queries';

type OutsourcedManagementProps = {
  content: any;
  locale: string;
};

const OutsourcedManagement = ({ content, locale }: OutsourcedManagementProps) => {
  ScrollToTop();
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a 
              href="/"
              className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {content?.backToHome?.[locale] || content?.backToHome || 'Back to Home'}
            </a>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content?.title?.[locale] || content?.title || 'Outsourced Management'}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content?.heroDescription?.[locale] || content?.heroDescription || ''}
              </p>
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 text-left">{content?.managementExcellence?.[locale] || content?.managementExcellence || ''}</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {content?.content?.intro?.[locale] || content?.content?.intro || ''}
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {content?.content?.approach?.[locale] || content?.content?.approach || ''}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-blue-600">
                    <Target className="h-5 w-5 mr-2" />
                    <span className="font-medium">{content?.outcomeBasedSolutions?.[locale] || content?.outcomeBasedSolutions || ''}</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="font-medium">{content?.dataDrivenApproach?.[locale] || content?.dataDrivenApproach || ''}</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="font-medium">{content?.executiveTraining?.[locale] || content?.executiveTraining || ''}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">{content?.ourServices?.[locale] || content?.ourServices || ''}</h3>
                <div className="space-y-4">
                  {(content?.content?.services ?? [])?.map((service: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">{service.title?.[locale] || service.title || ''}</h4>
                  <p className="text-slate-600 text-sm">{service.description?.[locale] || service.description || ''}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Detailed Projects Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">{content?.keyProjectsAchievements?.[locale] || content?.keyProjectsAchievements || ''}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {(content?.projects ?? [])?.map((project: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                      <a href={project.link} 
                         target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:text-blue-700">
                        {project.title?.[locale] || project.title || ''}
                      </a>
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {project.description?.[locale] || project.description || ''}
                    </p>
                    <div className="text-sm text-slate-500 mb-2">
                      <strong>{content?.role?.[locale] || content?.role || 'Role'}:</strong> {project.role?.[locale] || project.role || ''}
                    </div>
                    <div className="text-sm text-slate-500">
                      <strong>{content?.impact?.[locale] || content?.impact || 'Impact'}:</strong> {project.impact?.[locale] || project.impact || ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Video Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">{content?.professionalInsights?.[locale] || content?.professionalInsights || ''}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hLtzAH29ti8"
                    title="Public-Private Partnership Discussion"
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
                    src="https://www.youtube.com/embed/1_0FOnf7V40"
                    title="European Funds Oversight Committee"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">{content?.readyToTransform?.[locale] || content?.readyToTransform || ''}</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {content?.readyToTransformDescription?.[locale] || content?.readyToTransformDescription || ''}
              </p>
              <a 
                href="https://www.europeanmanagement.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {content?.visitEMI?.[locale] || content?.visitEMI || ''}
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
  const content = await client.fetch(outsourcedManagementQuery, { locale: usedLocale });
  const navigation = await client.fetch(navigationQuery, { locale: usedLocale });
  return {
    props: {
      content,
      locale: usedLocale,
      navigation
    },
  };
};

export default OutsourcedManagement;
