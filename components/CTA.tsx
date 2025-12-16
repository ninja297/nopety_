import { ArrowRight, Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative px-6 py-32 bg-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
            <span className="text-cyan-400">Ready to create stress-free?</span>
          </div>
        </div>
        
        <h2 className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl">
          Your stress-free workflow <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">starts now</span>
        </h2>
        
        <p className="text-slate-300 mb-14 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
          Open NOPETY not to analyze numbers — but to feel confident about your next move. 
          <span className="text-white"> Join creators who've found clarity in content creation.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/60 hover:-translate-y-1">
            <span className="text-lg">Get Started Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center gap-3 hover:-translate-y-1">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">Schedule a Demo</span>
          </button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Start creating in 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}