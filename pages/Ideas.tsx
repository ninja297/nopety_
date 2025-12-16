import { useState } from 'react';
import { Sparkles, Bookmark, TrendingUp, Users, Clock, RefreshCw } from 'lucide-react';

const ideaCategories = [
  {
    title: 'Trending in your niche',
    icon: TrendingUp,
    ideas: [
      { id: 1, title: 'Behind the scenes of my creative process', engagement: 'High', saved: false },
      { id: 2, title: '5 mistakes I made as a new creator', engagement: 'High', saved: false },
      { id: 3, title: 'A day in the life of a content creator', engagement: 'Medium', saved: false },
    ],
  },
  {
    title: 'Based on your audience',
    icon: Users,
    ideas: [
      { id: 4, title: 'Q&A: Answering your top questions', engagement: 'High', saved: false },
      { id: 5, title: 'What I wish I knew before starting', engagement: 'Medium', saved: false },
      { id: 6, title: 'Tools and apps I use every day', engagement: 'Medium', saved: false },
    ],
  },
  {
    title: 'Evergreen content',
    icon: Clock,
    ideas: [
      { id: 7, title: 'Complete beginner guide to [your niche]', engagement: 'High', saved: false },
      { id: 8, title: 'How to get started with minimal equipment', engagement: 'Medium', saved: false },
    ],
  },
];

export function Ideas() {
  const [categories, setCategories] = useState(ideaCategories);
  const [filter, setFilter] = useState<'all' | 'saved'>('all');

  const toggleSave = (categoryIndex: number, ideaIndex: number) => {
    setCategories(prev => {
      const newCategories = [...prev];
      newCategories[categoryIndex].ideas[ideaIndex].saved = 
        !newCategories[categoryIndex].ideas[ideaIndex].saved;
      return newCategories;
    });
  };

  const savedCount = categories.reduce(
    (acc, cat) => acc + cat.ideas.filter(idea => idea.saved).length, 
    0
  );

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-slate-800 text-3xl">Ideas Library</h1>
          <button className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-colors">
            <RefreshCw className="w-5 h-5 text-slate-600" />
          </button>
        </div>
        <p className="text-slate-600">Curated ideas just for you</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2.5 rounded-xl transition-all duration-300 ${
            filter === 'all'
              ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-cyan-300'
          }`}
        >
          All ideas
        </button>
        <button
          onClick={() => setFilter('saved')}
          className={`px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${
            filter === 'saved'
              ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-cyan-300'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          Saved ({savedCount})
        </button>
      </div>

      {/* Ideas Grid */}
      <div className="space-y-10">
        {categories.map((category, categoryIndex) => {
          const Icon = category.icon;
          const visibleIdeas = filter === 'saved' 
            ? category.ideas.filter(idea => idea.saved)
            : category.ideas;

          if (filter === 'saved' && visibleIdeas.length === 0) return null;

          return (
            <div key={categoryIndex}>
              <div className="flex items-center gap-2 mb-5">
                <Icon className="w-5 h-5 text-cyan-600" />
                <h3 className="text-slate-800">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {visibleIdeas.map((idea, ideaIndex) => {
                  const actualIndex = category.ideas.findIndex(i => i.id === idea.id);
                  return (
                    <div
                      key={idea.id}
                      className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors">
                            {idea.title}
                          </h4>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs px-3 py-1 rounded-full ${
                              idea.engagement === 'High'
                                ? 'bg-cyan-100 text-cyan-700'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {idea.engagement} engagement
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSave(categoryIndex, actualIndex);
                          }}
                          className={`p-2.5 rounded-xl transition-all duration-300 ${
                            idea.saved
                              ? 'bg-cyan-100 text-cyan-600'
                              : 'bg-slate-100 text-slate-400 hover:bg-cyan-50 hover:text-cyan-600'
                          }`}
                        >
                          <Bookmark className={`w-5 h-5 ${idea.saved ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Generate More */}
      <div className="mt-10 text-center">
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 flex items-center gap-2 mx-auto">
          <Sparkles className="w-5 h-5" />
          Generate more ideas
        </button>
      </div>
    </div>
  );
}
