
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { GetStaticProps } from 'next';
import ScrollToTop from '@/hooks/ScrollToTop';
import { client } from '@/sanity/client';
import { contactQuery, footerQuery, navigationQuery, publicPolicyQuery } from '@/sanity/queries';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';
import ContactForm from '@/components/ContactForm';
type PublicPolicyProps = {
  content: any;
  locale: string;
  navigation: any;
  footer: any;
  contactForm: any;
};

const PublicPolicy = ({ content, locale, navigation, footer, contactForm }: PublicPolicyProps) => {
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
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content?.heroTitle?.[locale] || content?.heroTitle || 'Public Policy'}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
                <div className="flex-1 flex items-start">
                  <p className="text-xl text-slate-700 leading-relaxed text-justify">
                    {content?.heroDescription?.[locale] || content?.heroDescription || ''}
                  </p>
                </div>
                <div className="flex-1 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                  {getSanityImageUrl(content?.images?.[0]) ? (
                    <img
                      src={getSanityImageUrl(content?.images?.[0])}
                      alt={content?.images?.[0]?.alt || 'Public Policy'}
                      className="w-full"
                      style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="text-slate-400 text-center py-12">No image available</div>
                  )}
                </div>
              </div>
              {/* Contact form block */}
              <ContactForm locale={locale} buttonLabel="click here" formStrings={contactForm} />
            </div>
          </div>
        </section>
      </main>
  <Footer content={footer} locale={locale} />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const usedLocale = locale || 'it';
  const content = await client.fetch(publicPolicyQuery, { locale: usedLocale });
  const navigation = await client.fetch(navigationQuery, { locale: usedLocale });
  const footer = await client.fetch(footerQuery);
  const contactForm = await client.fetch(contactQuery, { locale: usedLocale });
  return {
    props: {
      content,
      navigation,
      footer,
      locale: usedLocale,
      contactForm
    },
  };
};

export default PublicPolicy;
