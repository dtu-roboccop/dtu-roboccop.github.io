"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, X } from "lucide-react";

interface EventItem {
  title: string;
  date: string;
  sortDate: string;
  time: string;
  location: string;
  type: string;
  description: string;
}

const upcomingEvents: EventItem[] = [
  {
    title: "Intro to ROS 2 Workshop",
    date: "March 5, 2026",
    sortDate: "2026-03-05",
    time: "17:00 - 19:00",
    location: "DTU Building 303A",
    type: "Workshop",
    description:
      "Hands-on workshop covering Robot Operating System 2 fundamentals. Bring your laptop.",
  },
  {
    title: "RoboCup Preparation Sprint",
    date: "March 15 - 16, 2026",
    sortDate: "2026-03-15",
    time: "All Day",
    location: "DTU Skylab",
    type: "Competition Prep",
    description:
      "Weekend sprint to finalize our RoboCup entry. All team members welcome.",
  },
  {
    title: "Guest Keynote: Autonomous Navigation",
    date: "March 22, 2026",
    sortDate: "2026-03-22",
    time: "16:00 - 17:30",
    location: "DTU Building 101, Auditorium",
    type: "Keynote",
    description:
      "Industry talk on autonomous navigation by a lead engineer from Universal Robots.",
  },
  {
    title: "Spring Hackathon",
    date: "April 4 - 6, 2026",
    sortDate: "2026-04-04",
    time: "48 hours",
    location: "DTU Skylab",
    type: "Hackathon",
    description:
      "Form teams and build a working robotic prototype in 48 hours. Prizes for the top 3 teams.",
  },
];

const pastEvents: EventItem[] = [
  {
    title: "Soldering & PCB Design Workshop",
    date: "January 22, 2026",
    sortDate: "2026-01-22",
    time: "17:00 - 20:00",
    location: "DTU Building 308",
    type: "Workshop",
    description:
      "Hands-on session covering PCB layout basics and through-hole soldering techniques.",
  },
  {
    title: "RoboCCop Winter Social",
    date: "December 12, 2025",
    sortDate: "2025-12-12",
    time: "18:00 - 22:00",
    location: "DTU Skylab Lounge",
    type: "Social",
    description:
      "End-of-semester gathering with demos of fall projects and team celebrations.",
  },
  {
    title: "Computer Vision for Robotics",
    date: "November 18, 2025",
    sortDate: "2025-11-18",
    time: "16:00 - 18:00",
    location: "DTU Building 303A",
    type: "Workshop",
    description:
      "Introduction to OpenCV and real-time object detection for robotic applications.",
  },
  {
    title: "DTU Robotics Demo Day",
    date: "October 25, 2025",
    sortDate: "2025-10-25",
    time: "10:00 - 16:00",
    location: "DTU Main Hall",
    type: "Exhibition",
    description:
      "Public showcase of student robotics projects with live demonstrations and poster presentations.",
  },
  {
    title: "Intro to SLAM Workshop",
    date: "September 30, 2025",
    sortDate: "2025-09-30",
    time: "17:00 - 19:30",
    location: "DTU Building 303A",
    type: "Workshop",
    description:
      "Workshop on Simultaneous Localization and Mapping using LiDAR-based approaches.",
  },
];

function getTypeStyles(type: string) {
  switch (type) {
    case "Workshop":
      return "border-primary/40 text-primary bg-primary/10";
    case "Competition Prep":
      return "border-muted-foreground/40 text-muted-foreground bg-muted";
    case "Keynote":
      return "border-primary/30 text-primary bg-primary/5";
    case "Hackathon":
      return "border-primary/50 text-primary bg-primary/15";
    case "Social":
      return "border-muted-foreground/30 text-muted-foreground bg-muted";
    case "Exhibition":
      return "border-primary/35 text-primary bg-primary/8";
    default:
      return "border-border text-muted-foreground bg-muted";
  }
}

function sortByProximity(events: EventItem[], direction: "asc" | "desc") {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.sortDate).getTime();
    const dateB = new Date(b.sortDate).getTime();
    return direction === "asc" ? dateA - dateB : dateB - dateA;
  });
}

function EventCard({ event, isPast }: { event: EventItem; isPast?: boolean }) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40 sm:flex-row ${isPast ? "opacity-75 hover:opacity-100" : ""}`}
    >
      <div className="flex shrink-0 items-center justify-center bg-secondary px-6 py-6 sm:w-28 sm:flex-col">
        <div className="text-center">
          <span className="block font-mono text-sm uppercase tracking-wider text-muted-foreground">
            {new Date(event.sortDate).toLocaleString("en-US", {
              month: "short",
            })}
          </span>
          <span className="block text-3xl font-bold text-foreground">
            {new Date(event.sortDate).getDate()}
          </span>
          <span className="block font-mono text-xs text-muted-foreground">
            {new Date(event.sortDate).getFullYear()}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`rounded-full border px-3 py-0.5 font-mono text-xs uppercase tracking-wider ${getTypeStyles(event.type)}`}
            >
              {event.type}
            </span>
          </div>
          <h3 className="mb-1.5 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {event.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}

function EventModal({
  event,
  onClose,
}: {
  event: EventItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${event.title} event details`}
      tabIndex={-1}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="document"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label="Close event details"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="border-b border-border bg-secondary/60 px-6 py-5">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-0.5 font-mono text-xs uppercase tracking-wider ${getTypeStyles(event.type)}`}
            >
              {event.type}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">
            {event.title}
          </h3>
        </div>

        <div className="space-y-5 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {event.description}
          </p>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {event.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {event.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {event.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const sortedUpcoming = sortByProximity(upcomingEvents, "asc");
  const sortedPast = sortByProximity(pastEvents, "desc");

  const currentEvents = activeTab === "upcoming" ? sortedUpcoming : sortedPast;

  return (
    <>
      <section
        id="events"
        className="border-t border-border px-6 py-24 md:py-32"
      >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
              Events
            </span>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              What&apos;s happening
            </h2>
          </div>
          <p className="max-w-md text-pretty text-muted-foreground">
            Join us at workshops, competitions, and social events. Open to all
            DTU students regardless of experience level.
          </p>
        </div>

        <div className="mb-8 flex items-center gap-1 border-b border-border">
          <button
            type="button"
            onClick={() => setActiveTab("upcoming")}
            className={`relative px-5 py-3 font-mono text-sm uppercase tracking-wider transition-colors ${
              activeTab === "upcoming"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Upcoming
            {activeTab === "upcoming" && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("past")}
            className={`relative px-5 py-3 font-mono text-sm uppercase tracking-wider transition-colors ${
              activeTab === "past"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Past
            {activeTab === "past" && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {currentEvents.map((event) => (
            <button
              key={event.title}
              type="button"
              onClick={() => setSelectedEvent(event)}
              className="text-left"
            >
              <EventCard event={event} isPast={activeTab === "past"} />
            </button>
          ))}
        </div>

        {activeTab === "upcoming" && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            More events coming soon. Follow us on social media for updates.
          </p>
        )}
      </div>
      </section>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}
