import { ArrowRight, Lightbulb, Calendar, Smile } from 'lucide-react';

const solutions = [
  {
    icon: ArrowRight,
    title: "Clear content recommendations",
    description: "Not just data — actual direction on what to create",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Lightbulb,
    title: "AI-generated video ideas",
    description: "Personalized ideas based on your channel and audience",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Calendar,
    title: "Stress-free planning",
    description: "Simple weekly roadmap instead of overwhelming dashboards",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Smile,
    title: "Minimal, calming interface",
    description: "Designed to reduce mental load and decision fatigue",
    gradient: "from-emerald-500 to-teal-500"
  }
];

export function Solution() {
  return (
    <section className="relative px-6 py-32 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-cyan-400 rounded-full"></div>
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-2 h-2 bg-cyan-400 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/50 rounded-full mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-800">The Solution</span>
          </div>
          <h2 className="mb-8 max-w-3xl mx-auto">
            From <span className="text-slate-400 line-through">confusion</span> to <span className="text-gradient">clarity</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            NOPETY converts complex analytics into simple, actionable guidance. 
            <span className="text-slate-900"> We don't just show what happened — we tell you what to do next.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`group relative p-10 bg-white rounded-[2rem] border-2 border-slate-100 hover:border-transparent transition-all duration-500 ${isEven ? 'hover:shadow-2xl' : 'hover:shadow-2xl'}`}
                style={{
                  transform: `rotate(${isEven ? '-0.5deg' : '0.5deg'})`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${isEven ? '-0.5deg' : '0.5deg'}) translateY(0px)`;
                }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-[2rem]"></div>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${solution.gradient} rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-20`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl">{solution.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}