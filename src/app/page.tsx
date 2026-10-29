import React from "react";
import { TopInfoBar } from "@/components/layout/TopInfoBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Two-Level Header: Top Information Bar & Sticky Main Navigation */}
      <TopInfoBar />
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About The Firm */}
      <AboutSection />

      {/* Practice Areas */}
      <PracticeAreasSection />

      {/* Our Founding Team */}
      <TeamSection />

      {/* Why Choose IWAN ASSOCIATES */}
      <WhyChooseUsSection />

      {/* Mid-page Consultation Call-to-Action Banner */}
      <ConsultationCTA />

      {/* Contact Section & Consultation Form */}
      <ContactSection />

      {/* Deep Navy Footer */}
      <Footer />
    </main>
  );
}
