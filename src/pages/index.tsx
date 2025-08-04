

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OutsourcedManagementSection from '@/components/OutsourcedManagementSection';
import PublicPolicySection from '@/components/PublicPolicySection';
import SocialImpactSection from '@/components/SocialImpactSection';
import ConferencesSection from '@/components/ConferencesSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { client } from '@/sanity/client';
import {
  heroQuery,
  aboutQuery,
  outsourcedManagementQuery,
  publicPolicyQuery,
  socialImpactQuery,
  conferencesQuery,
  navigationQuery,
  footerQuery
} from '@/sanity/queries';

export async function getStaticProps() {
  const hero = await client.fetch(heroQuery);
  const about = await client.fetch(aboutQuery);
  const outsourcedManagement = await client.fetch(outsourcedManagementQuery);
  const publicPolicy = await client.fetch(publicPolicyQuery);
  const socialImpact = await client.fetch(socialImpactQuery);
  const conferences = await client.fetch(conferencesQuery);
  const navigation = await client.fetch(navigationQuery);
  const footer = await client.fetch(footerQuery);
  return {
    props: {
      hero,
      about,
      outsourcedManagement,
      publicPolicy,
      socialImpact,
      conferences,
      navigation,
      footer
    }
  };
}

const Index = ({ hero, about, outsourcedManagement, publicPolicy, socialImpact, conferences, navigation, footer, locale, setLocale }) => {
  return (
    <div className="min-h-screen">
      <HeroSection content={hero} locale={locale} />
      <AboutSection content={about} locale={locale} />
      <OutsourcedManagementSection content={outsourcedManagement} locale={locale} />
      <PublicPolicySection content={publicPolicy} locale={locale} />
      <SocialImpactSection content={socialImpact} locale={locale} />
      <ConferencesSection content={conferences} locale={locale} />
    </div>
  );
};

export default Index;
