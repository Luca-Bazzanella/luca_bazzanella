

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { client } from '@/sanity/client';
import {
  heroQuery,
  aboutQuery,
  outsourcedManagementQuery,
  publicPolicyQuery,
  socialImpactQuery,
  conferencesQuery,
  navigationQuery,
  footerQuery,
  contactQuery
} from '@/sanity/queries';

export async function getStaticProps() {
  const hero = await client.fetch(heroQuery);
  const about = await client.fetch(aboutQuery);
  const navigation = await client.fetch(navigationQuery);
  const footer = await client.fetch(footerQuery);
  const contact = await client.fetch(contactQuery);
  return {
    props: {
      hero,
      about,
      navigation,
      footer,
      contact
    }
  };
}

const Index = ({ hero, about, outsourcedManagement, publicPolicy, socialImpact, conferences, navigation, footer, locale, setLocale }) => {
  console.log(about)
  return (
    <div className="min-h-screen">
      <HeroSection content={hero} locale={locale} />
      <AboutSection content={about} locale={locale} />
    </div>
  );
};

export default Index;
