"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={resolvedTheme === "dark" ? "/images/logo-white.jpeg" : "/images/logo-red.jpeg"}
            alt="RoboCCop logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="font-mono text-sm font-bold tracking-tight text-foreground">
            ROBOCCOP
          </span>
          <span className="text-sm text-muted-foreground">
            Robotics Club Copenhagen
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          DTU - Technical University of Denmark
        </p>
      </div>
    </footer>
  );
}
