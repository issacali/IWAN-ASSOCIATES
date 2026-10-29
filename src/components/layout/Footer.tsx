"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Clock, ShieldCheck, Scale, ArrowUp } from "lucide-react";
import { LegalDisclaimerModal } from "@/components/modals/LegalDisclaimerModal";
import { PrivacyPolicyModal } from "@/components/modals/PrivacyPolicyModal";

export const Footer: React.FC = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-navy-deep text-white border-t border-gold/30 relative">
        {/* Subtle Gold Divider */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-11 h-11 border border-gold/70 bg-navy-primary shadow-inner">
                  <span className="font-serif text-lg font-bold text-gold tracking-widest">
                    IA
                  </span>
                  <div className="absolute inset-0.5 border border-gold/20 pointer-events-none" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wider text-ivory uppercase">
                    IWAN ASSOCIATES
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] text-gold-light uppercase font-medium">
                    Advocates &amp; Legal Consultants
                  </p>
                </div>
              </div>

              <p className="text-sm text-ivory/70 leading-relaxed font-light max-w-sm">
                Professional legal assistance focused on criminal litigation, white-collar crime, family law, appellate matters, and specialized tribunals.
              </p>

              <div className="flex items-center gap-2 text-xs text-gold-light/80 pt-2">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Practicing before Supreme Court of India &amp; National Tribunals</span>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold-light">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-ivory/80 font-light">
                <li>
                  <a href="#home" className="hover:text-gold transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gold transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-gold transition-colors">
                    Practice Areas
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-gold transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-gold transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gold transition-colors">
                    Contact &amp; Consultations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information & Compliance */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold-light">
                Office Enquiries
              </h4>

              <div className="space-y-3 text-sm text-ivory/80">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-ivory/50 uppercase tracking-wider">
                      Telephone Lines
                    </span>
                    <a
                      href="tel:+918744090454"
                      className="block text-gold hover:text-white transition-colors font-medium mt-0.5"
                    >
                      +91 87440904546
                    </a>
                    <a
                      href="tel:+919547964009"
                      className="block text-gold hover:text-white transition-colors font-medium"
                    >
                      +91 9547964009
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                  <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-ivory/50 uppercase tracking-wider">
                      Consultation Hours
                    </span>
                    <span className="text-ivory font-medium mt-0.5 block">
                      10:00 AM – 08:00 PM (IST)
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setDisclaimerOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-gold-light/90 hover:text-gold underline underline-offset-4"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>View Bar Council Legal Disclaimer</span>
                </button>
              </div>
            </div>
          </div>

          {/* Legal Compliance Summary & Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
            <div>
              <p>&copy; 2026 IWAN ASSOCIATES. All rights reserved.</p>
              <p className="text-[11px] text-ivory/45 mt-0.5">
                The content on this website is for informational purposes only and does not constitute formal legal advice.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-gold transition-colors focus:outline-none"
              >
                Privacy Policy
              </button>
              <span className="text-white/20">|</span>
              <button
                type="button"
                onClick={() => setDisclaimerOpen(true)}
                className="hover:text-gold transition-colors focus:outline-none"
              >
                Legal Disclaimer
              </button>
              <span className="text-white/20">|</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LegalDisclaimerModal
        isOpen={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
      />
      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </>
  );
};
