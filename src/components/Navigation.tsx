
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = ({ content, locale, setLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) {
      setIsOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsOverHero(entry.isIntersecting),
      { threshold: 0, rootMargin: '-64px 0px 0px 0px' }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [router.asPath]);

  const isActive = (path: string) => {
    return asPath === path || asPath.startsWith(path);
  };

  const menuItems = [
    { name: content?.vision?.[locale] || 'Vision', href: '#vision' },
    { name: content?.activity?.[locale] || 'Activity', href: '#activity' },
    { name: content?.specialization?.[locale] || 'Specialization', href: '#specialization' },
    { name: content?.conferences?.[locale] || 'Conferences', href: '#conferences' },
  ];

  const toggleLocale = () => {
    const nextLocale = locale === 'it' ? 'en' : 'it';
    if (setLocale) setLocale(nextLocale);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 ${isOverHero ? 'bg-[#0a0c10]/98' : 'bg-white/95'}`}>
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isOverHero ? 'via-gold-500/40' : 'via-gold-500/50'} to-transparent`} aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className={`font-serif text-xl font-semibold transition-colors ${isOverHero ? 'text-white hover:text-gold-400' : 'text-slate-900 hover:text-gold-600'}`}>
            {content?.name?.[locale] || 'Home'}
            </Link>
            {/* Language switcher: subtle, low contrast */}
            <div className={`flex items-center space-x-0.5 rounded-md p-0.5 border ${isOverHero ? 'bg-slate-900/60 border-slate-800/40' : 'bg-slate-100/80 border-slate-200'}`}>
              {/* IT Option */}
              <button
                onClick={() => setLocale && setLocale('it')}
                className={`flex items-center px-2 py-1 rounded text-xs font-medium transition-all focus:outline-none opacity-80
                  ${locale === 'it'
                    ? isOverHero ? 'bg-slate-800/50 text-slate-400 cursor-default' : 'bg-slate-200/80 text-slate-600 cursor-default'
                    : isOverHero ? 'hover:bg-slate-800/30 text-slate-500 hover:text-slate-400' : 'hover:bg-slate-200 text-slate-600 hover:text-slate-800'}
                `}
                disabled={locale === 'it'}
                aria-current={locale === 'it' ? 'true' : undefined}
              >
                <span className="mr-1 opacity-70" aria-label="Italy flag">
                  <svg
                    width="14" height="10" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
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
                className={`flex items-center px-2 py-1 rounded text-xs font-medium transition-all focus:outline-none opacity-80
                  ${locale === 'en'
                    ? isOverHero ? 'bg-slate-800/50 text-slate-400 cursor-default' : 'bg-slate-200/80 text-slate-600 cursor-default'
                    : isOverHero ? 'hover:bg-slate-800/30 text-slate-500 hover:text-slate-400' : 'hover:bg-slate-200 text-slate-600 hover:text-slate-800'}
                `}
                disabled={locale === 'en'}
                aria-current={locale === 'en' ? 'true' : undefined}
              >
                <span className="mr-1 opacity-70" aria-label="UK flag">
                  <svg
                    width="14" height="10" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
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
                    ? isOverHero ? 'text-gold-400' : 'text-gold-600'
                    : isOverHero ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
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
              className={`transition-colors ${isOverHero ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t ${isOverHero ? 'bg-slate-950 border-slate-800/50' : 'bg-white border-slate-200'}`}>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  locale={locale}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? isOverHero ? 'text-gold-400 bg-gold-500/10' : 'text-gold-600 bg-gold-500/10'
                      : isOverHero ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
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
