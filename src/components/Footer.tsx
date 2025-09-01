
import { Linkedin, Mail, MapPin, Instagram } from 'lucide-react';
import { useState, useMemo } from 'react';
import ContactForm from '@/components/ContactForm';

interface FooterProps {
  content: any;
  locale: string;
  contactBanner?: any;
}

const Footer = ({ content, locale }: FooterProps) => {
  const [showModal, setShowModal] = useState(false);
  const baseFormStrings = useMemo(() => {
    // Use the same logic as ContactForm for fallback
    let strings = content?.contactForm || {};
    if (!strings) {
      strings = {};
    }
    return strings;
  }, [content]);

  const MemoizedContactForm = useMemo(() => (
    <ContactForm
      locale={locale}
      buttonLabel=""
      formStrings={baseFormStrings}
      hideBanner
      className="p-0 bg-transparent border-none shadow-none rounded-none"
    />
  ), [locale, baseFormStrings]);
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-luca-blue-400 mb-4">
              Luca Bazzanella
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {content?.description?.[locale] || ''}
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com/lucabazzanella"
                className="w-10 h-10 bg-luca-blue-600 hover:bg-luca-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" width="20" height="20">
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                  </svg>
                </span>
              </a>
              <a
                href="https://instagram.com/luca_bazzanella"
                className="w-10 h-10 bg-luca-blue-600 hover:bg-luca-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/lucabazzanella"
                className="w-10 h-10 bg-luca-blue-600 hover:bg-luca-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{content?.footer?.[locale]?.contacts || content?.footer?.contacts?.[locale] || content?.footer?.contacts || 'Contacts'}</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-luca-blue-400" />
                <div className="text-gray-400 leading-relaxed">
                  {content?.contactBanner?.[locale] || content?.contactBanner?.en || 'To get in touch to know more about'}{' '}
                  <button
                    type="button"
                    className="inline-block underline hover:text-gray-300 text-gray-400 leading-relaxed"
                    onClick={() => setShowModal(true)}
                  >
                    {content?.clickHere?.[locale] || content?.clickHere?.en || 'click here'}
                  </button>
                  {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
                          onClick={() => setShowModal(false)}
                          aria-label="Close"
                        >
                          &times;
                        </button>
                        {MemoizedContactForm}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-luca-blue-400" />
                <span>{content?.location?.[locale] || content?.location || ''}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                  {(() => {
                    const copyright = content?.copyright?.[locale] || content?.copyright || '';
                    const dotIndex = copyright.indexOf('.');
                    if (dotIndex !== -1) {
                      const firstLine = copyright.slice(0, dotIndex + 1);
                      const secondLine = copyright.slice(dotIndex + 1).trim();
                      const sintija = 'Sintija Birgele';
                      let renderedSecondLine;
                      if (secondLine.includes(sintija)) {
                        const before = secondLine.slice(0, secondLine.indexOf(sintija));
                        const after = secondLine.slice(secondLine.indexOf(sintija) + sintija.length);
                        renderedSecondLine = (
                          <>
                            {before}
                            <a href="https://de.linkedin.com/in/sintija-birgele" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">{sintija}</a>{after}
                          </>
                        );
                      } else {
                        renderedSecondLine = secondLine;
                      }
                      return (
                        <>
                          <span>&copy; {firstLine}</span>
                          <br />
                          <span className="italic text-sm">{renderedSecondLine}</span>
                        </>
                      );
                    }
                    return copyright;
                  })()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;