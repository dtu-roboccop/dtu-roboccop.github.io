import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Projects } from "@/components/projects";
import { Team } from "@/components/team";
import { Sponsors } from "@/components/sponsors";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Projects />
        <Team />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
