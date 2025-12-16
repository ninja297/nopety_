import { Users, GraduationCap, Sparkles, RefreshCcw } from 'lucide-react';

const users = [
  {
    icon: Users,
    title: "Small to mid-size YouTubers",
    description: "Growing creators who need strategic direction",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "Student creators",
    description: "Balancing content creation with studies",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "First-time content creators",
    description: "Just starting and need guidance",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: RefreshCcw,
    title: "Creators experiencing burnout",
    description: "Need to rediscover joy in creating",
    gradient: "from-rose-500 to-pink-500"
  }
];

export function TargetUsers() {
  return (
    <section className="relative px-6 py-32 bg-white">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-cyan-300 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-8 max-w-3xl mx-auto">
            Built for creators who value <span className="text-gradient">clarity</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            NOPETY is especially designed for creators who want clarity, not complexity. 
            <span className="text-slate-900"> If you're feeling overwhelmed, we're here for you.</span>
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {users.map((user, index) => {
            const Icon = user.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-transparent transition-all duration-500 h-full">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${user.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-white rounded-3xl"></div>
                  </div>
                  
                  {/* Glow on hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${user.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-20`}></div>
                  
                  <div className={`w-14 h-14 bg-gradient-to-br ${user.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="mb-3 text-center">{user.title}</h4>
                  <p className="text-slate-600 text-center leading-relaxed">{user.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}