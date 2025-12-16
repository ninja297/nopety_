import { useState } from 'react';
import logo from "figma:asset/ec068ef7f79c58299a7872ebd9be9e191dc343a1.png";
import { 
  Youtube, 
  Bell, 
  Palette, 
  HelpCircle, 
  LogOut, 
  Crown,
  Settings,
  ChevronRight
} from 'lucide-react';

interface ProfileProps {
  onLogout: () => void;
}

export function Profile({ onLogout }: ProfileProps) {
  const [notifications, setNotifications] = useState(true);

  const menuItems = [
    { icon: Youtube, label: 'Connected Channel', value: '@yourchannel', action: null },
    { icon: Bell, label: 'Notifications', value: null, action: 'toggle' },
    { icon: Palette, label: 'Appearance', value: 'Light', action: 'navigate' },
    { icon: Settings, label: 'Preferences', value: null, action: 'navigate' },
    { icon: HelpCircle, label: 'Help & Support', value: null, action: 'navigate' },
  ];

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-slate-800 text-3xl mb-2">Profile</h1>
        <p className="text-slate-600">Manage your account and preferences</p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 mb-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
            <img src={logo} alt="Logo" className="w-28 h-28 object-contain" />
          </div>
          <div>
            <h3 className="text-slate-800 mb-1">Creator Name</h3>
            <p className="text-slate-500">creator@email.com</p>
          </div>
        </div>
        
        {/* Premium Card */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5" />
                <p className="text-sm text-cyan-100">Premium Plan</p>
              </div>
              <p className="text-lg mb-1">Stress-free creating</p>
              <p className="text-sm text-cyan-100">Next billing: Jan 16, 2026</p>
            </div>
            <button className="px-5 py-2.5 bg-white text-cyan-600 rounded-xl hover:bg-cyan-50 transition-colors text-sm">
              Manage
            </button>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden mb-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === menuItems.length - 1;

          return (
            <div key={index}>
              <button
                onClick={() => {
                  if (item.action === 'toggle') {
                    setNotifications(!notifications);
                  }
                }}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-slate-100 rounded-xl">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <span className="text-slate-800">{item.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  {item.action === 'toggle' ? (
                    <div
                      className={`w-12 h-7 rounded-full transition-all duration-300 ${
                        notifications ? 'bg-cyan-500' : 'bg-slate-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full mt-1 transition-all duration-300 ${
                          notifications ? 'ml-6' : 'ml-1'
                        }`}
                      />
                    </div>
                  ) : item.value ? (
                    <>
                      <span className="text-slate-500">{item.value}</span>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </>
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              {!isLast && <div className="h-px bg-slate-100 mx-6" />}
            </div>
          );
        })}
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 mb-6">
        <h3 className="text-slate-800 mb-6">Your journey so far</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-500 mb-1">Videos planned</p>
            <p className="text-2xl text-slate-800">24</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Ideas saved</p>
            <p className="text-2xl text-slate-800">18</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Days active</p>
            <p className="text-2xl text-slate-800">47</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Stress reduced</p>
            <p className="text-2xl text-cyan-600">100%</p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="w-full px-6 py-4 bg-white hover:bg-red-50 text-red-600 rounded-2xl transition-colors border border-slate-200 hover:border-red-200 flex items-center justify-center gap-2" onClick={onLogout}>
        <LogOut className="w-5 h-5" />
        Log out
      </button>
    </div>
  );
}