import { Contact } from "@/components/Contact";
import { Credibility } from "@/components/Credibility";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Methodology } from "@/components/Methodology";
import { Nav } from "@/components/Nav";
import { Research } from "@/components/Research";

import { WhatsNext } from "@/components/WhatsNext";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credibility />
        <Methodology />
        <Research />
        <WhatsNext />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
