import { useState } from 'react';
import logo from "figma:asset/ec068ef7f79c58299a7872ebd9be9e191dc343a1.png";
import { Calendar, ArrowRight, Check, Smile, Meh, Frown } from 'lucide-react';

const weekDays = [
  { day: 'Mon', task: 'Research', status: 'active' as const },
  { day: 'Tue', task: 'Outline', status: 'upcoming' as const },
  { day: 'Wed', task: 'Script', status: 'upcoming' as const },
  { day: 'Thu', task: 'Record', status: 'upcoming' as const },
  { day: 'Fri', task: 'Edit', status: 'upcoming' as const },
];

export function Dashboard() {
  const [feeling, setFeeling] = useState<'good' | 'okay' | 'stressed' | null>(null);
  const [suggestionSaved, setSuggestionSaved] = useState(false);

  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <img src={logo} alt="NOPETY" className="h-30 mb-8" />
        <p className="text-slate-500 mb-2">{greeting},</p>
        <h1 className="text-slate-800 text-3xl">Ready to create today?</h1>
      </div>

      {/* Main Suggestion Card */}
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 sm:p-10 mb-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <p className="text-sm text-cyan-600">Suggested for you today</p>
        </div>
        
        <h2 className="text-slate-800 mb-4 text-2xl sm:text-3xl">
          How to stay consistent with your upload schedule
        </h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          Your audience engages most on Thursdays between 2-4 PM. This topic matches your recent growth pattern and fills a gap in your content library. Perfect timing for maximum reach.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setSuggestionSaved(true)}
            className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
              suggestionSaved 
                ? 'bg-cyan-100 text-cyan-700 border border-cyan-200' 
                : 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-sm hover:shadow-md'
            }`}
          >
            {suggestionSaved ? (
              <>
                <Check className="w-5 h-5" />
                <span>Saved to plan</span>
              </>
            ) : (
              <>
                <span>Plan this video</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
          <button className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl transition-colors border border-slate-200">
            Show me another
          </button>
        </div>
      </div>

      {/* Weekly Timeline */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-800">This week's plan</h3>
          <button className="text-sm text-cyan-600 hover:text-cyan-700 transition-colors flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Edit plan
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {weekDays.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-36 rounded-2xl p-5 transition-all duration-300 cursor-pointer ${
                item.status === 'active'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-md'
              }`}
            >
              <p className={`text-sm mb-2 ${item.status === 'active' ? 'text-cyan-100' : 'text-slate-500'}`}>
                {item.day}
              </p>
              <p className={`${item.status === 'active' ? 'text-white' : 'text-slate-800'}`}>
                {item.task}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Emotional Check-in */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-6">
        <p className="text-slate-700 mb-4">How are you feeling about creating today?</p>
        <div className="flex gap-3">
          {[
            { id: 'good', icon: Smile, label: 'Great' },
            { id: 'okay', icon: Meh, label: 'Okay' },
            { id: 'stressed', icon: Frown, label: 'Stressed' },
          ].map((mood) => {
            const Icon = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => setFeeling(mood.id as any)}
                className={`flex-1 px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  feeling === mood.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-white hover:bg-cyan-50 text-slate-600 border border-slate-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{mood.label}</span>
              </button>
            );
          })}
        </div>
        {feeling === 'stressed' && (
          <div className="mt-4 p-4 bg-white rounded-xl">
            <p className="text-sm text-slate-600">
              Take it easy today. Maybe start with something simple, like planning instead of creating. 
              You've got this. 💙
            </p>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}