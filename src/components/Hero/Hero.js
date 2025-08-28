import React, { useState } from "react";
import { ChevronDown, Download, Mail, Menu, X } from "lucide-react";
import "./particles.css"; // only for particle animations
import "./Hero.css"; // for additional Hero styles
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wide text-gradient">
            YourName.dev
          </div>
          <div className="hidden md:flex gap-6 text-gray-300">
            {["about", "skills", "projects", "experience", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-white transition-colors capitalize"
                >
                  {section}
                </button>
              )
            )}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-black/80">
            {["about", "skills", "projects", "experience", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-gray-300 hover:text-white transition-colors"
                >
                  {section}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          John{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
          Full-Stack Developer
        </h2>
        <p className="max-w-2xl text-gray-400 mb-6">
          Crafting digital experiences with code, creativity, and countless cups
          of coffee ☕
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
            <Download size={20} /> Download Resume
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-600 text-gray-200 hover:bg-gray-800 transition"
          >
            <Mail size={20} /> Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
