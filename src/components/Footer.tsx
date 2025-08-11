
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { useState, useMemo } from 'react';
import ContactForm from '@/components/ContactForm';

interface FooterProps {
  content: any;
  locale: string;
  contactBanner?: any;
}

const Footer = ({ content, locale, contactBanner }: FooterProps) => {
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
                href="mailto:lucabazzanella.tn@gmail.com"
                className="w-10 h-10 bg-luca-blue-600 hover:bg-luca-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/lucabazzanella"
                className="w-10 h-10 bg-luca-blue-600 hover:bg-luca-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
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
          <p>{content?.copyright?.[locale] || content?.copyright || ''}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
