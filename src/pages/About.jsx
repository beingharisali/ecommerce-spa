import React from "react";
import Features from "../components/ui/Features";
import Testimonials from "../components/ui/Testimonials";
import CTA from "../components/ui/CTA";
import Stats from "../components/ui/Stats";
import Team from "../components/ui/Team";

function About() {
  return (
    <div>
      <Features />
      <Stats />
      <Team />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default About;
