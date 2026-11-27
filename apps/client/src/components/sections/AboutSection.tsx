
import { ArrowRight, GraduationCap, Lightbulb, Users } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '../ui/button';

const values = [
  {
    icon: Users,
    title: 'Community',
    description:
      'Building meaningful connections between students through collaboration and shared experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Knowledge Sharing',
    description:
      'Making academic knowledge and learning resources easier to discover and access.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Growth',
    description:
      'Encouraging students to learn, contribute, and grow together throughout their academic journey.',
  },
];

function AboutSection() {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto grid w-full max-w-screen-2xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* About content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Nexlect
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Making academic collaboration easier for everyone.
          </h2>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            University life involves more than attending lectures. Students
            need access to learning materials, meaningful academic connections,
            timely information, and opportunities to collaborate.
          </p>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Nexlect brings these experiences together in one academic
            community, helping students connect with their peers, exchange
            knowledge, and stay informed throughout their educational journey.
          </p>

          <Button
            className="mt-8 gap-2"
            onClick={() => navigate('/register')}
          >
            Join the community
            <ArrowRight size={18} />
          </Button>
        </div>

        {/* Core values */}
        <div className="grid gap-5">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="h-fit rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
