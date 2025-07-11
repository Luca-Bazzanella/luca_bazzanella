
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, content } = useLanguage();
  
  const isActive = (path: string) => {
    const currentPath = window.location.pathname;
    if (path === '/') {
      return currentPath === '/' || currentPath === '/luca_bazzanella/' || currentPath === '/luca_bazzanella';
    }
    return currentPath.includes(path);
  };

  const menuItems = [
    { name: content.navigation.management, href: `${content.navigation.baseUrl}/outsourced-management` },
    { name: content.navigation.digitalization, href: `${content.navigation.baseUrl}/digitalization` },
    { name: content.navigation.efficiency, href: `${content.navigation.baseUrl}/sustainability` },
    { name: content.navigation.policy, href: `${content.navigation.baseUrl}/all-conferences` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href={content.navigation.baseUrl} className="font-serif text-xl font-semibold text-slate-900 hover:text-slate-700 transition-colors">
            {content.navigation.name}
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href.split('/').pop() || '') 
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors px-3 py-1 border border-slate-300 rounded-md"
            >
              {language === 'it' ? 'EN' : 'IT'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors px-2 py-1 border border-slate-300 rounded-md"
            >
              {language === 'it' ? 'EN' : 'IT'}
            </button>
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
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href.split('/').pop() || '')
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
