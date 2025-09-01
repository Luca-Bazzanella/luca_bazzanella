

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VisionSection from '@/components/VisionSection';
import { client } from '@/sanity/client';
import {
  heroQuery,
  aboutQuery,
  visionQuery,
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
  const vision = await client.fetch(visionQuery);
  const outsourcedManagement = await client.fetch(outsourcedManagementQuery);
  const publicPolicy = await client.fetch(publicPolicyQuery);
  const navigation = await client.fetch(navigationQuery);
  const footer = await client.fetch(footerQuery);
  const contact = await client.fetch(contactQuery);
  return {
    props: {
      hero,
      about,
      vision,
      outsourcedManagement,
      publicPolicy,
      navigation,
      footer,
      contact
    }
  };
}

const Index = ({ hero, about, vision, outsourcedManagement, publicPolicy, socialImpact, conferences, navigation, footer, contact, locale, setLocale }) => {
  return (
    <div className="min-h-screen">
      <HeroSection content={hero} locale={locale} />
      <VisionSection content={vision} locale={locale} />
  <AboutSection content={{...about, navigation}} locale={locale} outsourcedManagement={outsourcedManagement} publicPolicy={publicPolicy} contact={contact} />
    </div>
  );
};

export default Index;
