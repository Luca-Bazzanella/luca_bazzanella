import { ArrowLeft, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { GetStaticProps } from 'next';
import { client } from '@/sanity/client';
import { allConferencesQuery, footerQuery, navigationQuery } from '@/sanity/queries';

type AllConferencesProps = {
  content: any;
  locale: string;
};

const AllConferences = ({ content, locale }: AllConferencesProps) => {
  const baseUrl = 'https://european-management-institute.github.io/luca_bazzanella';
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* All Conferences Grid */}
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
                {content?.title?.[locale] || content?.title || 'All Conferences'}
              </h1>
              {content?.allConferences?.map((conference: any, index: number) => (
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 mb-3 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">{conference.title?.[locale] || conference.title || ''}</h3>
                      <p className="text-slate-700 font-light leading-relaxed mb-4">{conference.topic?.[locale] || conference.topic || ''}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                          {conference.date?.[locale] || conference.date || ''}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                          {conference.location?.[locale] || conference.location || ''}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-slate-500" />
                          {conference.attendees?.[locale] || conference.attendees || ''} {content?.attendees?.[locale] || content?.attendees || ''}
                        </div>
                      </div>
                      {/* Links */}
                      <div className="flex flex-wrap gap-2">
                        {conference.link && (
                          <a
                            href={conference.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            {content?.learnMore?.[locale] || content?.learnMore || 'Learn More'}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        )}
                        {conference.links && conference.links.map((link: any, linkIndex: number) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            {link.name?.[locale] || link.name || ''}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
    content = await client.fetch(allConferencesQuery, { locale: usedLocale });
    navigation = await client.fetch(navigationQuery, { locale: usedLocale });
    footer = await client.fetch(footerQuery);
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

export default AllConferences;