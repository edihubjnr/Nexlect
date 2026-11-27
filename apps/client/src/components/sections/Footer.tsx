
import { ArrowUp, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router';

const footerLinks = {
  platform: [
    { label: 'Features', href: '/#features' },
    { label: 'About Nexlect', href: '/#about' },
  ],
  account: [
    { label: 'Create account', href: '/register' },
    { label: 'Sign in', href: '/login' },
  ],
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap size={25} />
              </div>

              <span className="text-xl font-bold tracking-tight text-foreground">
                Nexlect
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Connecting Minds. Building Knowledge. A university academic
              community designed to make collaboration and knowledge sharing
              easier.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <BookOpen size={18} />
              <span>Learn together. Grow together.</span>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="font-semibold text-foreground">Platform</h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h3 className="font-semibold text-foreground">Account</h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.account.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nexlect. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
