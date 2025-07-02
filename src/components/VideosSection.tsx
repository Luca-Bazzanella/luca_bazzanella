
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const VideosSection = () => {
  const { content } = useLanguage();

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="videos" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {content.videos.title} <span className="bg-gradient-to-r from-luca-blue-400 to-luca-earth-400 bg-clip-text text-transparent">{content.videos.subtitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luca-blue-400 to-luca-earth-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {content.videos.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.videos.videos.map((video, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover-scale group cursor-pointer" onClick={() => handleVideoClick(video.videoId)}>
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-gray-700 rounded-t-lg overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-t-lg flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-semibold text-white mb-3">
                  {video.title}
                </CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            {content.videos.channelDescription}
          </p>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Play className="h-5 w-5 mr-2" />
            {content.videos.visitChannel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
