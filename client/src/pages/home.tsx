import { Hero } from "@/components/hero";
import { WhatWeOffer } from "@/components/what-we-offer";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeOffer />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
