import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Lasse Krogh",
    role: "President",
    focus: "AI & Controls",
    initials: "LK",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sofie Andersen",
    role: "Vice President",
    focus: "Mechanical Design",
    initials: "SA",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Mikkel Petersen",
    role: "Software Lead",
    focus: "ROS 2 & Embedded",
    initials: "MP",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Ida Christensen",
    role: "Hardware Lead",
    focus: "PCB & Sensors",
    initials: "IC",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Jonas Rasmussen",
    role: "ML Engineer",
    focus: "Computer Vision",
    initials: "JR",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Clara Nielsen",
    role: "Events Coordinator",
    focus: "Community & Outreach",
    initials: "CN",
    linkedin: "#",
    github: "#",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            The Team
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Meet the people behind the bots
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A multidisciplinary team of students passionate about pushing the
            boundaries of robotics.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex items-start gap-5 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-lg font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {member.initials}
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="text-base font-bold text-card-foreground">
                  {member.name}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {member.role}
                </span>
                <span className="mt-1.5 text-sm text-muted-foreground">
                  {member.focus}
                </span>
                <div className="mt-3 flex gap-3">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${member.name} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
