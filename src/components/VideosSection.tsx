
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, ExternalLink, Maximize } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';

const VideosSection = () => {
  const { content } = useLanguage();
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  const handleVideoExpand = (videoId: string) => {
    setExpandedVideo(expandedVideo === videoId ? null : videoId);
  };

  const handleExternalLink = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="videos" className="py-8 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 text-balance">
            {content.videos.title} <span className="bg-gradient-to-r from-luca-blue-600 to-luca-earth-600 bg-clip-text text-transparent">{content.videos.subtitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luca-blue-600 to-luca-earth-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-light leading-relaxed text-balance">
            {content.videos.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.videos.videos.map((video, index) => (
            <Card key={index} className="bg-white border-slate-200 shadow-lg hover:shadow-xl hover-scale group overflow-hidden">
              <CardHeader className="p-0 relative">
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  {expandedVideo === video.videoId ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setExpandedVideo(null)}
                        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
                      >
                        <Maximize className="h-4 w-4 text-white rotate-180" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                        <button
                          onClick={() => handleVideoExpand(video.videoId)}
                          className="bg-luca-blue-600 hover:bg-luca-blue-700 rounded-full p-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Play className="h-8 w-8 text-white fill-white ml-1" />
                        </button>
                      </div>
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => handleVideoExpand(video.videoId)}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                        >
                          <Maximize className="h-4 w-4 text-white" />
                        </button>
                        <button
                          onClick={() => handleExternalLink(video.videoId)}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-luca-blue-600 transition-colors">
                  {video.title}
                </CardTitle>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-slate-700 mb-6 text-lg">
            {content.videos.channelDescription}
          </p>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-luca-blue-600 to-luca-blue-700 hover:from-luca-blue-700 hover:to-luca-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Play className="h-5 w-5 mr-3" />
            {content.videos.visitChannel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
