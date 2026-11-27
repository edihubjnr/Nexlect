import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, Moon, Sun, X } from 'lucide-react';

import { Button } from '../ui/button';
import type { Theme } from '../../App';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navigationLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
];

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToHome = () => {
    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-3 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Nexlect home"
          onClick={scrollToHome}
        >
          <img
            src="/brand/nexlect-logo.png"
            alt="Nexlect logo"
            className="h-11 w-11 rounded-xl object-cover"
          />

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground">Nexlect</span>

            <span className="hidden text-xs text-muted-foreground sm:block">
              Connecting Minds. Building Knowledge.
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            onClick={scrollToHome}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          {navigationLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={scrollToHome}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            <div className="my-1 border-t border-border" />

            <Link to="/login" onClick={closeMenu} className="text-sm font-medium text-foreground">
              Log in
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
