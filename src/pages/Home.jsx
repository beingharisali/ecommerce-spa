import React from "react";
import Hero from "../components/ui/Hero";
import Testimonials from "../components/ui/Testimonials";
import CTA from "../components/ui/CTA";
import Blog from "../components/ui/Blog";

function Home() {
  return (
    <div>
      <Hero />
      <Blog />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home;
