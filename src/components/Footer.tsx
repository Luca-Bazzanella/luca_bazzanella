
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-luca-blue-400 mb-4">
              Luca Bazzanella
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {content.footer.description}
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
            <h4 className="text-lg font-semibold text-white mb-4">{content.footer.contacts}</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-luca-blue-400" />
                <a href="mailto:lucabazzanella.tn@gmail.com" className="hover:text-luca-blue-400 transition-colors">
                  lucabazzanella.tn@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-luca-blue-400" />
                <span>{content.footer.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
