
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Leaf, Target, Globe, Zap } from 'lucide-react';
import { GetStaticProps } from 'next';
import ScrollToTop from '@/hooks/ScrollToTop';
import { client } from '@/sanity/client';
import { navigationQuery, socialImpactQuery } from '@/sanity/queries';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';
import Link from 'next/link';


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
              {content?.backToHome?.[locale] || content?.backToHome || 'Back to Home'}
            </a>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content?.title?.[locale] || content?.title || 'Social Impact'}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content?.heroDescription?.[locale] || content?.heroDescription || ''}
              </p>
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section id="social-impact" className="py-16 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-slate-700 leading-relaxed mb-8">
                    {content?.impact?.[locale] || ''}
                  </p>
                  <div>
                    <Link
                      href="/social-impact"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      {content?.learnMore?.[locale] || 'Learn More'}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-8 flex items-center justify-center">
                    {getSanityImageUrl(content?.images?.[0]) ? (
                      <img
                        src={getSanityImageUrl(content?.images?.[0])}
                        alt={content?.images?.[0]?.alt || 'Social Impact'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-slate-400 text-center py-12">No image available</div>
                    )}
                  </div>
                </div>
              </div>
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
  let footer;
  try {
    content = await client.fetch(socialImpactQuery, { locale: usedLocale });
    navigation = await client.fetch(navigationQuery, { locale: usedLocale });
    footer = await client.fetch('*[_type == "footer"][0]');
  } catch (e) {
    content = {};
  }
  return {
    props: {
      content: content || {},
      locale: usedLocale,
      navigation,
      footer
    },
  };
};

export default SocialImpact;
