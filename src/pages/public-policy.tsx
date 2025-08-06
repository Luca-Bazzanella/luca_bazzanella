
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Code, Database, Zap } from 'lucide-react';
import { GetStaticProps } from 'next';
import ScrollToTop from '@/hooks/ScrollToTop';
import { client } from '@/sanity/client';
import { footerQuery, navigationQuery, publicPolicyQuery } from '@/sanity/queries';
import Link from 'next/link';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';

type PublicPolicyProps = {
  content: any;
  locale: string;
};

const PublicPolicy = ({ content, locale }: PublicPolicyProps) => {
  const baseUrl = 'https://european-management-institute.github.io/luca_bazzanella';
  ScrollToTop();
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href={baseUrl}
              className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {content?.backToHome?.[locale] || content?.backToHome || 'Back to Home'}
            </a>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content?.heroTitle?.[locale] || content?.heroTitle || 'Public Policy'}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {content?.heroDescription?.[locale] || content?.heroDescription || ''}
              </p>
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section id="public-policy" className="py-16 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-slate-700 leading-relaxed mb-8">
                    {content?.description?.[locale] ?? content?.publicPolicy?.description ?? ''}
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {content?.publicPolicy?.learnMore?.[locale] ?? content?.learnMore?.backToHome ?? 'Learn More'}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div>
                  <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6">
                    <img
                      src={getSanityImageUrl(content?.images?.[0])}
                      alt={content?.publicPolicy?.images?.[0]?.alt || 'Public Policy'}
                      className="w-full h-full object-cover"
                    />
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
  const content = await client.fetch(publicPolicyQuery, { locale: usedLocale });
  const navigation = await client.fetch(navigationQuery, { locale: usedLocale });
  const footer = await client.fetch(footerQuery);
  return {
    props: {
      content,
      footer,
      locale: usedLocale,
      navigation
    },
  };
};

export default PublicPolicy;
