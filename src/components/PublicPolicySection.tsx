
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';

const PublicPolicySection = ({ content, locale }) => {
  return (
    <section id="public-policy" className="py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
                {content?.title?.[locale] ?? content?.publicPolicy?.title ?? 'Public Policy'}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 leading-relaxed mb-8">
                {content?.description?.[locale] ?? content?.publicPolicy?.description ?? ''}
              </p>
              
              <div className="space-y-4 mb-8">
                {(content?.projects ?? []).map((project, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{project?.title?.[locale] ?? project?.title ?? ''}</h4>
                    <p className="text-slate-600 text-sm mb-2">{project?.description?.[locale] ?? project?.description ?? ''}</p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        {content?.publicPolicy?.learnMore?.[locale] ?? content?.publicPolicy?.learnMore ?? 'Learn More'}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {content?.publicPolicy?.backToHome?.[locale] ?? content?.publicPolicy?.backToHome ?? 'Back to Home'}
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div>
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6">
                <img
                  src={getSanityImageUrl(content?.images?.[0])}
                  alt={content?.publicPolicy?.images?.[0]?.alt || 'Public Policy'}
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

export default PublicPolicySection;
