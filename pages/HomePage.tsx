import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import logo from "figma:asset/ec068ef7f79c58299a7872ebd9be9e191dc343a1.png";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Zap, 
  Shield, 
  Heart,
  Play,
  X,
  Mail,
  Lock,
  User as UserIcon
} from 'lucide-react';

interface HomePageProps {
  onLogin: () => void;
}

export function HomePage({ onLogin }: HomePageProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const stats = [
    { number: '10K+', label: 'Creators' },
    { number: '50K+', label: 'Videos Planned' },
    { number: '95%', label: 'Stress Reduced' },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI Content Planner',
      description: 'Personalized video ideas that match your style and audience',
    },
    {
      icon: Zap,
      title: 'Instant Suggestions',
      description: 'Get title and hook recommendations in seconds',
    },
    {
      icon: Heart,
      title: 'Stress-Free Design',
      description: 'Calm interface designed to reduce creative burnout',
    },
    {
      icon: Shield,
      title: 'Simple Insights',
      description: 'Advice, not overwhelming analytics',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden relative">
      {/* Old paper texture background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(139, 69, 19, 0.02) 1px, transparent 1px),
            linear-gradient(rgba(139, 69, 19, 0.02) 1px, transparent 1px),
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 69, 19, 0.01) 10px, rgba(139, 69, 19, 0.01) 20px)
          `,
          backgroundSize: '20px 20px, 20px 20px, 100px 100px',
        }}
      />
      
      {/* Paper grain texture */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundColor: '#f9f7f4',
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={logo} 
            alt="NOPETY" 
            className="h-30" 
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => {
                setIsSignup(false);
                setShowLoginModal(true);
              }}
              className="px-6 py-2.5 text-slate-700 hover:text-cyan-600 transition-colors bg-white/30 backdrop-blur-md border border-white/40 rounded-xl hover:bg-white/50 shadow-sm"
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsSignup(true);
                setShowLoginModal(true);
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 backdrop-blur-xl hover:from-cyan-600/90 hover:to-cyan-700/90 text-white rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 border border-white/20"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-50 backdrop-blur-xl border border-cyan-200/50 rounded-full mb-8 shadow-sm"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-700 text-sm">AI-Powered Content Planning</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight text-slate-900"
          >
            <span className="block mb-2">No stress.</span>
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Just create.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your AI-powered silent partner that handles planning, strategy, and decision-making — 
            <span className="text-slate-900"> so you can focus purely on creating.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsSignup(true);
                setShowLoginModal(true);
              }}
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 backdrop-blur-xl hover:from-cyan-600/90 hover:to-cyan-700/90 text-white rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/40 border border-white/30 hover:border-white/50"
            >
              <span className="text-lg">Start Free Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-white/40 backdrop-blur-xl text-slate-700 rounded-2xl transition-all duration-300 border border-white/60 hover:border-white/80 hover:bg-white/60 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              <span className="text-lg">Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl sm:text-5xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-slate-900">
              Everything you need to stay <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">focused</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built for creators who value clarity over complexity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl hover:bg-white hover:border-cyan-300 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative z-10 px-6 py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-slate-900">
              Simple. Calm. <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Effective.</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Connect your channel',
                description: 'Link your YouTube account in seconds. We analyze your content and audience.',
              },
              {
                step: '02',
                title: 'Get personalized suggestions',
                description: 'Receive AI-powered video ideas tailored to your niche and growth goals.',
              },
              {
                step: '03',
                title: 'Plan and create stress-free',
                description: 'Follow your weekly plan with clarity and confidence. No more decision fatigue.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-8"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/30 text-white"
                >
                  {item.step}
                </motion.div>
                <div className="flex-1 p-8 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-2xl mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-[3rem] shadow-2xl shadow-cyan-500/40"
        >
          <h2 className="text-4xl sm:text-5xl mb-6 text-white">
            Ready to create stress-free?
          </h2>
          <p className="text-xl text-cyan-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who have found clarity in their content creation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsSignup(true);
                setShowLoginModal(true);
              }}
              className="px-10 py-5 bg-white/90 backdrop-blur-xl text-cyan-600 rounded-2xl hover:bg-white transition-all duration-300 shadow-xl text-lg border border-white/60"
            >
              Start Free Today
            </motion.button>
          </div>
          <p className="text-cyan-100 text-sm">No credit card required • 2 minute setup</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>© 2025 NOPETY. Your stress-free operating system for content creation.</p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md"
          onClick={() => setShowLoginModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl text-slate-900">{isSignup ? 'Create Account' : 'Welcome Back'}</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {isSignup && (
                <div>
                  <label className="block text-sm text-slate-600 mb-2">Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm text-slate-600 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 backdrop-blur-xl hover:from-cyan-600/90 hover:to-cyan-700/90 text-white rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 border border-white/20"
              >
                {isSignup ? 'Create Account' : 'Login'}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-sm text-slate-600 hover:text-cyan-600 transition-colors"
              >
                {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}