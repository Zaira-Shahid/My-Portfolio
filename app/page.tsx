import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Process />
      <WhyWorkWithMe />
      <Contact />
    </>
  );
}
