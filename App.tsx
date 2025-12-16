import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AppMain } from './components/AppMain';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <HomePage onLogin={() => setIsLoggedIn(true)} />;
  }

  return <AppMain onLogout={() => setIsLoggedIn(false)} />;
}