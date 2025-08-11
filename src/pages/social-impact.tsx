
import { ArrowLeft } from 'lucide-react';
import { GetStaticProps } from 'next';
import { client } from '@/sanity/client';
import { contactQuery, navigationQuery, socialImpactQuery } from '@/sanity/queries';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';
import ContactForm from '@/components/ContactForm';


type SocialImpactProps = {
  content: any;
  locale: string;
  navigation: any;
  footer: any;
  contactForm: any;
};

const SocialImpact = ({ content, locale, navigation, footer, contactForm }: SocialImpactProps) => {
  const baseUrl = 'https://european-management-institute.github.io/luca_bazzanella';
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
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                {content?.title?.[locale] || content?.title || 'Social Impact'}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
                <div className="flex-1 flex items-start justify-left">
                  <div className="max-w-3xl w-full ml-0">
                    <p className="text-xl text-slate-700 leading-relaxed text-justify text-left">
                      {content?.heroDescription?.[locale] || content?.heroDescription || ''}
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
  let content;
  let navigation;
  let footer;
  let contactForm;
  try {
    content = await client.fetch(socialImpactQuery, { locale: usedLocale });
    navigation = await client.fetch(navigationQuery, { locale: usedLocale });
    footer = await client.fetch('*[_type == "footer"][0]');
    contactForm = await client.fetch(contactQuery, { locale: usedLocale });
    
  } catch (e) {
    content = {};
  }
  return {
    props: {
      content: content || {},
      locale: usedLocale,
      navigation,
      footer,
      contactForm
    },
  };
};

export default SocialImpact;
