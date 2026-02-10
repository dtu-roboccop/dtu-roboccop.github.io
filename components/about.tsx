import { Bot, Cpu, Wrench, Users } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "AI & Machine Learning",
    description:
      "Deep learning, reinforcement learning, and computer vision for autonomous robotic systems.",
  },
  {
    icon: Cpu,
    title: "Software & Controls",
    description:
      "Embedded programming, ROS, control theory, and real-time systems that power our robots.",
  },
  {
    icon: Wrench,
    title: "Hardware & Design",
    description:
      "Mechanical design, 3D printing, PCB design, and sensor integration from concept to prototype.",
  },
  {
    icon: Users,
    title: "Community & Teams",
    description:
      "Cross-disciplinary collaboration, mentorship, and team formation for competitions and hackathons.",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Where engineering meets ambition
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We bring together students passionate about robotics to compete in
            international competitions, run hands-on workshops, and build projects
            that push the boundaries of what&apos;s possible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
