import { useState } from 'react';
import { Copy, Check, Sparkles, ChevronRight } from 'lucide-react';

const videoTitles = [
  {
    id: 1,
    video: 'How to stay consistent',
    titles: [
      { 
        text: 'How to stay consistent as a content creator', 
        note: 'Clear, searchable, and authentic to your voice',
        recommended: true 
      },
      { 
        text: 'The truth about consistency in content creation', 
        note: 'More conversational, emotional hook',
        recommended: false 
      },
      { 
        text: 'I uploaded every week for 6 months. Here is what happened.', 
        note: 'Story-driven, curiosity-based',
        recommended: false 
      },
    ],
  },
  {
    id: 2,
    video: 'Behind the scenes',
    titles: [
      { 
        text: 'A realistic day in my life as a creator', 
        note: 'Authentic and relatable',
        recommended: true 
      },
      { 
        text: 'What nobody tells you about content creation', 
        note: 'Curiosity-driven, honest tone',
        recommended: false 
      },
      { 
        text: 'Behind the scenes: How I actually make videos', 
        note: 'Educational with transparency',
        recommended: false 
      },
    ],
  },
];

export function Titles() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-slate-800 text-3xl mb-2">Title Suggestions</h1>
        <p className="text-slate-600">AI-optimized titles for your videos</p>
      </div>

      {/* Video Selector */}
      <div className="mb-8 space-y-3">
        <p className="text-sm text-slate-500 mb-4">Select a video</p>
        {videoTitles.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(index)}
            className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between ${
              selectedVideo === index
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300 hover:shadow-md'
            }`}
          >
            <span>{video.video}</span>
            <ChevronRight className={`w-5 h-5 ${selectedVideo === index ? 'text-white' : 'text-slate-400'}`} />
          </button>
        ))}
      </div>

      {/* Titles List */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-cyan-600" />
          <p className="text-slate-700">Generated titles for: <span className="text-cyan-600">{videoTitles[selectedVideo].video}</span></p>
        </div>

        {videoTitles[selectedVideo].titles.map((title, index) => {
          const titleId = `${selectedVideo}-${index}`;
          const isCopied = copiedId === titleId;

          return (
            <div
              key={index}
              className={`bg-white border-2 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
                title.recommended
                  ? 'border-cyan-300 bg-gradient-to-br from-cyan-50 to-white'
                  : 'border-slate-200 hover:border-cyan-200'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  {title.recommended && (
                    <span className="inline-block text-xs text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full mb-3">
                      ⭐ Recommended
                    </span>
                  )}
                  <h4 className="text-slate-800 text-lg mb-3 leading-relaxed">
                    {title.text}
                  </h4>
                  <p className="text-sm text-slate-500">{title.note}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(title.text, titleId)}
                  className={`p-3 rounded-xl transition-all duration-300 flex-shrink-0 ${
                    isCopied
                      ? 'bg-cyan-100 text-cyan-600'
                      : 'bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600'
                  }`}
                >
                  {isCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Character count */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  {title.text.length} characters
                </span>
                {title.text.length <= 60 && (
                  <span className="text-xs text-cyan-600">✓ Optimal length</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Generate More */}
      <div className="mt-10">
        <button className="w-full px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl transition-all duration-300 border-2 border-slate-200 hover:border-cyan-300 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-600" />
          Generate more variations
        </button>
      </div>
    </div>
  );
}