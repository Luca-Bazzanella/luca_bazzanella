
import { useLanguage } from '@/hooks/useLanguage';

const VideosSection = () => {
  const { content } = useLanguage();

  return (
    <section id="videos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-4xl sm:text-3xl sm:text-3xl font-serif font-semibold text-slate-900 mb-6 text-left">
            {content.videos.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.videos.videos.map((video, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{video.title}</h4>
                <p className="text-slate-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
