import { useState } from 'react';
import { Home, Lightbulb, Type, TrendingUp, User } from 'lucide-react';
import { Dashboard } from '../pages/Dashboard';
import { Ideas } from '../pages/Ideas';
import { Titles } from '../pages/Titles';
import { Insights } from '../pages/Insights';
import { Profile } from '../pages/Profile';

type Page = 'dashboard' | 'ideas' | 'titles' | 'insights' | 'profile';

interface AppMainProps {
  onLogout: () => void;
}

export function AppMain({ onLogout }: AppMainProps) {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const navigation = [
    { id: 'dashboard' as Page, icon: Home, label: 'Home' },
    { id: 'ideas' as Page, icon: Lightbulb, label: 'Ideas' },
    { id: 'titles' as Page, icon: Type, label: 'Titles' },
    { id: 'insights' as Page, icon: TrendingUp, label: 'Insights' },
    { id: 'profile' as Page, icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Page Content */}
      <main className="animate-fadeIn">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'ideas' && <Ideas />}
        {currentPage === 'titles' && <Titles />}
        {currentPage === 'insights' && <Insights />}
        {currentPage === 'profile' && <Profile onLogout={onLogout} />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200 z-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex justify-around py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isActive ? 'text-cyan-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}