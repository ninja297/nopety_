import { AlertCircle, TrendingUp, Clock, BarChart3, Zap, Brain } from 'lucide-react';

const problems = [
  {
    icon: Brain,
    text: "Decide what video to make next",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    text: "Keep up with trends and algorithms",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Zap,
    text: "Optimize titles, thumbnails, and timing",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: BarChart3,
    text: "Analyze performance across multiple metrics",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: AlertCircle,
    text: "Avoid burnout and creative fatigue",
    color: "from-red-500 to-pink-500"
  }
];

export function Problem() {
  return (
    <section className="relative px-6 py-32 bg-slate-50">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cyan-300 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2.5 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-full mb-8 shadow-sm">
            <span className="text-red-700">The Creator's Dilemma</span>
          </div>
          <h2 className="mb-8 max-w-3xl mx-auto">
            The constant pressure of <span className="text-red-600">content creation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Existing tools provide data, but not direction. Creators are overwhelmed with numbers 
            but still ask the same question:
          </p>
        </div>
        
        {/* Creative problem grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {problems.slice(0, 3).map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg">{problem.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {problems.slice(3).map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg">{problem.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Big question with unique design */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-[2.5rem] blur-xl opacity-20"></div>
          <div className="relative p-12 sm:p-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative text-center">
              <div className="text-6xl mb-6">"</div>
              <h3 className="text-white mb-6 text-3xl sm:text-4xl">
                What should I upload next?
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                This uncertainty leads to stress, inconsistency, and burnout. 
                <span className="text-cyan-400"> You need clarity, not more complexity.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}