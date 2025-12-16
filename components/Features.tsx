import { Brain, Type, Heart, Calendar, Image, TrendingUp, Sparkles } from 'lucide-react';

const mainFeatures = [
  {
    icon: Brain,
    title: "AI Content Planner",
    description: "Personalized video ideas based on channel history, niche trends, and audience behavior.",
    accent: "cyan"
  },
  {
    icon: Type,
    title: "Title & Hook Suggestions",
    description: "AI-generated titles optimized for engagement and clarity.",
    accent: "blue"
  },
  {
    icon: Heart,
    title: "Creator Stress Reduction Design",
    description: "Clean UI, minimal decisions, no clutter — designed to reduce mental load.",
    accent: "rose"
  },
  {
    icon: Calendar,
    title: "Weekly Action Plan",
    description: "Simple weekly roadmap instead of overwhelming analytics.",
    accent: "violet"
  }
];

const futureFeatures = [
  { icon: Image, text: "Thumbnail suggestions", color: "from-pink-500 to-rose-500" },
  { icon: TrendingUp, text: "Retention insights", color: "from-cyan-500 to-blue-500" },
  { icon: Sparkles, text: "Monetization guidance", color: "from-amber-500 to-orange-500" }
];

export function Features() {
  return (
    <section className="relative px-6 py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-8 max-w-3xl mx-auto">
            Everything you need to <span className="text-gradient">stay focused</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            NOPETY gives you the essentials — no feature overload, 
            just the tools that matter for stress-free content creation.
          </p>
        </div>
        
        {/* Asymmetric feature grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Large feature card */}
          <div className="lg:row-span-2">
            <div className="group h-full p-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-[2.5rem] shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-700/30 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white mb-6 text-3xl">{mainFeatures[0].title}</h3>
                <p className="text-cyan-50 text-xl leading-relaxed">{mainFeatures[0].description}</p>
                <div className="mt-10 flex items-center gap-3 text-white">
                  <span className="text-sm uppercase tracking-wider">Core Feature</span>
                  <div className="flex-1 h-px bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Smaller feature cards */}
          {mainFeatures.slice(1).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-${feature.accent}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className={`w-8 h-8 text-${feature.accent}-600`} />
                </div>
                <h3 className="mb-4 text-xl">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Future features with unique design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-10"></div>
          <div className="relative p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-block px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                  <span className="text-white">Coming Soon</span>
                </div>
                <h3 className="text-white mb-4">Future innovations</h3>
                <p className="text-slate-300 max-w-2xl mx-auto">We're constantly evolving to serve you better</p>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {futureFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index}
                      className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white block">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}