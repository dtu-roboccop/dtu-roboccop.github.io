import Image from "next/image";

const sponsors = [
  { name: "DTU", logo: "/images/sponsors/dtu.jpg" },
  { name: "Universal Robots", logo: "/images/sponsors/universal-robots.jpg" },
  { name: "NVIDIA", logo: "/images/sponsors/nvidia.jpg" },
  { name: "Festo", logo: "/images/sponsors/festo.jpg" },
  { name: "Mouser Electronics", logo: "/images/sponsors/mouser.jpg" },
  { name: "MathWorks", logo: "/images/sponsors/mathworks.jpg" },
];

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            Sponsors & Partners
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Backed by industry leaders
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Our sponsors and partners provide the resources, mentorship, and
            tools that make our projects possible.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group flex h-16 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={140}
                height={48}
                className="h-10 w-auto object-contain md:h-12"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Interested in sponsoring RoboCCop?
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md border border-primary/30 bg-transparent px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Become a partner
          </a>
        </div>
      </div>
    </section>
  );
}
