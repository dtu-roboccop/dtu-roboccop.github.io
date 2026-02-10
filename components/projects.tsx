"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";

interface Project {
  title: string;
  tags: string[];
  description: string;
  status: string;
  image: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    title: "Autonomous Line Follower",
    tags: ["Computer Vision", "PID Control", "Arduino"],
    description:
      "Competition-grade robot using camera-based line detection and adaptive PID control for high-speed track navigation.",
    status: "Active",
    image: "/images/projects/line-follower.jpg",
    gallery: ["/images/projects/line-follower.jpg"],
  },
  {
    title: "RoboCup Soccer Bot",
    tags: ["ROS 2", "SLAM", "Embedded Systems"],
    description:
      "Multi-agent robotic soccer player with real-time localization, path planning, and cooperative strategy execution.",
    status: "Active",
    image: "/images/projects/soccer-bot.jpg",
    gallery: ["/images/projects/soccer-bot.jpg"],
  },
  {
    title: "Drone Swarm Coordination",
    tags: ["Reinforcement Learning", "Multi-Agent", "Python"],
    description:
      "Research project exploring decentralized control algorithms for coordinated multi-drone formations.",
    status: "Research",
    image: "/images/projects/drone-swarm.jpg",
    gallery: ["/images/projects/drone-swarm.jpg"],
  },
  {
    title: "Robotic Arm Manipulator",
    tags: ["Inverse Kinematics", "3D Printing", "Servo Control"],
    description:
      "6-DOF robotic arm with custom end-effectors, built from scratch for precision pick-and-place tasks.",
    status: "Completed",
    image: "/images/projects/robotic-arm.jpg",
    gallery: ["/images/projects/robotic-arm.jpg"],
  },
  {
    title: "Object Detection Pipeline",
    tags: ["YOLO", "TensorRT", "Jetson Nano"],
    description:
      "Edge-optimized real-time object detection system for competition robots using NVIDIA Jetson hardware.",
    status: "Active",
    image: "/images/projects/object-detection.jpg",
    gallery: ["/images/projects/object-detection.jpg"],
  },
  {
    title: "Balancing Robot Platform",
    tags: ["IMU", "Kalman Filter", "C++"],
    description:
      "Two-wheeled self-balancing robot platform used as a teaching tool for control systems workshops.",
    status: "Completed",
    image: "/images/projects/balancing-robot.jpg",
    gallery: ["/images/projects/balancing-robot.jpg"],
  },
];

function getStatusStyle(status: string) {
  switch (status) {
    case "Active":
      return "border-primary/40 text-primary bg-primary/10";
    case "Research":
      return "border-muted-foreground/30 text-muted-foreground bg-muted";
    case "Completed":
      return "border-border text-muted-foreground bg-secondary";
    default:
      return "border-border text-muted-foreground bg-muted";
  }
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  }, [project.gallery.length]);

  const prevImage = useCallback(() => {
    setCurrentImage(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );
  }, [project.gallery.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      tabIndex={-1}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-border bg-card"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="document"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label="Close project details"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-video bg-secondary">
          <Image
            src={project.gallery[currentImage] || "/placeholder.svg"}
            alt={`${project.title} - photo ${currentImage + 1}`}
            fill
            className="object-cover"
          />

          {project.gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                aria-label="Next photo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.gallery.map((_, idx) => (
                  <button
                    key={`dot-${project.title}-${idx}`}
                    type="button"
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      idx === currentImage
                        ? "bg-primary-foreground"
                        : "bg-primary-foreground/40"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`rounded-full border px-3 py-0.5 font-mono text-xs uppercase tracking-wider ${getStatusStyle(project.status)}`}
            >
              {project.status}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ImagePlus className="h-3 w-3" />
              {project.gallery.length} photo{project.gallery.length !== 1 ? "s" : ""}
            </span>
          </div>
          <h3 className="mb-2 text-2xl font-bold text-card-foreground">
            {project.title}
          </h3>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="border-t border-border px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
              Our Projects
            </span>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              What we&apos;re building
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              From competition robots to research prototypes, our projects span
              the full spectrum of modern robotics.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <button
                type="button"
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span
                    className={`absolute top-3 left-3 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${getStatusStyle(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1.5 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
