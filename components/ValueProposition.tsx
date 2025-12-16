import { Check, Sparkles } from 'lucide-react';

const differences = [
  "Stress-free design philosophy",
  "Decision-reduction instead of feature overload",
  "AI-driven clarity, not raw data",
  "Creator-first, burnout-aware approach"
];

export function ValueProposition() {
  return (
    <section className="relative px-6 py-32 bg-slate-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/50 rounded-full mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-cyan-800">What Makes Us Different</span>
            </div>
            <h2 className="mb-8">
              Peace of mind over <span className="text-slate-400 line-through">optimization</span>
            </h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Most creator tools focus on optimization. NOPETY focuses on peace of mind. 
              <span className="text-slate-900"> We're not just a tool — we're a calm workflow.</span>
            </p>
            
            <div className="space-y-5">
              {differences.map((difference, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all duration-300">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 text-lg">{difference}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Pricing with unique design */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Free tier */}
            <div className="group relative p-8 bg-white border-2 border-slate-200 rounded-3xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-6 right-6">
                <div className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">Free</div>
              </div>
              <div className="mb-6">
                <div className="text-4xl mb-2">$0</div>
                <p className="text-slate-600">Perfect for getting started</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-cyan-600" />
                  <span>Basic recommendations</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-cyan-600" />
                  <span>5 AI-generated ideas/week</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-cyan-600" />
                  <span>Community support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors">
                Start Free
              </button>
            </div>
            
            {/* Premium tier */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <div className="relative p-10 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 rounded-[2rem] shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Animated background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-700/30 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="absolute top-0 right-0">
                    <div className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-sm text-white">Popular</div>
                  </div>
                  <div className="mb-8">
                    <div className="text-white text-5xl mb-2">
                      $9<span className="text-2xl text-cyan-100">/mo</span>
                    </div>
                    <p className="text-cyan-50 text-lg">Affordable pricing for creators</p>
                  </div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>Unlimited AI-generated ideas</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>Advanced weekly plans</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>Deep analytics & insights</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <button className="w-full px-6 py-4 bg-white text-cyan-600 rounded-xl hover:bg-cyan-50 transition-colors shadow-lg">
                    Get Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}