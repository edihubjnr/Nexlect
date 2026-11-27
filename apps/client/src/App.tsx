import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router';

import AppRoutes from './routes/index';

export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('nexlect-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('nexlect-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light',
    );
  };

  return (
    <BrowserRouter>
      <AppRoutes theme={theme} onToggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}

export default App;
