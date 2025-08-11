
import { ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
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
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
                {content?.title?.[locale] || content?.title || 'Outsourced Management'}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
                <div className="flex-1 flex items-start justify-left">
                  <div className="max-w-3xl w-full ml-0">
                    <p className="text-xl text-slate-700 leading-relaxed text-justify text-left">
                      {content?.content?.intro?.[locale] || content?.intro || ''}
                    </p>
                    <div className="mt-8 text-left">
                      <ContactForm locale={locale} buttonLabel="click here" formStrings={contactForm} className="w-full text-left" />
                    </div>
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
