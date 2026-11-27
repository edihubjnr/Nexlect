import { BookOpen, CalendarCheck, Megaphone, Users } from 'lucide-react';

const features = [
  {
    title: 'Collaborative Study Groups',
    description:
      'Connect with fellow students, form study groups, exchange ideas, and work together towards academic success.',
    icon: Users,
    iconStyle: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'Learning Resources',
    description:
      'Discover, upload, and share lecture notes, study materials, past questions, and other valuable academic resources.',
    icon: BookOpen,
    iconStyle: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    title: 'Academic Announcements',
    description:
      'Stay informed about course updates, important notices, and announcements from your class representatives.',
    icon: Megaphone,
    iconStyle: 'bg-purple-500/10 text-purple-500',
  },
  {
    title: 'Assignments and Deadlines',
    description:
      'Keep track of academic tasks, upcoming deadlines, and important activities throughout your semester.',
    icon: CalendarCheck,
    iconStyle: 'bg-orange-500/10 text-orange-500',
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 px-6 py-24 lg:px-8">
      <div className="mx-auto w-full max-w-screen-2xl px-2 sm:px-4">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What Nexlect offers
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to learn better, together.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground">
            From collaborative study spaces to shared academic resources, Nexlect brings essential
            parts of your university learning experience into one connected community.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className={`inline-flex rounded-xl p-3 ${feature.iconStyle}`}>
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-card-foreground">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
