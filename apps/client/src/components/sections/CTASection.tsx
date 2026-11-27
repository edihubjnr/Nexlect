
import { ArrowRight, GraduationCap, Users } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '../ui/button';

function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="bg-muted/30 px-6 py-24 lg:px-10">
      <div className="relative mx-auto w-full max-w-screen-2xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 lg:py-20">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-primary-foreground/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-primary-foreground/10" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10">
            <GraduationCap size={30} className="text-primary-foreground" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Your academic community starts here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
            Connect with fellow students, discover valuable learning
            resources, and make your university experience more collaborative.
            Be part of a community built around shared knowledge and growth.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => navigate('/register')}
            >
              Join Nexlect
              <ArrowRight size={18} />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => navigate('/login')}
            >
              Sign in
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <Users size={17} />
              Learn together
            </span>

            <span className="flex items-center gap-2">
              <GraduationCap size={17} />
              Grow together
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
