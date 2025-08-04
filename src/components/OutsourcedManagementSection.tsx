
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const OutsourcedManagementSection = ({ content, locale }) => {
  return (
    <section id="outsourced-management" className="py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content?.title?.[locale] || 'Outsourced Management'}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 leading-relaxed mb-8">
                {content?.content?.intro?.[locale] || ''}
              </p>
              
              <div className="space-y-4 mb-8">
                {(content?.content?.projects ?? []).map((project, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{project?.[locale].title || project.title}</h4>
                    <p className="text-slate-600 text-sm">{project?.[locale].description || project.description}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/outsourced-management"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {content?.learnMore?.[locale] || 'Learn More'}
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div>
              <div className="bg-slate-100 rounded-xl overflow-hidden mb-6">
                <img
                  src="./lovable-uploads/d845b4f2-b16d-4c94-bdf0-364a3ebdf4d0.png"
                  alt="Data-driven digital management tools"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcedManagementSection;
