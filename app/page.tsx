"use client";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
