
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ScrollToTop from '@/hooks/ScrollToTop';
import { GetStaticProps } from 'next';
import { client } from '@/sanity/client';
import { contactQuery, footerQuery, navigationQuery, outsourcedManagementQuery } from '@/sanity/queries';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';
import Link from 'next/link';

type OutsourcedManagementProps = {
  content: any;
  locale: string;
};
const OutsourcedManagement = ({ content, locale, contactForm }: OutsourcedManagementProps & { contactForm: any }) => {
  ScrollToTop();
// ...existing code...

  console.log(content)
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
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content?.title?.[locale] || content?.title || 'Outsourced Management'}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
                <div className="flex-1 flex items-start">
                  <p className="text-xl text-slate-700 leading-relaxed text-justify">
                    {content?.content?.intro?.[locale] || content?.intro || ''}
                  </p>
                </div>
                <div className="flex-1 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                  {getSanityImageUrl(content?.images?.[0]) ? (
                    <img
                      src={getSanityImageUrl(content?.images?.[0])}
                      alt={content?.images?.[0]?.alt || 'Outsourced Management'}
                      className="w-full"
                      style={{ width: '100%', objectFit: 'contain' }}
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
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const usedLocale = locale || 'it';
  const content = await client.fetch(outsourcedManagementQuery, { locale: usedLocale });
  const footer = await client.fetch(footerQuery);
  const navigation = await client.fetch(navigationQuery, { locale: usedLocale });
  const contactForm = await client.fetch(contactQuery);
  return {
    props: {
      content,
      footer,
      locale: usedLocale,
      navigation,
      contactForm
    },
  };
};

export default OutsourcedManagement;
