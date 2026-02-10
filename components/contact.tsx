'use client';

import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  // { label: "Instagram", href: "#" },
  // { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "https://github.com/dtu-roboccop" },
  { label: "Discord", href: "https://discord.gg/Q6wu8r27" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
          Join RoboCCop
        </span>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Ready to build something?
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Whether you&apos;re a seasoned engineer or a curious beginner, there&apos;s
          a place for you. No application needed - just show up to one of our
          events or reach out.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:roboccop@student.dtu.dk"
              className="transition-colors hover:text-foreground"
            >
              roboccop@student.dtu.dk
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>DTU - Technical University of Denmark, Lyngby</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 font-mono text-sm text-card-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
