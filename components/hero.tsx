import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 72% 35%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 72% 35%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Build the
            <br />
            <span className="text-primary">Future</span> of
            <br />
            Robotics
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            RoboCCop is Copenhagen&apos;s student-driven robotics community at DTU.
            We compete, build, and learn together - from AI and computer vision
            to control systems and mechanical design.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-md bg-primary px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Involved
            </a>
            <a
              href="#about"
              className="rounded-md border border-border bg-transparent px-8 py-3 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <Image
            src="/images/logo-black.jpeg"
            alt="RoboCCop - Robotics Club Copenhagen logo with mechanical lion"
            width={450}
            height={450}
            className="relative z-10 h-auto w-72 md:w-96 lg:w-[450px]"
            priority
          />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
