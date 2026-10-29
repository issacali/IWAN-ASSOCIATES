import React from "react";
import { ArrowRight, ChevronDown, Scale, Shield, FileText } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center bg-navy-deep text-white overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Background Architectural Atmosphere & Deep Navy Gradients */}
      <div className="absolute inset-0 z-0">
        {/* SVG Architectural Columns / Grand Courtroom Vault Graphic */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 20%, rgba(198, 161, 91, 0.15), transparent 70%), linear-gradient(180deg, rgba(11, 20, 36, 0.85) 0%, rgba(16, 29, 50, 0.95) 50%, #0B1424 100%)`,
          }}
        />

        {/* Subtle Geometric Classical Columns Grid */}
        <div className="absolute inset-0 legal-grid-pattern opacity-30" />

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
        {/* Top Eyebrow / Bar Notice */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 bg-navy-primary/80 backdrop-blur-sm text-gold-light text-xs font-medium uppercase tracking-[0.25em] mb-8">
          <Scale className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          <span>Iwan Associates Advocates &amp; Legal Consultants</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ivory leading-[1.15] sm:leading-[1.18] mb-6 uppercase">
          <span className="text-gold-light font-medium">Criminal</span>,{" "}
          <span className="text-ivory">Family</span>,{" "}
          <span className="text-gold-light font-medium">Tribunal</span> and{" "}
          <span className="text-ivory">Corporate Investigations</span>{" "}
          <span className="block mt-2 font-light text-ivory/95">
            Law Experts
          </span>
        </h1>

        {/* Refined Gold Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rotate-45 border border-gold bg-gold/20" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Supporting Headline */}
        <p className="font-serif text-lg sm:text-xl lg:text-2xl text-gold-light/95 italic font-normal tracking-wide mb-4">
          Strategic Legal Representation. Rigorous Research. Dedicated Advocacy.
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory/80 leading-relaxed font-sans font-light mb-10">
          Dedicated to protecting your rights from Trial Courts up to the Supreme Court of India.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-navy-deep bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:to-gold transition-all duration-300 shadow-gold hover:shadow-gold-lg group"
          >
            <span>Get Legal Advice Today</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#practice-areas"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-ivory bg-transparent border border-gold/60 hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            <span>Explore Our Practice Areas</span>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-gold/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3 text-ivory/80">
            <Shield className="w-5 h-5 text-gold flex-shrink-0" />
            <div className="text-xs">
              <span className="block font-medium text-ivory uppercase tracking-wider">Supreme Court &amp; High Courts</span>
              <span className="text-ivory/60">Appellate &amp; Special Leave Petitions</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-ivory/80">
            <FileText className="w-5 h-5 text-gold flex-shrink-0" />
            <div className="text-xs">
              <span className="block font-medium text-ivory uppercase tracking-wider">Specialized Financial Defense</span>
              <span className="text-ivory/60">CBI, ED, PMLA &amp; Cyber Evidence</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-ivory/80">
            <Scale className="w-5 h-5 text-gold flex-shrink-0" />
            <div className="text-xs">
              <span className="block font-medium text-ivory uppercase tracking-wider">Tribunal Proceedings</span>
              <span className="text-ivory/60">NCLT, NGT, DRT &amp; Administrative CAT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#about"
          className="text-gold/60 hover:text-gold transition-colors p-2"
          aria-label="Scroll to About Section"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
