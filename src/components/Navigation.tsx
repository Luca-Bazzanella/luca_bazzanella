
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = ({ content, locale, setLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  const isActive = (path: string) => {
    return asPath === path || asPath.startsWith(path);
  };

  const menuItems = [
    { name: content?.management?.[locale] || 'Management', href: '/outsourced-management' },
    { name: content?.policy?.[locale] || 'Policy', href: '/public-policy' },
    { name: content?.socialImpact?.[locale] || 'Social Impact', href: '/social-impact' },
    { name: content?.conferences?.[locale] || 'Conferences', href: '/all-conferences' },
  ];

  const toggleLocale = () => {
    const nextLocale = locale === 'it' ? 'en' : 'it';
    if (setLocale) setLocale(nextLocale);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-serif text-xl font-semibold text-slate-900 hover:text-slate-700 transition-colors">
            {content?.name?.[locale] || 'Home'}
            </Link>
            {/* Language switcher: flags and codes side by side */}
            <div className="flex items-center space-x-1 rounded-md p-1">
              {/* IT Option */}
              <button
                onClick={() => setLocale && setLocale('it')}
                className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors focus:outline-none ${
                  locale === 'it' ? 'bg-white shadow text-blue-700 cursor-default' : 'hover:bg-slate-200 text-slate-700'
                }`}
                disabled={locale === 'it'}
                aria-current={locale === 'it' ? 'true' : undefined}
              >
                <span className="mr-1" aria-label="Italy flag">
                  <svg width="16" height="11" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="14" rx="2" fill="#F5F5F5"/>
                    <rect width="6.67" height="14" rx="2" fill="#008C45"/>
                    <rect x="13.33" width="6.67" height="14" rx="2" fill="#CD212A"/>
                  </svg>
                </span>
                IT
              </button>
              {/* EN Option */}
              <button
                onClick={() => setLocale && setLocale('en')}
                className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors focus:outline-none ${
                  locale === 'en' ? 'bg-white shadow text-blue-700 cursor-default' : 'hover:bg-slate-200 text-slate-700'
                }`}
                disabled={locale === 'en'}
                aria-current={locale === 'en' ? 'true' : undefined}
              >
                <span className="mr-1" aria-label="UK flag">
                  <svg width="16" height="11" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="14" rx="2" fill="#012169"/>
                    <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2"/>
                    <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1"/>
                    <rect x="8" width="4" height="14" fill="white"/>
                    <rect y="5" width="20" height="4" fill="white"/>
                    <rect x="8.75" width="2.5" height="14" fill="#C8102E"/>
                    <rect y="5.75" width="20" height="2.5" fill="#C8102E"/>
                  </svg>
                </span>
                EN
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                locale={locale}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  locale={locale}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
