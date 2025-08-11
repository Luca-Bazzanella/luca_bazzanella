import { AppProps } from 'next/app';
import '../index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Manage locale globally
  const [locale, setLocale] = useState('it');
  const navigationContent = pageProps?.navigation ?? {};
  const footerContent = pageProps?.footer ?? {};
  const contactForm = pageProps?.contact ?? {};

  // Pass locale and setLocale to all pages
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Navigation content={navigationContent} locale={locale} setLocale={setLocale} />
        <Component {...pageProps} locale={locale} setLocale={setLocale} />
        <Footer content={{ ...footerContent, ...contactForm }} locale={locale} contactBanner={pageProps?.contactForm?.contactBanner} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
