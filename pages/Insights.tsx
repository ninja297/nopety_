import { useState } from 'react';
import { TrendingUp, Clock, Users, Heart, Eye, MessageCircle } from 'lucide-react';

const insights = [
  {
    id: 1,
    icon: Heart,
    title: "What's working",
    content: "Your audience loves behind-the-scenes content. Videos showing your process get 40% more engagement than tutorials. They want to see the real you.",
    metric: "+40%",
    color: "cyan",
  },
  {
    id: 2,
    icon: Clock,
    title: "Best time to upload",
    content: "Thursday afternoons between 2-4 PM work best for your audience. That's when they're most active and likely to engage with your content.",
    metric: "Thu 2-4 PM",
    color: "blue",
  },
  {
    id: 3,
    icon: Users,
    title: "Audience growth",
    content: "You're growing steadily at a healthy pace. Your retention rate is strong—viewers are staying for the full video. Keep doing what you're doing.",
    metric: "+12%",
    color: "violet",
  },
  {
    id: 4,
    icon: Eye,
    title: "Watch time trends",
    content: "Videos between 8-12 minutes perform best for your channel. Your audience prefers in-depth content over quick tips.",
    metric: "8-12 min",
    color: "cyan",
  },
  {
    id: 5,
    icon: MessageCircle,
    title: "Engagement patterns",
    content: "Your community loves to comment and discuss. Videos that ask questions or invite opinions get 3x more comments.",
    metric: "3x",
    color: "blue",
  },
];

export function Insights() {
  const [selectedInsight, setSelectedInsight] = useState<number | null>(null);

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-slate-800 text-3xl mb-2">Simple Insights</h1>
        <p className="text-slate-600">Advice, not analysis</p>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-sm text-slate-500 mb-1">Total views</p>
          <p className="text-2xl text-slate-800">24.5K</p>
          <p className="text-sm text-cyan-600 mt-2">+18% this week</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-sm text-slate-500 mb-1">Avg. watch time</p>
          <p className="text-2xl text-slate-800">9:42</p>
          <p className="text-sm text-cyan-600 mt-2">+2 min</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-sm text-slate-500 mb-1">Subscribers</p>
          <p className="text-2xl text-slate-800">3.2K</p>
          <p className="text-sm text-cyan-600 mt-2">+124 this week</p>
        </div>
      </div>

      {/* Insights List */}
      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const isExpanded = selectedInsight === insight.id;

          return (
            <div
              key={insight.id}
              onClick={() => setSelectedInsight(isExpanded ? null : insight.id)}
              className={`bg-white border-2 rounded-3xl p-8 transition-all duration-500 cursor-pointer ${
                isExpanded
                  ? 'border-cyan-300 shadow-xl bg-gradient-to-br from-cyan-50 to-white'
                  : 'border-slate-200 hover:border-cyan-200 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl flex-shrink-0 transition-all duration-300 ${
                  isExpanded ? 'bg-cyan-500' : 'bg-slate-100'
                }`}>
                  <Icon className={`w-6 h-6 ${isExpanded ? 'text-white' : 'text-slate-600'}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-slate-800">{insight.title}</h3>
                    <span className={`text-lg px-4 py-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                      isExpanded 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {insight.metric}
                    </span>
                  </div>
                  
                  <p className={`text-slate-600 leading-relaxed transition-all duration-300 ${
                    isExpanded ? 'text-lg' : ''
                  }`}>
                    {insight.content}
                  </p>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-cyan-200">
                      <button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-colors text-sm">
                        Apply this insight
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="mt-10 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-8 text-center">
        <p className="text-slate-700 leading-relaxed">
          These insights are updated weekly based on your channel performance. 
          We focus on what matters—helping you make better content decisions.
        </p>
      </div>
    </div>
  );
}
