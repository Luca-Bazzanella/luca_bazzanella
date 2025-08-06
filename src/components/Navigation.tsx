
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
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
            {/* Language selector next to logo */}
            <button
              onClick={toggleLocale}
              className="flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors px-3 py-1 border border-slate-300 rounded-md"
            >
              <Globe className="h-4 w-4 mr-2" />
              {locale === 'it' ? 'EN' : 'IT'}
            </button>
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
