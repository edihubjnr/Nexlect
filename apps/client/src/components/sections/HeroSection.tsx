import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '../ui/button';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full min-h-[650px] max-w-screen-2xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Hero content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2">
            <GraduationCap size={17} className="text-primary" />
            <span className="text-xs font-semibold text-muted-foreground">
              A better way to learn together
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your academic journey,
            <span className="block text-primary">connected.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Connect with fellow students, share valuable learning resources, join study groups, and
            stay informed throughout your academic journey — all in one place.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2" onClick={() => navigate('/register')}>
              Get started
              <ArrowRight size={18} />
            </Button>

            <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
              Explore your community
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-primary" />
              <span className="text-sm text-muted-foreground">Student community</span>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-primary" />
              <span className="text-sm text-muted-foreground">Shared knowledge</span>
            </div>
          </div>
        </div>

        {/* Product preview */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-primary/5 sm:p-7">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="text-sm font-semibold text-card-foreground">Your academic space</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Everything you need to stay connected
                </p>
              </div>

              <div className="rounded-xl bg-primary/10 p-3">
                <GraduationCap className="text-primary" size={24} />
              </div>
            </div>

            {/* Study groups preview */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Study groups
              </p>

              <div className="mt-3 rounded-xl border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/10 p-3">
                    <Users size={20} className="text-blue-500" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-card-foreground">
                      Computer Science Group
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Collaborative learning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning resources preview */}
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Learning resources
              </p>

              <div className="mt-3 flex items-center gap-3 rounded-xl border border-border p-4">
                <div className="rounded-lg bg-emerald-500/10 p-3">
                  <BookOpen size={20} className="text-emerald-500" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-card-foreground">
                    Programming lecture notes
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Shared learning material</p>
                </div>
              </div>
            </div>

            {/* Announcement preview */}
            <div className="mt-5 rounded-xl bg-muted/60 p-4">
              <p className="text-xs font-semibold text-primary">COMMUNITY UPDATE</p>
              <p className="mt-2 text-sm font-medium text-card-foreground">
                Stay informed about your courses and academic activities.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Announcements from your class representatives.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
