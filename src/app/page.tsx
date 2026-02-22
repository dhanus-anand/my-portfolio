import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
// import { Certifications } from "@/components/sections/Certifications";
// import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main id="main-content" className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        {/* <Certifications /> */}
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
