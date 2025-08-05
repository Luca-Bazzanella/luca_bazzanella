
import { Leaf, Target, Globe, Zap, ExternalLink } from 'lucide-react';
import { getSanityImageUrl } from '@/lib/getSanityImageUrl';
import Link from 'next/link';

const SocialImpactSection = ({ content, locale }) => {

  // Take only the first 4 projects
  const featuredProjects = (content?.projects ?? []).slice(0, 3);
  return (
    <section id="social-impact" className="py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content?.title?.[locale] || content?.title || 'Social Impact'}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 leading-relaxed mb-8">
                {content?.impact?.[locale] || ''}
              </p>
              <div className="space-y-4 mb-8">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-4">
                    <div className="flex items-start mb-2">
                      <div className="p-2 bg-green-100 rounded-lg mr-3 flex-shrink-0">
                        {index % 4 === 0 && <Leaf className="h-4 w-4 text-green-600" />}
                        {index % 4 === 1 && <Target className="h-4 w-4 text-green-600" />}
                        {index % 4 === 2 && <Globe className="h-4 w-4 text-green-600" />}
                        {index % 4 === 3 && <Zap className="h-4 w-4 text-green-600" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">{project.title?.[locale] || project.title || ''}</h4>
                        <p className="text-xs text-green-600 font-medium mb-2">{project.role?.[locale] || project.role || ''}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.description?.[locale] || project.description || ''}</p>
                  </div>
                ))}
              </div>
              <div>
                <Link 
                  href="/social-impact"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  {content?.learnMore?.[locale] || 'Learn More'}
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div>
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-8 flex items-center justify-center">
                {getSanityImageUrl(content?.images?.[0]) ? (
                  <img
                    src={getSanityImageUrl(content?.images?.[0])}
                    alt={content?.images?.[0]?.alt || 'Social Impact'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-slate-400 text-center py-12">No image available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpactSection;
