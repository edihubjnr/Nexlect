import { Route, Routes } from 'react-router';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import type { Theme } from '../App';
import NotFoundPage from '@/pages/404Page';

interface AppRoutesProps {
  theme: Theme;
  onToggleTheme: () => void;
}

function AppRoutes({ theme, onToggleTheme }: AppRoutesProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            theme={theme}
            onToggleTheme={onToggleTheme}
          />
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
